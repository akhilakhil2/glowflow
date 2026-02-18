import { Component, inject, effect,signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common'; 
import { AuthService } from '../../auth.service';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterLink], 
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  public authService = inject(AuthService);
  public cartService = inject(CartService); 
  private router = inject(Router);

  isCheckedOut = signal(false);
  invoiceItems = signal<any[]>([]);
  invoiceTotal = signal(0);
  orderNumber = signal('');

  constructor() {
    effect(() => {
      if (!this.authService.signedIn()) {
        this.router.navigate(['/signin']);
      }
    });
  }

  handleCheckout() {
   
    this.invoiceItems.set(this.cartService.cartItems());
    this.invoiceTotal.set(this.cartService.totalPrice());
    this.orderNumber.set('GF-' + Math.random().toString(36).substr(2, 9).toUpperCase());

  
    this.cartService.clearCart();
    this.isCheckedOut.set(true);
    
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

 
  increaseQty(productId: string) {
  
    const item = this.cartService.cartItems().find(i => i.product.id === productId);
    if (item) {
      this.cartService.addToCart(item.product);
    }
  }

 decreaseQty(productId: string) {

  this.cartService.decreaseQuantity(productId);
}
}