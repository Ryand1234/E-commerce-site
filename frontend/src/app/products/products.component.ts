import { Component, OnInit } from '@angular/core';
import { ShowProdService } from './show-prod.service';
import { Product } from '../product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	products : Product;
  constructor(private service: ShowProdService) { }

 ngOnInit() {
	this.service.getProduct().subscribe((result) => {

		this.products = result}, (err) => { console.log("ERROR: ",err) } );
	console.log("Product1: ", this.products);
	}


	

}
