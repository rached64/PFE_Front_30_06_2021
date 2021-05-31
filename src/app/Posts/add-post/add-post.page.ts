import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/Models/categories';
import { IPost, Post } from 'src/app/Models/posts';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  annonce= new Post() ;
  categories: ICategories[];
  postData:IPost[];

  formPost:FormGroup


  step:any=1 ;
  alert:boolean = false
  constructor(private service:PostsService,
    private Categorieservice:CategoriesService,
    private fb:FormBuilder  
    ) {
      let formControls = 
      {
        title : new FormControl('',[Validators.required]),
        description: new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required,Validators.pattern("[0-9]")]),
        categorie: new FormControl('',[Validators.required]),
        marque: new FormControl('',[Validators.required]),
        modele: new FormControl('',[Validators.required]),
        anneeModele: new FormControl('',[Validators.required]),
        YearOfRegistration: new FormControl('',[Validators.required]),
        carburant: new FormControl('essance'),
        BoiteDeVitesse: new FormControl('manuelle'),
        nombrePorte: new FormControl('',[Validators.required]),
        nombrePlace: new FormControl('',[Validators.required]),
        puissanceFiscale: new FormControl('',[Validators.required]),
        puissanceDin: new FormControl('',[Validators.required]),
        kilometrage: new FormControl('',[Validators.required]),
        type: new FormControl('offre'),
        permis: new FormControl('avecPermis')
      }
      this.formPost = this.fb.group(formControls);
     }
     saveUser(){
      console.log(this.formPost.value);
    }
    get title(){
      return this.formPost.get('title');
    }
  
  

  ngOnInit() 
  { 
    this.getAllCategorie();
  }

  insertData(){
    this.service.insertData(this.annonce).subscribe(res=>{
      console.log(res);
    })
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
    imageUpload(event){
      console.log(event);
    }
     

}
