import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private http: HttpClient) { }
    HomeFunction($event) { console.log($event) } ;
    HomeCategories($event) { console.log($event) } ;
  
    ngOnInit():void {}

  
}



