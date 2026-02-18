import { Component,input,signal,inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CartService } from '../../services/cart-service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  imports: [NgOptimizedImage,RouterLink,CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private cartService = inject(CartService);

  handleAddToBag() {
    const currentProduct = this.product();
    
    if (currentProduct) {
      this.cartService.addToCart(currentProduct);
      console.log('Product added to global state:', currentProduct.name);
    }
  }
product = input<Product>();

private route = inject(ActivatedRoute);
params = toSignal(this.route.paramMap.pipe(
    map(params => ({
      category: params.get('categoryName'),
      productId: params.get('productId') 
    }))
  ));
}
