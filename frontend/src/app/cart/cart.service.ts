import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../product'

@Injectable({
  providedIn: 'root'
})
export class CartService {
	
	private url = '/api/cart/all'
  
  constructor(private http: HttpClient) { }

  	getCart() {

  		return this.http.get<Product>(this.url);
  	
  	}
}
