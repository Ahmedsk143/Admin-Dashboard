import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DashboardService } from '../../user-dashboard.service';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss'],
})
export class ChoosePlanComponent implements OnInit {
  short = true;
  btc: any = true;
  shortPlansOpend = 'tap1';
  longPlansOpend = 'tap1';
  tap1Data: any;
  tap2Data: any;
  tap3Data: any;
  tap4Data: any;

  /////////////////////////////////////initial data/////////////////////////////////////////////
  shortPlans = [
    {
      type: 'loading...',
      icon: '',
      crypto: 'loading...',
      power: 'loading...',
      pricePer: 'loading...',
      profitability: 'loading...',
      price: 0,
    },
  ];

  plans = new Array();
  constructor(private http: HttpClient, private dashboard: DashboardService) {}

  ngOnInit(): void {
    this.dashboard.getHashrateContractPlans().subscribe((res: any) => {
      console.log(res);
      for (let i = 0; i < res.plans.length; i++) {
        const ele = {
          type: `${res.plans[i].planName} Miners`,
          icon: '',
          crypto: `${res.plans[i].cryptoName}`,
          power: res.PlansHashPower[1].toFixed(6),
          pricePer: '',
          profitability: `${res.plans[i].profitability}`,
          price: `${res.plans[i].price}`,
        };
        console.log(ele);
        this.plans.push(ele);
      }
      //console.log(this.plans);
      this.shortPlans = [];
      this.shortPlans = this.plans;
    });
  }

  shortPlansTap1() {
    this.shortPlansOpend = 'tap1';
  }
  shortPlansTap2() {
    this.shortPlansOpend = 'tap2';
  }
  shortPlansTap3() {
    this.shortPlansOpend = 'tap3';
  }
  shortPlansTap4() {
    this.shortPlansOpend = 'tap4';
  }
  longPlansTap1() {
    this.longPlansOpend = 'tap1';
  }
  longPlansTap2() {
    this.longPlansOpend = 'tap2';
  }
  longPlansTap3() {
    this.longPlansOpend = 'tap3';
  }
  longPlansTap4() {
    this.longPlansOpend = 'tap4';
  }
}

///////////////////////////////////////////////////////////old
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-choose-plan',
//   templateUrl: './choose-plan.component.html',
//   styleUrls: ['./choose-plan.component.scss'],
// })
// export class ChoosePlanComponent implements OnInit {
//   short = true;
//   shortPlansOpend = 'tap1';
//   longPlansOpend = 'tap1';
//   tap1Data: any;
//   tap2Data: any;
//   tap3Data: any;
//   tap4Data: any;
//   shortPlans = [
//     {
//       type: 'Lite Miners ',
//       icon: '',
//       crypto: 'BTC (Bitcoin)',
//       power: '',
//       pricePer: '',
//       profitability: '',
//       price: 200,
//     },
//     {
//       type: 'Regular Miners ',
//       icon: '',
//       crypto: 'BTC (Bitcoin)',
//       power: '',
//       pricePer: '',
//       profitability: '',
//       price: 500,
//     },
//     {
//       type: 'Pro Miners',
//       icon: '',
//       crypto: 'BTC (Bitcoin)',
//       power: '',
//       pricePer: '',
//       profitability: '',
//       price: 1000,
//     },
//     {
//       type: 'Elite Miners',
//       icon: '',
//       crypto: 'BTC (Bitcoin)',
//       power: '',
//       pricePer: '',
//       profitability: '',
//       price: 5000,
//     },
//   ];
//   longPlans = [
//     {
//       type: 'Lite Miners ',
//       icon: '',
//       crypto: 'BTC (Bitcoin)',
//       power: '',
//       pricePer: '',
//       profitability: '',
//       price: 3000,
//     },
//     {
//       type: 'Regular Miners ',
//       icon: '',
//       crypto: 'BTC (Bitcoin)',
//       power: '',
//       pricePer: '',
//       profitability: '',
//       price: 6000,
//     },
//     {
//       type: 'Pro Miners',
//       icon: '',
//       crypto: 'BTC (Bitcoin)',
//       power: '',
//       pricePer: '',
//       profitability: '',
//       price: 20000,
//     },
//     {
//       type: 'Elite Miners',
//       icon: '',
//       crypto: 'BTC (Bitcoin)',
//       power: '',
//       pricePer: '',
//       profitability: '',
//       price: 60000,
//     },
//   ];
//   constructor() {}

//   ngOnInit(): void {}

//   shortPlansTap1() {
//     this.shortPlansOpend = 'tap1';
//   }
//   shortPlansTap2() {
//     this.shortPlansOpend = 'tap2';
//   }
//   shortPlansTap3() {
//     this.shortPlansOpend = 'tap3';
//   }
//   shortPlansTap4() {
//     this.shortPlansOpend = 'tap4';
//   }
//   longPlansTap1() {
//     this.longPlansOpend = 'tap1';
//   }
//   longPlansTap2() {
//     this.longPlansOpend = 'tap2';
//   }
//   longPlansTap3() {
//     this.longPlansOpend = 'tap3';
//   }
//   longPlansTap4() {
//     this.longPlansOpend = 'tap4';
//   }
// }
