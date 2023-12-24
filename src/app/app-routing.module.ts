import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Module/feature/components/home/home.component';
import { ProductsComponent } from './Module/feature/components/products/products.component';
import { CartComponent } from './Module/feature/components/cart/cart.component';
import { ProductDetailsComponent } from './Module/feature/components/product-details/product-details.component';
import { CheckoutComponent } from './Module/feature/components/checkout/checkout.component';
import { PaymentComponent } from './Module/feature/components/payment/payment.component';
import { PaymentSuccessComponent } from './Module/feature/components/payment-success/payment-success.component';
import { OrderComponent } from './Module/feature/components/order/order.component';
import { OrderDetailsComponent } from './Module/feature/components/order-details/order-details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'checkout/payment/:id',component:PaymentComponent},
  {path:'payment-success',component:PaymentSuccessComponent},
  // {path:'login',component:LoginComponent},
  // {path:'register',component:RegisterComponent},
  { path: ':lavelOne/:lavelTwo/:lavelThree', component: ProductsComponent },
  { path: 'order-summery', component: ProductsComponent },
  { path: 'account/orders', component: OrderComponent },
  { path: 'order/:orderId', component: OrderDetailsComponent },
  //generated admin module using `ng g m admin --routing` to include routing in admin module
  {path: 'admin',loadChildren:()=>import("./Module/admin/admin-routing.module").then(m=>m.AdminRoutingModule)}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
