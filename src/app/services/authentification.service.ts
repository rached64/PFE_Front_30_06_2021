import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IuserPro, userPro } from '../Models/userPro';


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

  registerPro(data){
    return this.http.post(environment.host+'/registerPro',data);
  }
  loginPro(data){
    return this.http.post(environment.host+'/loginPro',data);
  }
  getUserByToken(token):Observable<IuserPro>{
    let host=environment.host ;
    return this.http.get<IuserPro>(host + "/user-profile/"+ token);   
   }
   updateProfile(id,token):Observable<IuserPro>{
    let host=environment.host ;
    return this.http.put<IuserPro>(host + "/updateProfile/"+token ,id);   
   }

}
