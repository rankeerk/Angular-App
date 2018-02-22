import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { MasterService } from '../../../services/master.service';
import { LookupModel } from '../../../models/lookup';
import { Subscription } from 'rxjs/Subscription';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-dashboard-booth',
  templateUrl: './dashboard-booth.component.html',
  styleUrls: ['./dashboard-booth.component.css']
})
export class DashboardBoothComponent implements OnInit {
  errorMessage: string;
  lookupList: Array<LookupModel>;
  busy: Subscription;
  constructor(private masterSerivce: MasterService, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.onGetLookups();
  }

  onGetLookups() {
   this.busy =  this.masterSerivce.getLookupList().subscribe(
      lookups => {
        this.lookupList = lookups;
        console.log(this.lookupList);
        this.toastr.success('You are awesome!', 'Success!');
      });
    }
  }

