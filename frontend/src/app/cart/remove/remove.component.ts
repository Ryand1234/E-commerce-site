import { Component, OnInit } from '@angular/core';
import { Product } from '../../product'
import { RemoveService } from './remove.service'

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

	products: Product;

  constructor(private service: RemoveService) { }

  msg: any;
  status: any;

  ngOnInit() {
  		
  		this.service.getCart().subscribe((result) => {
  			this.products = result 
  			},(error) =>{
          this.msg = error;
        });
  }

  remove(token: string){
		this.service.removeProd(token).subscribe((result) => {
			this.status = result
			console.log("STATUS: ",this.status)});
	}

}
