import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { SearchService } from './search.service'
import { Product } from '../../product'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
	Product = new FormGroup({
		prodName: new FormControl('')
	});

	product: any;
  constructor(private service: SearchService) { }

  onSubmit(){
	var prod = this.Product.value.prodName;
	this.service.getOneProduct(prod).subscribe((result) =>{
	this.product = result}, (err)=>{ console.log("ERROR: ",err)});
	}

}
