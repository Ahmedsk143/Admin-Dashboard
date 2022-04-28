import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { ConfirmationComponent } from './Auth/confirmation/confirmation.component';
import { SliderComponent } from './Auth/slider/slider.component';
import { SignupOrsigninComponent } from './Auth/signup-orsignin/signup-orsignin.component';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';
import { SharedModule } from './shared/shared.module';
import { ResetPasswordComponent } from './Auth/reset-password/reset-password.component';
import { UserComponent } from './Auth/user/user.component';
import { AdminComponent } from './Auth/admin/admin.component';
import { RecoveryMessageComponent } from './Auth/reset-password/recovery-message/recovery-message.component';
import { NewPasswordComponent } from './Auth/reset-password/new-password/new-password.component';
import { AdminAuthInterceptor } from './Auth/admin-auth-interceptor';
import { ErrorHandlerInterceptor } from './Auth/admin-error-interceptor';
import { MerchantComponent } from './merchant/merchant.component';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ConfirmationComponent,
    SliderComponent,
    SignupOrsigninComponent,
    ResetPasswordComponent,
    UserComponent,
    AdminComponent,
    RecoveryMessageComponent,
    NewPasswordComponent,
    MerchantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule,
    AccordionModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AdminAuthInterceptor, multi: true },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorHandlerInterceptor,
    //   multi: true,
    // },
    // { provide: HTTP_INTERCEPTORS, useClass: UserAuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
