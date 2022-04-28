import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent implements OnInit {
  newPasswordForm!: FormGroup;
  newPass = false;
  confirmPass = false;
  constructor() {}

  ngOnInit(): void {
    this.newPasswordForm = new FormGroup({
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)],
      }),
      confirm: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)],
      }),
    });
  }
  newPassowrd() {}
  changeInput1(input: any): any {
    this.newPass = !this.newPass;
    input.type = input.type === 'password' ? 'text' : 'password';
  }
  changeInput2(input: any): any {
    this.confirmPass = !this.confirmPass;
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
