import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../../product'

@Injectable({
  providedIn: 'root'
})

export class RemoveService {
	
	private all_url = '/api/cart/all'
    private rem_url = '/api/cart/remove/'
    
  constructor(private http: HttpClient) { }

  	getCart() {

  		return this.http.get<Product>(this.all_url);
  	
  	}

  	removeProd(token: string) {

  		var new_url = this.rem_url + token;
  		return this.http.get(new_url);
  	}
}
