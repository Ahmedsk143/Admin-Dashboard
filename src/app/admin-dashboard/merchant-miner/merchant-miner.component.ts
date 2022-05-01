import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Subscription } from 'rxjs';
import { AdminDashboardService } from '../admin-dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { DistAsic } from '../models/dist-asic.model';
import { WorkerPlan } from '../models/worker-plan.model';
import { MerchantUser } from '../models/merchant-users.model';

@Component({
  selector: 'app-merchant-miner',
  templateUrl: './merchant-miner.component.html',
  styleUrls: ['./merchant-miner.component.scss'],
})
export class MerchantMinerComponent implements OnInit {
  sub: Subscription;
  worker: DistAsic;
  workerID: string;
  selectedTap = 'tap1';
  workerPlans: WorkerPlan[];
  workerPlansLength: number;
  merchantUsers: MerchantUser[];
  merchantUsersLength: number;
  constructor(
    private clipboard: Clipboard,
    private dashboardService: AdminDashboardService,
    private activatedRoute: ActivatedRoute,
    private sharedSerivce: SharedService
  ) {}
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      this.workerID = params.get('workerID')!;
      this.dashboardService.getWorkerById(this.workerID).subscribe({
        next: (res) => {
          this.worker = res[0];
          console.log(res);
        },
        error: (err) => {
          this.dashboardService.errorHandler(err);
        },
      });
      this.dashboardService.getWorkerPlansById(this.workerID).subscribe({
        next: (res) => {
          console.log(res);
          this.workerPlans = res.workerPlans;
          this.workerPlansLength = res.workerPlans.length;
        },
        error: (err) => {
          this.dashboardService.errorHandler(err);
        },
      });
      this.dashboardService.getWorkerUsersById(this.workerID).subscribe({
        next: (res) => {
          console.log(res);
          this.merchantUsers = res.planContracts;
          this.merchantUsersLength = res.planContracts.length;
        },
        error: (err) => {
          this.dashboardService.errorHandler(err);
        },
      });
    });
  }
  copyText(link: any) {
    this.clipboard.copy(link);
    console.log(link);
  }
}
