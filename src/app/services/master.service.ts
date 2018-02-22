import { Injectable } from '@angular/core';
import { Http,  Headers, HttpModule, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { LookupModel } from '../models/lookup';


@Injectable()
export class MasterService {

  constructor(private http: Http) { }

  getLookupList() {
    return this.http.get(`/api/Master/GetLookupAsync/1`)
    .map(this.parseData);
  }

  private parseData(res: Response)  {
    return res.json() || [];
  }

}
