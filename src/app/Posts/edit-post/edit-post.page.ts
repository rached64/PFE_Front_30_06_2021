import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IPost, Post } from 'src/app/Models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {

  id:any ;
  data:any;
  annonce= new Post() ;
  
    constructor(
      private service:PostsService,
      private route:ActivatedRoute,
      private router: Router,
      private toastr: ToastrService,

   ) {  }
  
    ngOnInit():void {
     // console.log(this.route.snapshot.params.id);
     this.id=this.route.snapshot.paramMap.get('id');
     this.service.getDataById(this.id).subscribe(res=>{
      this.data=res ;
      this.annonce= this.data ;
     })
    }
  
  
    updateForm(){
      this.service.updateData(this.id ,this.annonce).subscribe(res=>{
  this.router.navigate(['/'])
      });
    }
    showMessage(){
      this.toastr.success('ajouté réussi','véhicule annonce ')
    }
  

}
