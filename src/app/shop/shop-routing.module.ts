import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShopComponent } from './main-shop/main-shop.component';
import { ShopLandComponent } from './shop-land/shop-land.component';

const routes: Routes = [
  { path: '', component: MainShopComponent },
  { path: ':id/:name', component: ShopLandComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
