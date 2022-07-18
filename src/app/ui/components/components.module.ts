import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from 'src/app/admin/components/products/products.module';
import { OrdersModule } from 'src/app/admin/components/orders/orders.module';
import { BasketsModule } from './baskets/baskets.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   ProductsModule,HomeModule,BasketsModule
  ]
})
export class ComponentsModule { }
