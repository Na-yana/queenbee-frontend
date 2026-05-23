import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';

import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';
import { OffersComponent } from './offers/offers.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { AddToCartPopupComponent } from './add-to-cart-popup/add-to-cart-popup.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    OffersComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailComponentComponent,
    AddToCartPopupComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
