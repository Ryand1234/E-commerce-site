import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

	price: any;
	products: any;
	msg: any;

  constructor(private service: CheckoutService) { }

  ngOnInit(): void {
  	  		this.service.checkout().subscribe((result) => {
  			this.products = result.product;
  			this.price = result.price;
  				
  			},(error) =>{
          this.msg = error;
        });

  }

}
