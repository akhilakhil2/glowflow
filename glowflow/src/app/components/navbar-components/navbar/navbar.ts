import { Component, inject } from '@angular/core';
import { MakeupDropdown } from '../makeup-dropdown/makeup-dropdown';
import { RouterLink,Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { CartService } from '../../../services/cart-service';
import { EyesDropdown } from '../eyes-dropdown/eyes-dropdown';
import { LipsDropwown } from '../lips-dropwown/lips-dropwown';
import { KitDropwown } from "../kit-dropwown/kit-dropwown";
import { NailsDropwown } from "../nails-dropwown/nails-dropwown";
import { AllDropwown } from "../all-dropwown/all-dropwown";

@Component({
  selector: 'app-navbar',
  imports: [MakeupDropdown, RouterLink, EyesDropdown, LipsDropwown, KitDropwown, NailsDropwown, AllDropwown],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
isMenuOpen = false;
authService = inject(AuthService);
cartService = inject(CartService);

  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


   private router = inject(Router);

  onclick(){
    this.router.navigate(['/signin']);
  }

  navigateToCart(){
     this.router.navigate(['/cart']);
  }
  
}

