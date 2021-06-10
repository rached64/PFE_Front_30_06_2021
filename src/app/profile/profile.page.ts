import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IPost } from '../Models/posts';
import { IuserPro, userPro } from '../Models/userPro';
import { Utilisateur } from '../Models/utilisateur';
import { AuthentificationService } from '../services/authentification.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
profileType: string = 'Profil' ;
//utilisateur = {} as Utilisateur ;
utilisateur: Utilisateur;
id:any;
data:any ;
user = new userPro() ;
token:any ;

  constructor(private storage: NativeStorage,
    private router: Router,
    private userService: AuthentificationService
    ) { }

   ngOnInit():void {
this.getProfile();
this.updateProfile();
};
getProfile(){
  this.token = localStorage.getItem('token');
  this.userService.getUserByToken(this.token).subscribe(res=>{
    console.log(res);
   this.data = res ;
   this.user=this.data ;
});
}
updateProfile(){
  this.token = localStorage.getItem('token');
    this.userService.updateProfile(this.id,this.token).subscribe(res=>{
      console.log(res);
    });
  
}
  segmentChanged($event){
    console.log('event', $event);
    this.profileType = $event.detail.value ;
  }



}