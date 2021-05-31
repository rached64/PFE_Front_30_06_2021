import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Models/post';
import { IPost } from 'src/app/Models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.page.html',
  styleUrls: ['./detail-post.page.scss'],
})
export class DetailPostPage implements OnInit {
  id:any;
  data:any ;
annonce= new Post() ;
constructor(
    private service:PostsService,
    private route:ActivatedRoute,
    ) { }

  ngOnInit() {
this.id=this.route.snapshot.paramMap.get('id');
this.service.getDataById(this.id).subscribe(res=>{
 this.data=res ;
 this.annonce= this.data ;
})
}


  
}

