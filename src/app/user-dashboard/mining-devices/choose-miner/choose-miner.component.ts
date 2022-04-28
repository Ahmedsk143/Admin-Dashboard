import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-miner',
  templateUrl: './choose-miner.component.html',
  styleUrls: ['./choose-miner.component.scss'],
})
export class ChooseMinerComponent implements OnInit {
  miners = [
    {
      name: 'Antminer L7 9500Mh ',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      crypto2: 'ETH (Ethereum)',
      algorithm: 'SHA-256',
      power: '23 580',
      profitability: 143,
      unitPrice: '12,000',
      price: 112.69,
    },
    {
      name: 'Antminer E9',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      crypto2: 'ETH (Ethereum)',
      algorithm: 'SHA-256',
      power: '23 580 GH/S',
      unitPrice: '12,000',
      profitability: 143,
      price: 1112.69,
    },
    {
      name: 'Antminer S19 Pro',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      crypto2: 'ETH (Ethereum)',
      algorithm: 'SHA-256',
      power: '23 580 GH/S      ',
      unitPrice: '12,000',
      profitability: 143,
      price: 1122.69,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
