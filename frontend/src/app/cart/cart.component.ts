import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { CartService } from './cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	products: Product;

  constructor(private service: CartService) { }

  msg: any;

  ngOnInit() {
  		
  		this.service.getCart().subscribe((result) => {
  			this.products = result 
  			console.log(typeof this.products)
  			console.log(this.products)
  			},(error) =>{
          this.msg = error;
        });
  }

}
