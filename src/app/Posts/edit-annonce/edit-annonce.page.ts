import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { annonce } from 'src/app/Models/annonceVehicule';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit-annonce',
  templateUrl: './edit-annonce.page.html',
  styleUrls: ['./edit-annonce.page.scss'],
})
export class EditAnnoncePage implements OnInit {
  id:any ;
  data:any;
  annonce= new annonce() ;
  test=false ;
  
    constructor(
      private service:PostsService,
      private route:ActivatedRoute,
      private router: Router,
      private toastr: ToastrService,

   ) {  }
  
    ngOnInit():void {
     // console.log(this.route.snapshot.params.id);
     this.id=this.route.snapshot.paramMap.get('id');
     this.service.getEquipmentById(this.id).subscribe(res=>{
      this.data=res ;
      this.annonce= this.data ;
     })
    }
  
  
    updateForm(){
      this.service.updateAnnonce(this.id ,this.annonce).subscribe(res=>{
  this.router.navigate(['/'])
      });
    }
    showMessage(){
      this.toastr.success('mise à jour avec réussi',' annonce ')
    }
    listMarque = [
      { id: 0, name: "Alfa Romeo" },
      { id: 1, name: "Dodge" },
      { id: 2, name: "Renault" },
    ];
    listModele = [
      { id: 0, name: "C15D" },
      { id: 1, name: "Peugeot" },
      { id: 2, name: "Citroën" },
      { id: 3, name: "Volkswagen" },
    ];
    listCarburant= [
      { id: 0, name: "disel" },
      { id: 1, name: "essence" },
      { id: 2, name: "gazeux" },
  
    ];

}
