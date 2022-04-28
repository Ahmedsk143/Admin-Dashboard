import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Auth/admin/admin.component';
import { ResetPasswordComponent } from './Auth/reset-password/reset-password.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { UserComponent } from './Auth/user/user.component';
import { MerchantComponent } from './merchant/merchant.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'user/dashboard',
    loadChildren: () =>
      import('./user-dashboard/user-dashboard.module').then(
        (m) => m.UserDashboardModule
      ),
  },
  {
    path: 'admin/dashboard',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
  },
  // { path: 'signupOrsignin', component: SignupOrsigninComponent },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'reset-your-password', component: ResetPasswordComponent },
    ],
  },
  {
    path: 'admin',
    component: UserComponent,
    children: [{ path: 'signin', component: AdminComponent }],
  },
  {
    path: 'test',
    component: MerchantComponent,
  },
  // { path: '', redirectTo: 'user/signin', pathMatch: 'full' },
  // { path: '**', redirectTo: 'user/signin' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
