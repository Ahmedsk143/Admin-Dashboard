import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { ChartModule } from 'primeng/chart';
import { CustomTapsComponent } from './custom-taps/custom-taps.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    TabsComponent,
    TimelineChartComponent,
    CustomTapsComponent,
    NotificationComponent,
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    TabsComponent,
    TimelineChartComponent,
    ChartModule,
    CustomTapsComponent,
    NotificationComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
