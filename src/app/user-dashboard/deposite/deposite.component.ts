import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.scss'],
})
export class DepositeComponent implements OnInit {
  crypto = true;
  cryptoTapOpend = 'tap1';
  withdrawForm: FormGroup;
  balances = [
    {
      name: 'BTC',
      value: '0.000002130',
    },
    {
      name: 'ETH',
      value: '0.000002130',
    },
    {
      name: 'RVN',
      value: '0.000002130',
    },
    {
      name: 'STX',
      value: '0.000002130',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.withdrawForm = new FormGroup({
      address: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(32),
          Validators.maxLength(32),
        ],
      }),
      amount: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(/^[0-9]+$/)],
      }),
    });
  }
  onWithdraw() {}
  cryptoPlansTap1() {
    this.cryptoTapOpend = 'tap1';
  }
  cryptoPlansTap2() {
    this.cryptoTapOpend = 'tap2';
  }
  cryptoPlansTap3() {
    this.cryptoTapOpend = 'tap3';
  }
  cryptoPlansTap4() {
    this.cryptoTapOpend = 'tap4';
  }
  //to do https://stackoverflow.com/questions/49102724/angular-5-copy-to-clipboard
}
