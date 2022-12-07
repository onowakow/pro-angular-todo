import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';

@NgModule({
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
  imports: [BrowserModule, FormsModule, ModelModule],
  exports: [StoreComponent],
})
export class StoreModule {}
