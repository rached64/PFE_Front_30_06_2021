import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriesService } from './categories.service';
import { Categories, ICategories } from 'src/app/Models/categories';
import { IPost, Post } from 'src/app/Models/posts';
import { Form } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  categorie = new Categories();
  post: Post[];
  //post$= new Subject<Post[]>();

  api_URL = 'http://127.0.0.1:8000/api/posts/'

  catURL = 'http://127.0.0.1:8000/api/post/category/{id}'
  BUrl = 'Http://127.0.0.1:8000/api/search/'


  constructor(private http:HttpClient,) { }
 
  getAllpost(): Observable<any> {
    let host=environment.host ;
    return this.http.get(host + "/post");
  }
  getpost(id){
    let host=environment.host ;
    return this.http.get<IPost>(host + "/posts/" +id);
  }
  insertData(data){
 /*   return new Promise((resolve,reject)=>{
        let postData:FormData = new FormData();
        postData.append('post',JSON.stringify(data,categorie));
        postData.append('picture',picture);

          })*/
    let host=environment.host ;
    return this.http.post(host + "/post/add/" ,data);
  }
  deleteData(id){
    let host=environment.host ;
    return this.http.delete(host + "/posts/"+id);
  }
  getDataById(id):Observable<IPost[]>{
    let host=environment.host ;
    return this.http.get<IPost[]>(host + "/show/"+id);
  }
  updateData(id,data){
    let host=environment.host ;
    return this.http.put(host + "/posts/"+id,data);
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


}
