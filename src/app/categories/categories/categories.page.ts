import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {  ICategories } from 'src/app/Models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  

  categories: ICategories[];
  @Output() dataCategorie:EventEmitter<any> = new EventEmitter()

  constructor(private Categorieservice:CategoriesService,
    private postService:PostsService,
    private routes:Router) { }



  ngOnInit() 
  {
    this.Categorieservice.getAllCategorie().subscribe(response => 
      {
      this.categories = response.data ;
      console.log(this.categories);  
      this.dataCategorie.emit(this.categories);
       });
  }
   

        }

      

