import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Models/post';
import { IPost } from 'src/app/Models/posts';
import { userPro } from 'src/app/Models/userPro';
import { AuthentificationService } from 'src/app/services/authentification.service';
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

user = new userPro() ;
token:any ;
submitted = false ;
constructor(
    private service:PostsService,
    private route:ActivatedRoute,
    private userService: AuthentificationService

    ) { }

  ngOnInit() {
this.id=this.route.snapshot.paramMap.get('id');
this.service.getDataById(this.id).subscribe(res=>{
 this.data=res ;
 this.annonce= this.data ;
})
this.getProfile();
}
getProfile(){
  this.token = localStorage.getItem('token');
  this.userService.getUserByToken(this.token).subscribe(res=>{
    console.log(res);
   this.data = res ;
   this.user=this.data ;
});
}
submit()
{
  if(this.user.SIERT== 1)
  {
    return this.submitted = true
  }
  
}

}
