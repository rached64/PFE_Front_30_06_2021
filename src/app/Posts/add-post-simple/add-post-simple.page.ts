import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Categories, ICategories } from 'src/app/Models/categories';
import { Post } from 'src/app/Models/posts';
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
   post: Post[];
    newPost  = new Post();
 categorie = new Categories();

   //
   errorMessage:string;
   imagePreview:string ;
   loading:boolean ;
   user_id:string;
 

  constructor(
    private Categorieservice:CategoriesService,
    private servicePost: PostsService,
    private loadingCntrl: LoadingController,
    private formBuilder: FormBuilder,
    private toastr:ToastrService ,
    private auth:AuthentificationService,
    private router:Router,

    ) {  }

  ngOnInit():void {
    this.getAllCategorie();
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      title:[null,Validators.required],
      price: [0,Validators.required],
      description:[null,Validators.required],
      picture:[null,Validators.required],
      category_id:this.formBuilder.group({
         name: [Validators.required]
      })
    });
   // this.user_id= post.user_id ;
  }
  /*
  onSubmit():void {
    console.log(this.form.value);
         const dataPost  = this.form.value ;
         const categories = this.form.value.category_id.name ;
         const newPost = (
           dataPost.title , 
           dataPost.price,
           dataPost.description,
           categories 
           );
   this.servicePost.insertData(this.form.value).subscribe(res=>{
      this.data =  res ; 
      this.post = this.data ;      
    console.log(res);
           })
           console.log(newPost);
       }
  /*
  uploadImage(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.get('picture').patchValue(file);
    this.form.get('picture').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload=()=>{
      if (this.form.get('picture').valid){
          this.imagePreview = reader.result as string;
      }else{
        this.imagePreview = null ;
      }
      reader.readAsDataURL(file);
    }
    
}*/
/*
onSubmit(){
this.loading=true ;
const newPost  = new Post();
const categorie = new Categories();

newPost.title = this.form.get('title').value ;
newPost.price = this.form.get('price').value ;
newPost.description = this.form.get('description').value ;
newPost.picture = '';
categorie.name =this.form.get('name').value ;
newPost.user_id = this.user_id ;

//save
this.servicePost.insertData(newPost,categorie,this.form.get('picture').value)
.then(
  ()=>{ 
    this.form.reset();
    this.loading=false;
    this.loading= false ;
    this.router.navigate(['/home']);
    }
)
.catch(
  (err)=>{
    this.loading=false;
    this.errorMessage =err.message;
}
)
}
*/
/// 2eme solution

  uploadImage(event)
  {
    this.files = event.target.files[0];
    console.log(this.files);
  }
  get f(){
    return this.form.controls ;
  }
  onSubmit(){
   if (this.form.invalid) {
     return;
   }

 
   // Upload Image
   const formData = new FormData();
   formData.append("picture",this.files,this.files.name);
   this.servicePost.insertData(formData).subscribe(res=>{
     this.data = res ;
     this.post = this.data ;
     console.log(this.post);
     console.log(res);
     if (this.data== true){
      this.toastr.success(JSON.stringify(this.data.message),'',{
        timeOut:2000,
        progressBar:true
   })
   // Message Toast
  }else {
      this.toastr.error(JSON.stringify(this.data.message),'',{
        timeOut:2000,
        progressBar:true 
  })
  }
    this.submitted = false ;
    this.form.get('picture').reset();
});
}

/*uploadImage(event){
  this.files = event.target.files[0];
}*/

 /*     async submitAnnonce(){
        const loading = await this.loadingCntrl.create({message:'Loading ...'});
        loading.present();

        this.servicePost.insertData(this.form.value).pipe(take(1)).subscribe((resultat)=>{
          console.log(resultat);
          loading.dismiss();      });
      }*/
      getAllCategorie(){
        this.Categorieservice.getAllCategorie().subscribe(response => 
          {
          this.categories = response.data ;
          console.log(this.categories);  
           });
          } 
}

