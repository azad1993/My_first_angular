import { Component, OnInit } from '@angular/core';
import { NewServiceCartService } from '../new-service-cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {

  shippingCosts ;

  constructor(
  private cartService: NewServiceCartService
   ) {
   }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}