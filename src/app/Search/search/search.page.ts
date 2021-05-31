import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/Models/posts';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  filterPosts: IPost[]=[] ;
  showSkeleton:boolean;
  touched:boolean;


  constructor(private service:PostsService) { }

  ngOnInit() {}
  search(ev:any):void{
    this.touched=false ;
    this.showSkeleton=true ;
    this.service.searchPost(ev.target.value).subscribe((prods:IPost[]) =>{
      if (prods.length<0){
        this.touched=true ;
        console.log(this.touched);
      }else {
        this.touched=false ;
      }
      this.showSkeleton=false;
      this.filterPosts=prods ;
    },err=>console.log(err));
  }

}
