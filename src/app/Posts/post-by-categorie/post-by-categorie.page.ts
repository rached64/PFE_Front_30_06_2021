import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories, ICategories } from 'src/app/Models/categories';
import { Post } from 'src/app/Models/post';
import { IPost } from 'src/app/Models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-by-categorie',
  templateUrl: './post-by-categorie.page.html',
  styleUrls: ['./post-by-categorie.page.scss'],
})
export class PostByCategoriePage implements OnInit {
  categorie: Categories;
  post :IPost[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicePost: PostsService
  ) { }

  ngOnInit():void {
    this.activatedRoute.params.subscribe(data =>{
      console.log(data);
      this.categorie = data.id;
      this.servicePost.getpostByCategoryid(this.categorie).subscribe(data=>{
        console.log(data);
        this.post = data.data ;
            })
    })


}

}
