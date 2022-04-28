import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Numeric, stratify } from 'd3';
import { AuthService } from 'src/app/Auth/auth.service';
import { Balance } from '../balance.model';
import { DashboardService } from '../user-dashboard.service';
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  //////////////////////////////////////////////////////////added vars
  _name: any = sessionStorage.getItem('name');
  _balance_btc: any = sessionStorage.getItem('balance_btc')
    ? Number(sessionStorage.getItem('balance_btc')).toFixed(0)
    : '0';
  _balance_eth: any = sessionStorage.getItem('balance_eth')
    ? Number(sessionStorage.getItem('balance_eth')).toFixed(5)
    : '0';
  _activePlans: any = sessionStorage.getItem('activePlans');
  _devices: any = sessionStorage.getItem('devices');

  _balance_rvn: any = '0';
  _balance_stx: any = '0';
  _miningSpeed = 3.23;
  //////////////////////////////////////////////////////////////////////

  UserData: any;
  minedTapOpend = 'tap1';
  minedChartTapOpend = 'tap1';
  gainsChartTapOpend = 'tap1';
  config1 = {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    },
  };
  config2 = {
    type: 'line',
    data: data,
  };
  ////////////////////////////////////i added this
  balances = new Array();
  array = new Array(); ///// this is for the BTC ETH STX RVN
  item: any;

  BTC: any;
  ETH: any;
  RVN: any;
  STX: any;

  /////////////////////////////////////////////// i added this to manupulate the graph Data
  btcMiningDetails = new Array(12, 51, 62, 33, 21, 62, 45, 50, 30);
  ethMiningDetails = new Array(10, 20, 20, 20, 50, 10, 40, 50, 30);
  stxMiningDetails = new Array(15, 20, 24, 30, 40, 62, 45, 50, 30);
  rvnMiningDetails = new Array(80, 70, 50, 30, 80, 50, 30, 50, 30);
  ////////////////////////////////////////////// i added this to make the color &Data of graph as constant
  graphColor: string = 'rgba(255, 73, 128, 1)';
  graphBackground: string = 'rgba(255, 73, 128, 0.2)';
  graphData = new Array(
    'Mar 1',
    'Mar 2',
    'Mar 3',
    'Mar 4',
    'Mar 5',
    'Mar 6',
    'Mar 7',
    'Mar 8',
    'Mar 9'
  );
  graphTension = 0.4;
  ////////////////////////////////////////////// i added this to make the color of BasicOptioBackground as constant
  basicOptionBackground: string = 'rgba(29, 26, 39, 0.6)';
  //////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////
  multi: any;
  view: any = [700, 350];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Day';
  yAxisLabel: string = 'Mined';
  timeline: boolean = false;
  showGridLines: boolean = true;

  tap1Data: any;
  tap2Data: any;
  tap3Data: any;
  tap4Data: any;

  basicOptions: any;

  btcPrice: string;
  ethPrice: string;
  rvnPrice: string;
  stxPrice: string;

  constructor(
    private dashboard: DashboardService,
    private authServics: AuthService
  ) {
    Chart.register(...registerables);
  }

  async ngOnInit() {
    this.UserData = this.authServics.UserData();
    //this fetches the data and push it in the balances$ stream

    //this is fetching the data from the server and the external API and load cards
    await this.dashboard.getPriceOfBitcoin().subscribe({
      next: (res) => {
        this.btcPrice = res.USD;
        this.balances.push({
          currency: 'BTC',
          currencyBalance: this.UserData.balance_btc
            ? this.UserData.balance_btc
            : this._balance_btc,
          plans: this.UserData.activePlans
            ? this.UserData.activePlans
            : this._activePlans,
          devices: this.UserData.devices
            ? this.UserData.devices
            : this._devices,
          price: this.btcPrice,
          miningSpeed: '3,230',
          mined: 0.000003,
          minWithdraw: 0.00005,
        });

        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    await this.dashboard.getPriceOfEth().subscribe({
      next: (res) => {
        this.ethPrice = res.USD;
        this.balances.push({
          currency: 'ETH',
          currencyBalance: this.UserData.balance_eth
            ? this.UserData.balance_eth
            : this._balance_eth,
          plans: this.UserData.activePlans
            ? this.UserData.activePlans
            : this._activePlans,
          devices: this.UserData.devices
            ? this.UserData.devices
            : this._devices,
          price: this.ethPrice,
          miningSpeed: '3,230',
          mined: 0.000003,
          minWithdraw: 0.00005,
        });

        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    await this.dashboard.getPriceOfRVN().subscribe({
      next: (res) => {
        this.rvnPrice = res.USD;
        this.balances.push({
          currency: 'RVN',
          currencyBalance: this.UserData.balance_rvn
            ? this.UserData.balance_rvn
            : '0',
          plans: this.UserData.activePlans
            ? this.UserData.activePlans
            : this._activePlans,
          devices: this.UserData.devices
            ? this.UserData.devices
            : this._devices,
          price: this.rvnPrice,
          miningSpeed: '3,230',
          mined: 0.000003,
          minWithdraw: 0.00005,
        });

        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    await this.dashboard.getPriceOfSTX().subscribe({
      next: (res) => {
        this.stxPrice = res.USD;
        this.balances.push({
          currency: 'STX',
          currencyBalance: this.UserData.balance_stx
            ? this.UserData.balance_stx
            : '0',
          plans: this.UserData.activePlans
            ? this.UserData.activePlans
            : this._activePlans,
          devices: this.UserData.devices
            ? this.UserData.devices
            : this._devices,
          price: this.stxPrice,
          miningSpeed: '3,230',
          mined: 0.000003,
          minWithdraw: 0.00005,
        });

        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.BTC = this._balance_btc;
    this.ETH = this._balance_eth;
    this.RVN = this.balances[2];
    this.STX = this.balances[3];

    ///////////////////////////////////////////////btc graph called btcMiningDetails
    this.tap1Data = {
      labels: this.graphData,
      datasets: [
        {
          label: '',
          data: this.btcMiningDetails,
          fill: true,
          borderColor: this.graphColor,
          tension: this.graphTension,
          backgroundColor: this.graphBackground,
        },
      ],
    };
    this.tap2Data = {
      labels: this.graphData,
      datasets: [
        {
          label: '',
          data: this.ethMiningDetails,
          fill: true,
          borderColor: String(this.graphColor),
          tension: this.graphTension,
          backgroundColor: this.graphBackground,
        },
      ],
    };
    this.tap3Data = {
      labels: this.graphData,
      datasets: [
        {
          label: '',
          data: this.rvnMiningDetails,
          fill: true,
          borderColor: this.graphColor,
          tension: this.graphTension,
          backgroundColor: this.graphBackground,
        },
      ],
    };
    this.tap4Data = {
      labels: this.graphData,
      datasets: [
        {
          label: '',
          data: this.stxMiningDetails,
          fill: true,
          borderColor: this.graphColor,
          tension: this.graphTension,
          backgroundColor: this.graphBackground,
        },
      ],
    };
    this.basicOptions = {
      plugins: {
        tooltip: {
          backgroundColor: this.basicOptionBackground,
        },
        legend: {
          display: false,
          labels: {
            boxWidth: 0,
            boxHeight: 0,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
        y: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
      },
    };
  }
  update(event: Event) {}
  minedTap1() {
    this.minedTapOpend = 'tap1';
  }
  minedTap2() {
    this.minedTapOpend = 'tap2';
  }
  minedTap3() {
    this.minedTapOpend = 'tap3';
  }
  minedTap4() {
    this.minedTapOpend = 'tap4';
  }
  minedChartTap1() {
    this.minedChartTapOpend = 'tap1';
  }
  minedChartTap2() {
    this.minedChartTapOpend = 'tap2';
  }
  minedChartTap3() {
    this.minedChartTapOpend = 'tap3';
  }
  minedChartTap4() {
    this.minedChartTapOpend = 'tap4';
  }
  gainsChartTap1() {
    this.gainsChartTapOpend = 'tap1';
  }
  gainsChartTap2() {
    this.gainsChartTapOpend = 'tap2';
  }
  gainsChartTap3() {
    this.gainsChartTapOpend = 'tap3';
  }
  gainsChartTap4() {
    this.gainsChartTapOpend = 'tap4';
  }
  //////////////////////////////////////////////////////////// i edit this to make the widget work
  getBTC() {
    // this.BTC = this.balances.filter((element) => {
    //   return element.currency === 'BTC';
    // })[0];

    this.item = this.array.filter((item) =>
      item.title.toLowerCase().includes('BTC')
    );
    console.log('inside the filter' + this.item.balance_btc);
    return this.item.miningSpeed;
  }
  getETH() {
    // this.ETH = this.balances.filter((element) => {
    //   return element.currency === 'ETH';
    // })[0];
    return this.ETH.miningSpeed;
  }
  getRVN() {
    // this.RVN = this.balances.filter((element) => {
    //   return element.currency === 'RVN';
    // })[0];
    return this.RVN.miningSpeed;
  }
  getSTX() {
    // this.STX = this.balances.filter((element) => {
    //   return element.currency === 'STX';
    // })[0];
    return this.STX.miningSpeed;
  }
}

/////////////////////////////////////////////////////////////////////old
// import { Component, OnInit } from '@angular/core';
// import { Chart, registerables } from 'chart.js';
// import { Balance } from '../balance.model';
// import { DashboardService } from '../user-dashboard.service';
// const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: 'My First Dataset',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       fill: false,
//       borderColor: 'rgb(75, 192, 192)',
//       tension: 0.1,
//     },
//   ],
// };
// @Component({
//   selector: 'app-overview',
//   templateUrl: './overview.component.html',
//   styleUrls: ['./overview.component.scss'],
// })
// export class OverviewComponent implements OnInit {
//   minedTapOpend = 'tap1';
//   minedChartTapOpend = 'tap1';
//   gainsChartTapOpend = 'tap1';
//   config1 = {
//     type: 'line',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [
//         {
//           label: 'My First Dataset',
//           data: [65, 59, 80, 81, 56, 55, 40],
//           fill: false,
//           borderColor: 'rgb(75, 192, 192)',
//           tension: 0.1,
//         },
//       ],
//     },
//   };
//   config2 = {
//     type: 'line',
//     data: data,
//   };
//   balances: Balance[];
//   BTC: Balance;
//   ETH: Balance;
//   RVN: Balance;
//   STX: Balance;

//   multi: any;
//   view: any = [700, 350];

//   // options
//   legend: boolean = false;
//   showLabels: boolean = true;
//   animations: boolean = true;
//   xAxis: boolean = true;
//   yAxis: boolean = true;
//   showYAxisLabel: boolean = false;
//   showXAxisLabel: boolean = false;
//   xAxisLabel: string = 'Day';
//   yAxisLabel: string = 'Mined';
//   timeline: boolean = false;
//   showGridLines: boolean = true;

//   tap1Data: any;
//   tap2Data: any;
//   tap3Data: any;
//   tap4Data: any;

//   basicOptions: any;

//   constructor(private dashboard: DashboardService) {
//     Chart.register(...registerables);
//   }

//   ngOnInit(): void {
//     this.dashboard.balances$.subscribe((balances) => {
//       this.balances = balances;
//     });
//     //this fetches the data and push it in the balances$ stream
//     this.dashboard.updateBalances();
//     this.getBTC();
//     this.getETH();
//     this.getRVN();
//     this.getSTX();

//     this.tap1Data = {
//       labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7'],
//       datasets: [
//         {
//           label: '',
//           data: [12, 51, 62, 33, 21, 62, 45],
//           fill: true,
//           borderColor: 'rgba(255, 73, 128, 1)',
//           tension: 0.4,
//           backgroundColor: 'rgba(255, 73, 128, 0.2)',
//         },
//       ],
//     };
//     this.tap2Data = {
//       labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7'],
//       datasets: [
//         {
//           label: '',
//           data: [10, 20, 20, 20, 50, 10, 40],
//           fill: true,
//           borderColor: 'rgba(255, 73, 128, 1)',
//           tension: 0.4,
//           backgroundColor: 'rgba(255, 73, 128, 0.2)',
//         },
//       ],
//     };
//     this.tap3Data = {
//       labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7'],
//       datasets: [
//         {
//           label: '',
//           data: [15, 15, 15, 20, 40, 62, 45],
//           fill: true,
//           borderColor: 'rgba(255, 73, 128, 1)',
//           tension: 0.4,
//           backgroundColor: 'rgba(255, 73, 128, 0.2)',
//         },
//       ],
//     };
//     this.tap4Data = {
//       labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7'],
//       datasets: [
//         {
//           label: '',
//           data: [80, 70, 50, 30, 80, 50, 30],
//           fill: true,
//           borderColor: 'rgba(255, 73, 128, 1)',
//           tension: 0.4,
//           backgroundColor: 'rgba(255, 73, 128, 0.2)',
//         },
//       ],
//     };
//     this.basicOptions = {
//       plugins: {
//         tooltip: {
//           backgroundColor: 'rgba(29, 26, 39, 0.6)',
//         },
//         legend: {
//           display: false,
//           labels: {
//             boxWidth: 0,
//             boxHeight: 0,
//           },
//         },
//       },
//       scales: {
//         x: {
//           ticks: {
//             color: '#ebedef',
//           },
//           grid: {
//             color: 'rgba(255,255,255,0.2)',
//           },
//         },
//         y: {
//           ticks: {
//             color: '#ebedef',
//           },
//           grid: {
//             color: 'rgba(255,255,255,0.2)',
//           },
//         },
//       },
//     };
//   }
//   update(event: Event) {}
//   minedTap1() {
//     this.minedTapOpend = 'tap1';
//   }
//   minedTap2() {
//     this.minedTapOpend = 'tap2';
//   }
//   minedTap3() {
//     this.minedTapOpend = 'tap3';
//   }
//   minedTap4() {
//     this.minedTapOpend = 'tap4';
//   }
//   minedChartTap1() {
//     this.minedChartTapOpend = 'tap1';
//   }
//   minedChartTap2() {
//     this.minedChartTapOpend = 'tap2';
//   }
//   minedChartTap3() {
//     this.minedChartTapOpend = 'tap3';
//   }
//   minedChartTap4() {
//     this.minedChartTapOpend = 'tap4';
//   }
//   gainsChartTap1() {
//     this.gainsChartTapOpend = 'tap1';
//   }
//   gainsChartTap2() {
//     this.gainsChartTapOpend = 'tap2';
//   }
//   gainsChartTap3() {
//     this.gainsChartTapOpend = 'tap3';
//   }
//   gainsChartTap4() {
//     this.gainsChartTapOpend = 'tap4';
//   }
//   getBTC() {
//     this.BTC = this.balances.filter((element) => {
//       return element.currency === 'BTC';
//     })[0];
//   }
//   getETH() {
//     this.ETH = this.balances.filter((element) => {
//       return element.currency === 'ETH';
//     })[0];
//   }
//   getRVN() {
//     this.RVN = this.balances.filter((element) => {
//       return element.currency === 'RVN';
//     })[0];
//   }
//   getSTX() {
//     this.STX = this.balances.filter((element) => {
//       return element.currency === 'STX';
//     })[0];
//   }
// }
