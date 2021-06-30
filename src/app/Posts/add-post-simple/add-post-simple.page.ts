import { Component, OnInit } from '@angular/core';
import {  ICategories } from 'src/app/Models/categories';
import { IPost } from 'src/app/Models/posts';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';
import { annonce } from 'src/app/Models/annonceVehicule';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-post-simple',
  templateUrl: './add-post-simple.page.html',
  styleUrls: ['./add-post-simple.page.scss'],
})
export class AddPostSimplePage implements OnInit {
  annonce= new annonce() ;
  categories: ICategories[];
  postData:IPost[];
  step:any=1 ;
  alert:boolean = false
  constructor(private service:PostsService,
    private Categorieservice:CategoriesService,
    private toastr: ToastrService,
    private router:Router

    ) {}
     
  ngOnInit() 
  { 
    this.getAllCategorie();
  }

  insertData(){
    this.service.insertEquipmentAnnonce(this.annonce).subscribe(res=>{
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

  listCategory = [
    { id: 0, name: "auto" },
    { id: 1, name: "moto" },
    { id: 2, name: "camion" },
    { id: 3, name: "utilitaire" },
  ];
  showMessage(){
    this.toastr.success('ajouté réussi','equipment annonce ');
    this.router.navigate(['/detaill-annonce']);

  }


}

