import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Categories, ICategories } from 'src/app/Models/categories';
import { IPost, Post } from 'src/app/Models/posts';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  categorie = new Categories();
  post: Post[];
  //post$= new Subject<Post[]>();

  api_URL = 'http://127.0.0.1:8000/api/post/'

  catURL = 'http://127.0.0.1:8000/api/post/category/{id}'
  BUrl = 'Http://127.0.0.1:8000/api/search/'
  apiData='http://127.0.0.1:8000/api/post/add/';


  constructor(private http:HttpClient,) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  handleError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error('Error: ', error.error.message)
    }else{
      console.error("Error From Server: " + error.status +" error was: " + error.error)
    }
    return throwError('Server Error')
  }
  
 
  getAllpost(): Observable<any> {
    let host=environment.host ;
    return this.http.get(host + "/post");
  }
  getpost(id){
    let host=environment.host ;
    return this.http.get<IPost>(host + "/post/" +id);
  }
  insertData(post){
    return this.http.post<IPost[]>(this.apiData , post);
  }
  deleteData(id){
    let host=environment.host ;
    return this.http.delete(host + "/delete/"+id);
  }
  getDataById(id):Observable<IPost[]>{
    let host=environment.host ;
    return this.http.get<IPost[]>(host + "/show/"+id);
  }
  updateData(id,data){
    let host=environment.host ;
    return this.http.put(host + "/update/"+id,data);
  }
  getpostByCategoryid(id): Observable<IPost>
  {
    let host=environment.host ;
    return this.http.get<IPost>(host + "/show/category/" +id);
  }

searchPost(keyword:string):Observable<IPost[]>{
  let host=environment.host ;
  return this.http.get<IPost[]>(host + "/search/" +keyword);
}
getPostById(id:number){
  let host=environment.host ;
  return this.http.get<IPost>(host + "/show/"+ id);   
 }
 

 



}
