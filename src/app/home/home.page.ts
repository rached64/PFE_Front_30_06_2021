import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  status: boolean;

  constructor(private http: HttpClient) { }
    HomeFunction($event) { console.log($event) } ;
    HomeCategories($event) { console.log($event) } ;
  
    ngOnInit():void {}

    func() {
      this.status = !this.status;
      if (this.status) {
        alert("Inscription obligatoire !");
      }
    }
    
    functionAuth(){
      if(localStorage.getItem('token')==null){
        return true ;
      }else{
        return false ;
      }
    }
  
}



