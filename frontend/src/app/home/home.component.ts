import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	products = [];
	
  constructor() { }

  ngOnInit(): void {
//  this.all()
  }


 /* all(token: string): void {

  		this.homeservice.getProduct({ token }).subscribe(
  			products => this.products = products);
  }*/

}
