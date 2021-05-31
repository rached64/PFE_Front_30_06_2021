import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories, ICategories } from 'src/app/Models/categories';
import { ICitie } from 'src/app/Models/citie';
import { Post } from 'src/app/Models/post';
import { IPost } from 'src/app/Models/posts';
import { ICountrie } from 'src/app/Models/recherche';
import { IState } from 'src/app/Models/State';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';
import { RechercheService } from 'src/app/services/recherche.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {
  categorie: Categories;
  categories: ICategories[];
  post :IPost[];
  countries: ICountrie[];
  states: IState[];
  cities: ICitie[];


  constructor(private serviceRecherche:RechercheService,
    private activatedRoute: ActivatedRoute,
    private Categorieservice:CategoriesService,
    private servicePost: PostsService,


    ) { }

  ngOnInit() {
    this.getCountrie();
    this.getAllCat();
  }
  //get prod of cat

  getProdByCat(event){
  
      var categorie = event.target.value;
      this.servicePost.getpostByCategoryid(categorie).subscribe(data=>{
        console.log(data);
        this.post = data.data ;
            }) 
          }
  getAllCat(){
    this.Categorieservice.getAllCategorie().subscribe(response => 
      {
      this.categories = response.data ;
      console.log(this.categories);  
       });
  }
  
  getCountrie(){
    this.serviceRecherche.getCountrie().subscribe(res=>{
      this.countries= res.data;
      console.log(res);
    }, error => {console.log(error);
    });
  }
  getState(event):void{
  var state = event.target.value;
  // this.activatedRoute.params.subscribe(data =>{
   // console.log(data);
  //  this.states = data.id;
   this.serviceRecherche
     .getStates(state).subscribe((res) => {
       // eslint-disable-next-line @typescript-eslint/dot-notation
       this.states = res['data'];
       console.log(this.states);
     });
    
 }
 getCitie(event){
  var cities = event.target.value;
   this.serviceRecherche.getCities(cities).subscribe((res) => {
       // eslint-disable-next-line @typescript-eslint/dot-notation
       this.cities = res['body'];
           console.log(this.cities);

     });

    }
}
