import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Iannonce } from 'src/app/Models/annonceVehicule';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {
 // private updateSubscription: Subscription;

  annonce:Iannonce[];
  imagePath:any= 'http://127.0.0.1:8000/storage/'
  
    page = 1;
    count = 0;
    tableSize = 2;
    tableSizes = [2, 3, 4 ,5];
  
    items = [];
  //transfert data to HomePage
    @Output() datapost:EventEmitter<any> = new EventEmitter()
    constructor(
      private service:PostsService,
       private activatedRoute: ActivatedRoute, ) {}
    
    ngOnInit():void {
       this.getAllAnnonce();
       ////transfert data to HomePage
       this.datapost.emit(this.getAllAnnonce());
       console.log(this.activatedRoute.snapshot.params.id);

      /* this.updateSubscription = interval(5000).subscribe(
        (val) => { this.getAllAnnonce()
        });*/
    }

    getAllAnnonce(){
      this.service.getAllAnnonce().subscribe(response => {
        this.annonce = response.data ;
        console.log(this.annonce);
         });
    }
  
    deletepost(id){
      this.service.deleteAnnonce(id).subscribe(res=>{
        this.getAllAnnonce();
      })
    }
  
  
    onTableDataChange(event){
      this.page = event;
      this.getAllAnnonce();
    }
     
    onTableSizeChange(event): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.getAllAnnonce();
    } 
    

}
