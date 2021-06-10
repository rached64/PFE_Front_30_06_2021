import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
token:any ;
userData:any ;
email:any;
  public appPages = [
    { title: 'Déposer une annonce', url: '/add-post', icon: 'add-circle' },
    { title: 'Recherche', url: '/search', icon: 'search' },
    { title: 'Messages', url: '/folder/Favorites', icon: 'mail' },
    { title: 'Favoris', url: '/folder/Archived', icon: 'heart' },
    { title: 'Recherche sauvgardees', url: '/folder/Trash', icon: 'notifications' },
    { title: 'Mon Compte', url: '/profile', icon: 'person-circle' },
    { title1:'déconnecter', icon:'log-out'},

  ];
  public labels = [
    { title: 'Déposer une annonce', url: '/add-post', icon: 'add-circle' },
    { title: 'Recherche', url: '/search', icon: 'search' },
    {title:'Se connecter', url:'/login',icon:'log-in'}, 
    {title:'Inscription', url:'/sign-up',icon:'person-add'}
  ];
  constructor( private router:Router) {}
//Authentification
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.email = this.userData.email ;
    console.log(this.token);
    console.log(this.userData);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  function(){
    if(localStorage.getItem('token')==null){
      return true ;
    }else{
      return false ;
    }
  }
}
