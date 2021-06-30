import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { annonce } from 'src/app/Models/annonceVehicule';
import { userPro } from 'src/app/Models/userPro';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detaill-annonce',
  templateUrl: './detaill-annonce.page.html',
  styleUrls: ['./detaill-annonce.page.scss'],
})
export class DetaillAnnoncePage implements OnInit {

  id:any;
  data:any ;
annonce= new annonce() ;
user = new userPro() ;
test=false ;

token:any ;
submitted = false ;
constructor(
    private service:PostsService,
    private route:ActivatedRoute,
    private userService: AuthentificationService

    ) { }

  ngOnInit() {
this.id=this.route.snapshot.paramMap.get('id');
this.service.getEquipmentById(this.id).subscribe(res=>{
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

  
}
