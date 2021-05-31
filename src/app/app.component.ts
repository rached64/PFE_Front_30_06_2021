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
    { title: 'Mon Compte', url: '/folder/Spam', icon: 'person-circle' },
  ];
  public labels = [
    {title:'Se connecter', url:'/login'}, 
    {title:'Information Pratique',url:''},
    {logout:'se déconnecter', url:''}

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
}
