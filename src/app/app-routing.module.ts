import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { SigninComponent } from './Auth/signin/signin.component';
import { MerchantComponent } from './merchant/merchant.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'test',
    component: MerchantComponent,
  },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  // { path: '**', redirectTo: 'signin' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
