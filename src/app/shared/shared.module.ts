import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [SpinnerComponent, NotificationComponent],
  exports: [SpinnerComponent, NotificationComponent],
  imports: [CommonModule],
})
export class SharedModule {}
