import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { NotFound } from './pages/not-found/not-found';
import { Signin } from './pages/signin/signin';
import { Cart } from './pages/cart/cart';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from './pages/story/story';
export const routes: Routes = [
     {path:'',component:Home},
     {path:'signin',component:Signin},
     {path:'signup',component:Signin},
     {path:'story',component:Story},
     { 
  path: 'cart', 
  component: Cart, 
  canActivate: [() => inject(AuthService).signedIn() || inject(Router).createUrlTree(['/signin'])] 
},
     {path:'makeup/:categoryName/:productId',component:Products},
     {path:'makeup/:categoryName',component:Products},

  {path: '**', component: NotFound},
];
