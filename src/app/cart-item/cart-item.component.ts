import { CartServiceService } from './../cart-service.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { url } from 'inspector';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() productDetails;
  @Input() quantity;
  @Output() itemShouldBeDeleted = new EventEmitter;
  constructor(private cartService : CartServiceService , private router: Router) {
  }

  ngOnInit() {
  }

  increment(event){
    this.cartService.itemAddedToCart.next(this.productDetails.id);
    this.quantity++;
  }

  decrement(event){
    if(this.quantity!=0){
      this.cartService.itemRemovedFromCart.next(this.productDetails.id);
      if(this.quantity==1){
          this.itemShouldBeDeleted.emit(this.productDetails.id);
      }
      this.quantity--;
    }
  }

  navigationToOrderForm(){
    this.router.navigate(['/', 'order']);
  }
}
