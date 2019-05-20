import { DetailViewComponent } from './../detail-view/detail-view.component';
import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  cartCount: number;
  dropMenuItem: any;

  constructor(private cartService: CartServiceService) {
    this.cartCount = 0;
  }
  ngOnInit() {
    this.cartService.itemAddedToCart.subscribe(()=>{
      this.cartCount++;
    });
    this.cartService.itemRemovedFromCart.subscribe(()=>{
      if(this.cartCount!=0){
        this.cartCount--;
      }
    });
    this.dropMenuItem= this.cartService.itemsInCart;
    console.log(this.dropMenuItem ,"fadia lhh isa isa ana rdwa");


  }

}
