import { Component, OnInit } from '@angular/core';
import { ShowProdService } from './show-prod.service';
import { AddToCartService } from './add-to-cart.service';
import { Product } from '../product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	products : Product;
  constructor(private showService: ShowProdService,
  				private cartService: AddToCartService) { }

 ngOnInit() {
	this.showService.getProduct().subscribe((result) => {

		this.products = result}, (err) => { console.log("ERROR: ",err) } );

	}

	status: any;
	add(token: string){
		this.cartService.addtocart(token).subscribe((result) => {
			this.status = result
			console.log("STATUS: ",this.status)});
	}
	

}
