import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './Auth/auth-interceptor';
import { ErrorHandlerInterceptor } from './Auth/error-interceptor';
import { MerchantComponent } from './merchant/merchant.component';
import { AccordionModule } from 'primeng/accordion';
import { SigninComponent } from './Auth/signin/signin.component';

@NgModule({
  declarations: [AppComponent, MerchantComponent, SigninComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
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
