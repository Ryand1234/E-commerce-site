import { Component, OnInit } from '@angular/core';
import { AddService } from './add.service'
import { FormControl, FormGroup } from '@angular/forms'
import { Product } from '../../product'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

	product = new FormGroup({
		name: new FormControl(''),
		price: new FormControl(''),
		token: new FormControl(''),
		detail: new FormControl('')
	});   
	constructor(private service: AddService) { }

	status: any;
  	onSubmit(){

	var user = new Product(this.product.value.name, this.product.value.price, this.product.value.token, this.product.value.detail);
		this.service.registerProduct(user).subscribe((msg: any) => { this.status = msg },(err) => { console.log('error is: ',err)});
	
	}

	

}
