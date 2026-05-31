import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'products/:categoryId', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponentComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
