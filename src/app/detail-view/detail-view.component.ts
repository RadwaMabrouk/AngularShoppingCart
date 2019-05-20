import { CartServiceService } from './../cart-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsServiceService } from '../items-service.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  currentProductId : number;
  productDetails : any;
  allItems : any;
  constructor(private route : ActivatedRoute, private itemService: ItemsServiceService) {
    this.currentProductId= this.route.snapshot.params['id'];
    this.productDetails={};
    this.allItems={};
  }

  ngOnInit() {
    this.itemService.getJSON().subscribe((data)=>this.getItem(data));
    console.log("allitems" , this.allItems);
  }

  getItem(inputArrayItems){
    for(let i =0; i< inputArrayItems.length; i++){
       if(this.currentProductId == inputArrayItems[i].id){
        this.productDetails=inputArrayItems[i];
          console.log(this.productDetails);
       }
    }
  }
}
