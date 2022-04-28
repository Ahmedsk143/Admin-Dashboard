import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../user-dashboard.service';

@Component({
  selector: 'app-mining-devices',
  templateUrl: './mining-devices.component.html',
  styleUrls: ['./mining-devices.component.scss'],
})
export class MiningDevicesComponent implements OnInit {
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
  minersChartOpend = 'tap1';
  tap1Data: any;
  tap2Data: any;
  tap3Data: any;
  tap4Data: any;
  basicOptions: any;
  activeHash = [
    {
      crypto: 'BTC (Bitcoin)',
      plans: `${sessionStorage.getItem('activePlans')} active plans`,
      speed: '23 580',
    },
    {
      crypto: 'ETH (Ethereum)',
      plans: `${sessionStorage.getItem('activePlans')} active plans`,
      speed: '23 580',
    },
    {
      crypto: 'RVN (Ravencoin)',
      plans: 'No active plan',
      speed: '0',
    },
    {
      crypto: 'STX (Stacks)',
      plans: 'No active plan',
      speed: '0',
    },
  ];
  ////////////////////////////////////////////////////your miners
  myMiners = new Array();
  miners: {
    name: string;
    encrypt: string;
    img: string;
    start: string;
    end: string;
    maintainancePrice: string;
    profit: string;
  }[] = [
    {
      name: 'Antminer S19 Pro ',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      maintainancePrice: '',
      profit: '',
    },
  ];
  constructor(private http: HttpClient, private dashboard: DashboardService) {}

  ngOnInit(): void {
    this.dashboard.getMyAsicDevices().subscribe((res: any) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        const ele = {
          name: res[i].name,
          encrypt: 'TEST',
          img: '',
          start: res[i].startDate.substring(0, 10),
          end: 'TEST',
          maintainancePrice: 'TEST',
          profit: 'TEST',
        };
        this.myMiners.push(ele);
      }
      this.miners = [];
      this.miners = this.myMiners;
    });

    //////////////////////////////////////////////////////////////////////////////////
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
  minedChartTap1() {
    this.minersChartOpend = 'tap1';
  }
  minedChartTap2() {
    this.minersChartOpend = 'tap2';
  }
  minedChartTap3() {
    this.minersChartOpend = 'tap3';
  }
  minedChartTap4() {
    this.minersChartOpend = 'tap4';
  }
  checkLength(): boolean {
    return this.miners.length >= 1;
  }
}

//////////////////////////////////////////////////////////////old
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-mining-devices',
//   templateUrl: './mining-devices.component.html',
//   styleUrls: ['./mining-devices.component.scss'],
// })
// export class MiningDevicesComponent implements OnInit {
//   minersChartOpend = 'tap1';
//   tap1Data: any;
//   tap2Data: any;
//   tap3Data: any;
//   tap4Data: any;
//   basicOptions: any;
//   activeHash = [
//     {
//       crypto: 'BTC (Bitcoin)',
//       plans: '2 active plans',
//       speed: '23 580',
//     },
//     {
//       crypto: 'ETH (Ethereum)',
//       plans: '2 active plans',
//       speed: '23 580',
//     },
//     {
//       crypto: 'RVN (Ravencoin)',
//       plans: 'No active plan',
//       speed: '0',
//     },
//     {
//       crypto: 'STX (Stacks)',
//       plans: 'No active plan',
//       speed: '0',
//     },
//   ];
//   miners: {
//     name: string;
//     encrypt: string;
//     img: string;
//     start: string;
//     end: string;
//     price: string;
//     profit: string;
//   }[] = [
//     {
//       name: 'Antminer S19 Pro ',
//       encrypt: 'Bitcoin — SHA-256',
//       img: '',
//       start: '',
//       end: '',
//       price: '',
//       profit: '',
//     },
//     {
//       name: 'Antminer T9+',
//       encrypt: 'Bitcoin — SHA-256',
//       img: '',
//       start: '',
//       end: '',
//       price: '',
//       profit: '',
//     },
//     {
//       name: 'WhatsMiner M32-62T',
//       encrypt: 'Bitcoin — SHA-256',
//       img: '',
//       start: '',
//       end: '',
//       price: '',
//       profit: '',
//     },
//     {
//       name: 'PangolinMiner M3X',
//       encrypt: 'Bitcoin — SHA-256',
//       img: '',
//       start: '',
//       end: '',
//       price: '',
//       profit: '',
//     },
//   ];
//   constructor() {}

//   ngOnInit(): void {
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
//   minedChartTap1() {
//     this.minersChartOpend = 'tap1';
//   }
//   minedChartTap2() {
//     this.minersChartOpend = 'tap2';
//   }
//   minedChartTap3() {
//     this.minersChartOpend = 'tap3';
//   }
//   minedChartTap4() {
//     this.minersChartOpend = 'tap4';
//   }
//   checkLength(): boolean {
//     return this.miners.length >= 1;
//   }
// }
