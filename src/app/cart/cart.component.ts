import { ItemsServiceService } from './../items-service.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemsInCart: Array<any>;
  allItems: any;
  uniqueItemsInCart: any;
  uniqueIdArray: Array<number>;
  testArray : Array<any>;
  constructor(private cartService: CartServiceService, private itemService : ItemsServiceService) {
    this.itemsInCart = cartService.itemsInCart;
    this.uniqueIdArray = [];
    this.uniqueItemsInCart = {};
    this.allItems = [];
   }

  ngOnInit() {
  this.itemService.getJSON().subscribe((data) => this.allItems=data);
  this.getUniqueItemsAndTheirCount();
  console.log(this.uniqueItemsInCart);
  }

  getUniqueItemsAndTheirCount(){
    this.itemsInCart = this.cartService.itemsInCart;
    this.uniqueIdArray = [];
    this.uniqueItemsInCart= {};
    for (let item of this.itemsInCart){
      if (this.uniqueIdArray.includes(item.id)){
        let idString = item.id;
        idString = idString.toString();
        this.uniqueItemsInCart[idString]++;
      } else {
        const newKey = item.id.toString();
        this.uniqueItemsInCart[newKey]= 1;
        this.uniqueIdArray.push(item.id);
      }
    }
  }

  itemShouldBeDeleted(event){
    this.cartService.deleteItemCompletelyFromCart(event);
    this.getUniqueItemsAndTheirCount();
  }

}
