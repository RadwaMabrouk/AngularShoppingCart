import { LoggedInAppComponent } from './logged-in-app/logged-in-app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { MasterProductViewComponent } from './master-product-view/master-product-view.component';
import { CartComponent } from './cart/cart.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { AuthGaurdService } from './auth-gaurd.service';

const routes: Routes = [
  {
    path: "", component: LoggedInAppComponent
  },
  {
    path: "login" , component: UserLoginComponent
  },
  {
    path:"cart" , component: CartComponent
  },
  {
    path:"detail/:id", component: DetailViewComponent
  },
  {
    path:"order", component: OrderFormComponent, canActivate:[AuthGaurdService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
