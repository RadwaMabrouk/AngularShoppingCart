import { Subject } from 'rxjs';
import { FilterPipe } from './../filter.pipe';
import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from '../items-service.service';

@Component({
  selector: 'app-list-of-cards',
  templateUrl: './list-of-cards.component.html',
  styleUrls: ['./list-of-cards.component.scss']
})
export class ListOfCardsComponent implements OnInit {
  cardData: any;
  inputValue: any;

  constructor(private itemsService : ItemsServiceService) {
    this.inputValue='';
    this.cardData=[];
    // this.cardData=[{
    //   productName:"Product nameOne",
    //   productPrice:"100$",
    //   productImage:"https://picsum.photos/200/300/?random",
    //   productCategory:"Home Appliance",
    //   id:1
    // }];
  }

  ngOnInit() {
    this.itemsService.getJSON().subscribe((data)=>this.cardData=data);
  }




}
