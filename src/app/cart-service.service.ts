import { Injectable,OnInit } from '@angular/core';
import { Subject, Observable,from } from 'rxjs';
import { ItemsServiceService } from './items-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  itemAddedToCart = new Subject();
  itemRemovedFromCart = new Subject();
  itemsInCart: Array<any>;
  allItems: any;
  constructor(private itemsService : ItemsServiceService) {
    this.itemsService.getJSON().subscribe((data) => this.allItems = data);
    this.itemsInCart = [];
    this.itemAddedToCart.subscribe((addedItem: number) =>{
      this.itemsInCart.push(this.getCorrectItem(addedItem));
      console.log("Just pushed , ", this.itemsInCart);
    });
    this.itemRemovedFromCart.subscribe((removedItem : number) =>{
      this.removeItemFromCart(removedItem);
    })
  }

  getCorrectItem(itemId : number){
    for(let i =0; i< this.allItems.length; i++){
      if(this.allItems[i].id == itemId){
        return this.allItems[i];
      }
    }
  }

  removeItemFromCart (itemId : number){
    for(let i =0; i< this.itemsInCart.length; i++){
      if(this.itemsInCart[i].id == itemId){
        this.itemsInCart.splice(i,1);
        console.log("Just removed , now items In Cart is : ", this.itemsInCart);
        break;
      }
    }
  }

  deleteItemCompletelyFromCart(itemId : number){
    for(let i =0; i< this.itemsInCart.length; i++){
      if(this.itemsInCart[i].id == itemId){
        this.itemsInCart.splice(i,1);
      }
    }
  }

  showinDrowpincart(){

  }
}
