import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { IPost } from 'src/app/Models/posts';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
 // private updateSubscription: Subscription;

  postData:IPost[];
  post:Observable<IPost[]> | null =null ;
  
  //  categoryData:ICategories ;
  //  post:Ipost;
    //pagination
//    POSTS: any;
    page = 1;
    count = 0;
    tableSize = 2;
    tableSizes = [2, 3, 4 ,5];
  
    items = [];
  //transfert data to HomePage
    @Output() datapost:EventEmitter<any> = new EventEmitter()
    constructor(
      private service:PostsService,
       private routes:Router,
       private activatedRoute: ActivatedRoute,
       
       ) {}
    
    ngOnInit():void {
       this.getAllpost();
       ////transfert data to HomePage
       this.datapost.emit(this.getAllpost());
       console.log(this.activatedRoute.snapshot.params.id);

    /*   this.updateSubscription = interval(5000).subscribe(
        (val) => { this.getAllpost()
        });*/
   
    }

    getAllpost(){
      this.service.getAllpost().subscribe(response => {
        this.postData = response.data ;
        console.log(this.postData);
         });
    }
  
    deletepost(id){
      this.service.deleteData(id).subscribe(res=>{
        this.getAllpost();
      })
    }
  
  
    onTableDataChange(event){
      this.page = event;
      this.getAllpost();
    }
     
    onTableSizeChange(event): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.getAllpost();
    } 

}
