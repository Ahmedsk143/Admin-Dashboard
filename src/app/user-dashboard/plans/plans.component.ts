import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from '../user-dashboard.service';

export interface Plan {
  date: string;
  name: string;
  total: number;
  current: number;
  average: number;
  expire: string;
}

let expiredPlanData: Plan[] = [
  {
    date: '',
    name: '',
    total: 0,
    current: 0,
    average: 0,
    expire: '',
  },
];

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements AfterViewInit, OnInit {
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
  ////////////////////////////////////////////////////////////////
  activePlanData2: any = new Array();
  element: object;
  private i: number = 0;
  ///////////////////////////////////////////////////////////////////
  activePlanData = [
    {
      date: '',
      name: '',
      total: 0,
      current: 0,
      average: 0,
      expire: '',
    },
  ];
  expiredPlanData = expiredPlanData;
  _activePlans: any = sessionStorage.getItem('activePlans');
  /////////////////////////////////////////////////////////////////
  minedChartTapOpend = 'tap1';
  tap1Data: any;
  tap2Data: any;
  tap3Data: any;
  tap4Data: any;
  basicOptions: any;
  displayedColumns = [
    { name: 'date', field: 'date' },
    { name: 'name', field: 'name' },
    { name: 'total', field: 'total' },
    { name: 'current', field: 'current' },
    { name: 'average', field: 'average' },
    { name: 'expire', field: 'expire' },
  ];
  activeHash: { crypto: string; plans: string; speed: string }[] = [
    {
      crypto: 'BTC ',
      plans: this._activePlans,
      speed: '23 580',
    },
    {
      crypto: 'ETH ',
      plans: this._activePlans,
      speed: '23 580',
    },
    {
      crypto: 'RVN ',
      plans: '0',
      speed: '0',
    },
    {
      crypto: 'STX ',
      plans: '0',
      speed: '0',
    },
  ];
  activePlanDataLength: number = this.activePlanData.length;
  expiredPlanDataLength: number = expiredPlanData.length;

  constructor(private http: HttpClient, private dashboard: DashboardService) {
    /////////////////////////////
    ///////////////////////////
  }
  ngOnInit(): void {
    ///////////////////////////////////get the active plans from user-dashboard-services
    this.dashboard.getPlans().subscribe((res) => {
      this.activePlanData2.push(res);
      console.log(this.activePlanData2);
      this.activePlanData = [];
      this.expiredPlanData = [];
      for (this.i = 0; this.i < this.activePlanData2[0].length; this.i++) {
        //////////////////////////////////////////////////////chech if the plan active or not active
        if (this.activePlanData2[0][this.i].planStatus) {
          this.activePlanData.push({
            date: this.activePlanData2[0][this.i].startDate,
            name: this.activePlanData2[0][this.i].cryptoName,
            total: this.activePlanData2[0][this.i].totalMined.toFixed(8),
            current: 123, //this.activePlanData2[0][this.i].current,
            average: 123, // this.activePlanData2[0][this.i].average,
            expire: this.activePlanData2[0][this.i].endDate,
          });
        } else {
          ///////////////////////////////here the insertion inside the expiredPlanData array
          this.expiredPlanData.push({
            date: this.activePlanData2[0][this.i].startDate,
            name: this.activePlanData2[0][this.i].cryptoName,
            total: this.activePlanData2[0][this.i].totalMined.toFixed(8),
            current: 123, //this.activePlanData2[0][this.i].current,
            average: 123, // this.activePlanData2[0][this.i].average,
            expire: this.activePlanData2[0][this.i].endDate,
          });
        }
      }
    });

    ////////////////////////////////////////dummy data for active plans

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

  ngAfterViewInit() {}
}

////////////////////////////////////////////////////////////////////////////old
// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';

// export interface Plan {
//   date: Date;
//   name: string;
//   total: number;
//   current: number;
//   average: number;
//   expire: Date;
// }

// const activePlanData: Plan[] = [
//   {
//     date: new Date('30 Dec 2021'),
//     name: 'Bitcoin — Starter  ',
//     total: 4.0026,
//     current: 4.0026,
//     average: 4.0026,
//     expire: new Date('30 Dec 2022'),
//   },
//   {
//     date: new Date('14 March 2021'),
//     name: 'Ethereum — Starter  ',
//     total: 6.941,
//     current: 6.941,
//     average: 6.941,
//     expire: new Date('14 March 2022'),
//   },
//   {
//     date: new Date('5 Nov 2021'),
//     name: 'Ethereum — Starter',
//     total: 9.0122,
//     current: 9.0122,
//     average: 9.0122,
//     expire: new Date('5 Nov 2022'),
//   },
//   {
//     date: new Date('5 Sep 2021'),
//     name: 'Ethereum — Starter',
//     total: 10.811,
//     current: 10.811,
//     average: 10.811,
//     expire: new Date('5 Sep 2022'),
//   },
//   {
//     date: new Date('1 Oct 2021'),
//     name: 'Ethereum — Starter',
//     total: 12.0107,
//     current: 12.0107,
//     average: 12.0107,
//     expire: new Date('1 Oct 2022'),
//   },
//   {
//     date: new Date('6 Feb 2021'),
//     name: 'Bitcoin — Starter',
//     total: 14.0067,
//     current: 14.0067,
//     average: 14.0067,
//     expire: new Date('6 Feb 2022'),
//   },
//   {
//     date: new Date('8 Jul 2021'),
//     name: 'Ethereum — Starter',
//     total: 15.9994,
//     current: 15.9994,
//     average: 15.9994,
//     expire: new Date('8 Jul 2022'),
//   },
//   {
//     date: new Date('18 Oct 2021'),
//     name: 'Bitcoin — Starter',
//     total: 18.9984,
//     current: 18.9984,
//     average: 18.9984,
//     expire: new Date('12 Jan 2022'),
//   },
// ];

// const expiredPlanData: Plan[] = [
//   {
//     date: new Date('10 Jan 2021'),
//     name: 'Bitcoin — Starter',
//     total: 1.0079,
//     current: 1.0079,
//     average: 1.0079,
//     expire: new Date('10 Jan 2022'),
//   },
//   {
//     date: new Date('30 Dec 2021'),
//     name: 'Bitcoin — Starter  ',
//     total: 4.0026,
//     current: 4.0026,
//     average: 4.0026,
//     expire: new Date('30 Dec 2022'),
//   },
//   {
//     date: new Date('14 March 2021'),
//     name: 'Ethereum — Starter  ',
//     total: 6.941,
//     current: 6.941,
//     average: 6.941,
//     expire: new Date('14 March 2022'),
//   },
//   {
//     date: new Date('5 Nov 2021'),
//     name: 'Ethereum — Starter',
//     total: 9.0122,
//     current: 9.0122,
//     average: 9.0122,
//     expire: new Date('5 Nov 2022'),
//   },
//   {
//     date: new Date('5 Sep 2021'),
//     name: 'Ethereum — Starter',
//     total: 10.811,
//     current: 10.811,
//     average: 10.811,
//     expire: new Date('5 Sep 2022'),
//   },
// ];
// const activeHashPower = [
//   {
//     crypto: 'BTC (Bitcoin)',
//     plans: '2 active plans',
//     speed: '23 580',
//   },
//   {
//     crypto: 'ETH (Ethereum)',
//     plans: '2 active plans',
//     speed: '23 580',
//   },
//   {
//     crypto: 'RVN (Ravencoin)',
//     plans: 'No active plan',
//     speed: '0',
//   },
//   {
//     crypto: 'STX (Stacks)',
//     plans: 'No active plan',
//     speed: '0',
//   },
// ];
// @Component({
//   selector: 'app-plans',
//   templateUrl: './plans.component.html',
//   styleUrls: ['./plans.component.scss'],
// })
// export class PlansComponent implements OnInit {
//   ////////////////////////The table data//////////////////////////
//   activePlanData = activePlanData;
//   expiredPlanData = expiredPlanData;
//   activePlanDataLength: number = activePlanData.length;
//   expiredPlanDataLength: number = expiredPlanData.length;
//   //////////////////////////The chart data//////////////////////////
//   minedChartTapOpend = 'tap1';
//   tap1Data: any;
//   tap2Data: any;
//   tap3Data: any;
//   tap4Data: any;
//   basicOptions: any;
//   /////////////////////////Active hash data/////////////////////////////////
//   activeHash: { crypto: string; plans: string; speed: string }[];
//   constructor() {}
//   ngOnInit(): void {
//     this.activeHash = activeHashPower;
//     ////////////this is for the chart data////////////////
//     this.tap1Data =
//       this.tap2Data =
//       this.tap3Data =
//       this.tap4Data =
//         {
//           labels: [
//             'Mar 1',
//             'Mar 2',
//             'Mar 3',
//             'Mar 4',
//             'Mar 5',
//             'Mar 6',
//             'Mar 7',
//           ],
//           datasets: [
//             {
//               label: '',
//               data: [12, 51, 62, 33, 21, 62, 45],
//               fill: true,
//               borderColor: 'rgba(255, 73, 128, 1)',
//               tension: 0.4,
//               backgroundColor: 'rgba(255, 73, 128, 0.2)',
//             },
//           ],
//         };
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
//     ///////////////////////////
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
// }
