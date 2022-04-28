import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ChartModule } from 'primeng/chart';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [SpinnerComponent, NotificationComponent],
  exports: [SpinnerComponent, ChartModule, NotificationComponent],
  imports: [CommonModule],
})
export class SharedModule {}
