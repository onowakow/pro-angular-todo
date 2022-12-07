import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  addLine(product: Product, quantity: number = 1) {
    const line = this.findLine(product);

    if (line) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    const line = this.findLine(product);
    if (line != undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate()
  }

  removeLine(product: Product) {
    this.lines = this.lines.filter((line) => line.product.id === product.id);
    this.recalculate()
  }

  clear() {
    this.lines = [];
    this.recalculate()
  }

  private findLine(product: Product) {
    return this.lines.find((line) => line.product.id === product.id);
  }
  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;

    this.lines.forEach((line) => {
      const { quantity, lineTotal } = line;
      this.itemCount += quantity;
      this.cartPrice += lineTotal;
    });
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {}

  get lineTotal(): number {
    return this.quantity * (this.product.price || 0);
  }
}
