import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe((products) => {
      this.products = products;
      const allCategories = products.map(
        (product) => product.category ?? '(None)'
      );
      const categories = [...new Set(allCategories)];

      this.categories = categories;
    });
  }

  getProducts(category?: string): Product[] {
    return this.products.filter(
      (product) => category == undefined || category == product.category
    );
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((product) => product.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
