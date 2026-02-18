

import { Component, computed, inject, resource } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ProductsComponent } from '../../components/products-component/products-component';
import { ProductDetail } from '../../components/product-detail/product-detail';
import { Product, CategoryResponse, ProductDetailResponse } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsComponent, ProductDetail],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private route = inject(ActivatedRoute);

  // 1. Capture route changes as a signal
  params = toSignal(this.route.paramMap.pipe(
    map(params => ({
      category: params.get('categoryName'),
      productId: params.get('productId')
    }))
  ));

  // 2. Resource for the category list (/makeup/{category})
  productsResource = resource({
    // 'params' defines the reactive trigger
    params: () => ({ category: this.params()?.category }),
    // 'loader' receives { params, abortSignal }
    loader: async ({ params }) => {
      if (!params.category) return [];
      const res = await fetch(`http://localhost:5046/makeup/${params.category}`);
      return await res.json() as CategoryResponse;
    }
  });

  // 3. Resource for the single product detail (/api/makeup/{category}/{id})
  productDetailResource = resource({
    params: () => {
      const p = this.params();
      return (p?.category && p?.productId) 
        ? { cat: p.category, id: p.productId } 
        : undefined;
    },
    loader: async ({ params }) => {
      
      const res = await fetch(`http://localhost:5046/makeup/${params.cat}/${params.id}`);
      return await res.json() as ProductDetailResponse;
    }
  });

  // 4. Computed values for the template
  displayProducts = computed(() => {
    // Hide list if viewing a specific product
    if (this.params()?.productId) return [];
    return this.productsResource.value() ?? [];
  });

  selectedProduct = computed(() => this.productDetailResource.value());
}