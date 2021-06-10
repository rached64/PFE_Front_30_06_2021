import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Categories, ICategories } from 'src/app/Models/categories';
import { IPost, Post } from 'src/app/Models/posts';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-post-simple',
  templateUrl: './add-post-simple.page.html',
  styleUrls: ['./add-post-simple.page.scss'],
})
export class AddPostSimplePage implements OnInit {
  categories: ICategories[];
  form:FormGroup ;
   data:any ;
   files:any ;
   submitted = false ;
   post: IPost[];
 categorie = new Categories();

   //
   errorMessage:string;
   imagePreview:string ;
   loading:boolean ;
   user_id:string;
 

  constructor(
    private Categorieservice:CategoriesService,
    private servicePost: PostsService,
    private formBuilder: FormBuilder,
    ) {  }

  ngOnInit():void {
    this.getAllCategorie();
    this.form = this.formBuilder.group({
      title:[null,Validators.required],
      price: [0,Validators.required],
      description:[null,Validators.required],
      picture:[null,Validators.required],
      category_id:[null,Validators.required],
      user_id:[null,Validators.required]

      /*  categories: this.formBuilder.group({
        name:[null,Validators.required], 
      })*/
    });
  }
   
  onSubmit():void {
    this.submitted = true ;
    if ( this.form.invalid){
      return;
    }
    const formData = new FormData();
    formData.append("picture",this.files.name)
    console.log(this.form.value);
    this.loading= true ;
    const categorie = new Categories();
    const post = new Post();
    post.title   = this.form.get('title').value ;
    post.price   = this.form.get('price').value ;
    post.description   = this.form.get('description').value ;
    post.category_id   = this.form.get('category_id').value ;
    post.user_id   = this.form.get('user_id').value ;
   this.servicePost.insertData(post).subscribe(res=>{
      this.post = res ;  
    console.log(res);
           })
       }
       uploadImage(event){
         this.files = event.target.files[0];
         console.log(this.files);
       }
       OnImage(){
   


       }
      getAllCategorie(){
        this.Categorieservice.getAllCategorie().subscribe(response => 
          {
          this.categories = response.data ;
          console.log(this.categories);  
           });
          } 
}

