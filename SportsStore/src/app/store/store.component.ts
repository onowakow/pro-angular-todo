import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
})
export class StoreComponent {
  constructor(private repository: ProductRepository) {}

  currentPage = 1;
  productsPerPage: number = 3;
  selectedCategory: string | undefined = undefined;

  get products(): Product[] {
    return this.repository.getProducts(this.selectedCategory);
  }

  get productsOnPage(): Product[] {
    const products = this.products;

    const currentPageIndex = this.currentPage - 1;
    const firstProductIndex = currentPageIndex * this.productsPerPage;
    const finalProductIndex = firstProductIndex + this.productsPerPage;
    const productsOnPage = products.slice(
      firstProductIndex,
      finalProductIndex
    );
    return productsOnPage
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  get productsQuantity(): number {
    return this.products.length;
  }

  get pageQuantity(): number {
    return Math.ceil(this.productsQuantity / this.productsPerPage);
  }

  get pageNumbers(): number[] {
    let pageNumbers = [];
    for (let i = 0; i < this.pageQuantity; i++) {
      pageNumbers.push(i + 1);
    }
    return pageNumbers;
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber
  }

  setCategory(category?: string) {
    this.goToPage(1)
    this.selectedCategory = category;
  }
}
