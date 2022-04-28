import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss'],
})
export class DashHeaderComponent implements OnInit {
  currentRoute: string = 'Overview';
  collapsed = false;
  toggleMenu = false;
  _name: any = sessionStorage.getItem('name');

  constructor(private router: Router) {}

  ngOnInit(): void {
    //to survive a reload
    if (this.router.url == '/user-dashboard/overview') {
      this.currentRoute = 'Overview';
    }
    if (this.router.url == '/user-dashboard/hashrate-plans') {
      this.currentRoute = 'Hashrate plans';
    }
    if (this.router.url == '/user-dashboard/mining-devices') {
      this.currentRoute = 'Mining devices';
    }
    if (this.router.url == '/user-dashboard/withdraw') {
      this.currentRoute = 'Withdraw';
    }
    if (this.router.url == '/user-dashboard/deposit') {
      this.currentRoute = 'Deposit';
    }

    //to update whenever the user navigate to another route
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url == '/user-dashboard/overview') {
          this.currentRoute = 'Overview';
        }
        if (event.url == '/user-dashboard/hashrate-plans') {
          this.currentRoute = 'Hashrate plans';
        }
        if (event.url == '/user-dashboard/mining-devices') {
          this.currentRoute = 'Mining devices';
        }
        if (event.url == '/user-dashboard/withdraw') {
          this.currentRoute = 'Withdraw';
        }
        if (event.url == '/user-dashboard/deposit') {
          this.currentRoute = 'Deposit';
        }
      });
  }
}
