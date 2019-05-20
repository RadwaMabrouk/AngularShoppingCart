import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ListOfCardsComponent } from './list-of-cards/list-of-cards.component';
import { MasterProductViewComponent } from './master-product-view/master-product-view.component';
import { MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { UserLoginComponent } from './user-login/user-login.component';
import { CartServiceService } from './cart-service.service';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { LoggedInAppComponent } from './logged-in-app/logged-in-app.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { FilterPipe } from './filter.pipe';
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    ListOfCardsComponent,
    MasterProductViewComponent,
    UserLoginComponent,
    CartComponent,
    CartItemComponent,
    LoggedInAppComponent,
    DetailViewComponent,
    FilterPipe,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
