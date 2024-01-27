import { Component, inject } from '@angular/core';
import { BanerComponent } from '../../components/baner/baner.component';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductService } from '../../services/products/product.service';
import { Product } from '../../types/Product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BanerComponent,CardComponent,FooterComponent,HeaderComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productService = inject(ProductService); // inject vao bien

  productList: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getProductList()
      .subscribe((products) => (this.productList = products)); // callApi.then(cb fuc)
  }
}
