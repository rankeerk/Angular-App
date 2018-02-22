import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewContainerRef } from '@angular/core';
import { Http,  Headers, HttpModule, RequestOptions, Response, XHRBackend } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule, BusyConfig} from 'angular2-busy';
import {ToastModule, ToastsManager} from 'ng2-toastr/ng2-toastr';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { DashboardBoothComponent } from './components/booth/dashboard-booth/dashboard-booth.component';
import { DashboardCustomerComponent } from './components/customer/dashboard-customer/dashboard-customer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { MasterService } from './services/master.service';
import { httpFactory, EventHttpService } from './event-http.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardAdminComponent,
    DashboardBoothComponent,
    DashboardCustomerComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BusyModule.forRoot(
      new BusyConfig({
        message: 'Please Wait.....',
        backdrop: true,
        delay: 0,
        minDuration: 500
      })
    ),
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [{
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }, MasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
