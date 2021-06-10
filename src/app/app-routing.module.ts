import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories/categories.module').then( m => m.CategoriesPageModule)
  },

  {
    path: 'posts',
    loadChildren: () => import('./Posts/post/post.module').then( m => m.PostPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-post',
    loadChildren: () => import('./Posts/add-post/add-post.module').then( m => m.AddPostPageModule)
  },
  {
    path: 'edit-post/:id',
    loadChildren: () => import('./Posts/edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
  {
    path: 'add-categories',
    loadChildren: () => import('./categories/add-categories/add-categories.module').then( m => m.AddCategoriesPageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./Recherches/recherche/recherche.module').then( m => m.RecherchePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./Search/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./authentification/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./authentification/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'detail-post/:id',
    loadChildren: () => import('./Posts/detail-post/detail-post.module').then( m => m.DetailPostPageModule)
  },
  {
    path: 'post-by-categorie/:id',
    loadChildren: () => import('./Posts/post-by-categorie/post-by-categorie.module').then( m => m.PostByCategoriePageModule)
  },
  {
    path: 'sign-up-pro',
    loadChildren: () => import('./authentification/sign-up-pro/sign-up-pro.module').then( m => m.SignUpProPageModule)
  },
  {
    path: 'sign',
    loadChildren: () => import('./authentification/sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'add-post-simple',
    loadChildren: () => import('./Posts/add-post-simple/add-post-simple.module').then( m => m.AddPostSimplePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
 /* {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },*/
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
