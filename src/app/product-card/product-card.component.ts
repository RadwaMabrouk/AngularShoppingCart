import { Component, OnInit, Input, HostListener} from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productDetails;
  constructor(private cartService: CartServiceService) { }

  ngOnInit() {
  }

  addToCart(event){
    this.cartService.itemAddedToCart.next(this.productDetails.id);
  }

  showDetails(){
    console.log("Show details");
  }

}
