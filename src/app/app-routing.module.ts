import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { DashboardBoothComponent } from './components/booth/dashboard-booth/dashboard-booth.component';
import { DashboardCustomerComponent } from './components/customer/dashboard-customer/dashboard-customer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,  children: [
      { path: 'dashboardAdmin', component: DashboardAdminComponent },
      { path: 'dashboardBooth', component: DashboardBoothComponent },
      { path: 'dashboardCustomer', component: DashboardCustomerComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }

