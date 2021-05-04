import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MainShopComponent } from './main-shop/main-shop.component';
import { ShopLandComponent } from './shop-land/shop-land.component';


@NgModule({
  declarations: [
    MainShopComponent,
    ShopLandComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
