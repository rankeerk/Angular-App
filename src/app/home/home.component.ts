import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  windowHeight: any;

  constructor() { }

  ngOnInit() {
  }

  getWindow = () => {
    this.windowHeight = window.innerWidth;
    return window.innerWidth;
 }

 // tslint:disable-next-line:member-ordering
}
