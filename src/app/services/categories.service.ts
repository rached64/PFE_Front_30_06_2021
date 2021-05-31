import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategories } from '../Models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl = 'Http://127.0.0.1:8000/api/categories/' 

  constructor(private http:HttpClient) { }
 
  
  getAllCategorie(){
    return this.http.get<ICategories>(this.baseUrl);
  }
  


}
