import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { AdminDashboardService } from '../admin-dashboard.service';
import { Merchant } from '../models/merchant.model';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss'],
})
export class MerchantsComponent implements OnInit {
  merchantsData: Merchant[] = [];
  merchantsLength: number;
  constructor(
    private dashboardService: AdminDashboardService,
    private sharedSerivce: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedSerivce.isLoading.next(true);
    this.dashboardService.getMerchants().subscribe({
      next: (res) => {
        this.merchantsData = res.sellers;
        this.merchantsLength = res.sellers.length;
        this.sharedSerivce.isLoading.next(false);
        console.log(res);
      },
      error: (err) => {
        this.dashboardService.errorHandler(err);
      },
    });
  }
}
