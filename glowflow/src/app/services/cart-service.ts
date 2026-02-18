import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = signal<{ product: Product; quantity: number }[]>([]);


  cartItems = this.items.asReadonly();

  cartCount = computed(() => 
    this.items().reduce((acc, curr) => acc + curr.quantity, 0)
  );


  totalPrice = computed(() => 
    this.items().reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0)
  );

  addToCart(product: Product) {
    this.items.update(prevItems => {
      const existing = prevItems.find(i => i.product.id === product.id);
      if (existing) {
      
        return prevItems.map(i => 
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
     
      return [...prevItems, { product, quantity: 1 }];
    });
  }

  removeFromCart(productId: string) {
    this.items.update(prev => prev.filter(i => i.product.id !== productId));
  }

  decreaseQuantity(productId: string) {
  this.items.update(prevItems => {
    return prevItems.map(item => {
 
      if (item.product.id === productId) {
      
        return { ...item, quantity: Math.max(1, item.quantity - 1) };
      }
      return item;
    });
  });
}
clearCart() {
  this.items.set([]);
}
