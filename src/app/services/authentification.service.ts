import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }

  registerUser(data){
    return this.http.post(environment.host+'/register',data);
  }
  login(data){
    return this.http.post(environment.host+'/login',data);
  }
}
