import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DescriptionPipe } from '../../../pipes/description.pipe';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../services/products/product.service';
import { ProductAdmin } from '../../../types/Product';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [NgFor, DescriptionPipe, RouterLink],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCRUDComponent {
  productService = inject(ProductService); // inject vao bien

  productList: ProductAdmin[] = [];

  ngOnInit(): void {
    this.productService
      .getProductListAdmin()
      .subscribe((products) => (this.productList = products)); // callApi.then(cb fuc)
  }
  handleDeleteProduct(id: string) {
    if (window.confirm('Do you really remove product?')) {
      this.productService
        .deleteProductById(id)
        .subscribe(
          () =>
            (this.productList = this.productList.filter(
              (product) => product._id !== id
            ))
        );
    }
  }
}
