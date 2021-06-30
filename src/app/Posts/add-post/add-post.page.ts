import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/Models/categories';
import { IPost, Post } from 'src/app/Models/posts';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';
import {FormGroup,FormControl,FormBuilder,Validators, NgForm} from '@angular/forms';
import { annonce } from 'src/app/Models/annonceVehicule';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  annonce= new annonce() ;
  categories: ICategories[];
  postData:IPost[];
  formPost:FormGroup
  step:any=1 ;
  alert:boolean = false ;
 // files:any ;
   files: any[];

  constructor(private service:PostsService,
    private Categorieservice:CategoriesService,
    private fb:FormBuilder  ,
    private toastr: ToastrService,
    private router:Router,
    private http:HttpClient,


    ) {    this.files = []; 
    }
     


  ngOnInit() 
  { 
    this.getAllCategorie();
  }

  insertData(){
    this.service.insertAnnonce(this.annonce).subscribe(res=>{
      console.log(res);
    })
 console.log(this.annonce)
    }
  getAllCategorie(){
    this.Categorieservice.getAllCategorie().subscribe(response => 
      {
      this.categories = response.data ;
      console.log(this.categories);  
       });
      }    

  getAllpost(){
    this.service.getAllpost().subscribe(response => {
      this.postData = response.data ;
      console.log(this.postData);
      console.log(response);
       });
  }

  listCategory = [
    { id: 0, name: "auto" },
    { id: 1, name: "moto" },
    { id: 2, name: "camion" },
    { id: 3, name: "utilitaire" },
  ];
  listMarque = [
    { id: 0, name: "Alfa Romeo" },
    { id: 1, name: "Dodge" },
    { id: 2, name: "Renault" },
  ];
  listModele = [
    { id: 0, name: "C15D" },
    { id: 1, name: "Peugeot" },
    { id: 2, name: "Citroën" },
    { id: 3, name: "Volkswagen" },
  ];
  listCarburant= [
    { id: 0, name: "disel" },
    { id: 1, name: "essence" },
    { id: 2, name: "gazeux" },

  ];


     //MultiStep
    next(){
      this.step=this.step +1 ;
    }
    previous(){
      this.step=this.step -1 ;
    }
    closeAlert(){
      this.alert=false ;
    }
    openAlert(){
      this.alert=false ;
    }
    uploadImage(event){
      this.files = event.target.files[0];
      console.log(this.files);
    }
    showMessage(){
      this.toastr.success('ajouté réussi','véhicule annonce ');
      this.router.navigate(['/']);
    }
    onFileChanged(event: any) {
      this.files = event.target.files;
    }
    
    onUpload() {
      const formData = new FormData();
      for (const file of this.files) {
          formData.append(file, file.name);
      }
      this.http.post('http://127.0.0.1:8000/api/sample-restful-apis/', formData).subscribe();
    }
  

}
