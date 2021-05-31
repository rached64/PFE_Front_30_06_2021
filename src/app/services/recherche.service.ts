import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICountrie } from '../Models/recherche';
import { IState } from '../Models/State';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {

  constructor(private http:HttpClient) { }

getCountrie(){
  let host=environment.host ;
  return this.http.get<ICountrie>(host +"/country" );
}
getStates(id){
  let host=environment.host ;
  return this.http.get<IState>(host +"/state/" +id);
}
getCities(id){
  let host=environment.host ;
  return this.http.get(host +"/citie" ,id);
}



}
