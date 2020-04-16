import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

	private url = '/api/cart/checkout';

  constructor(private http: HttpClient) { }

  checkout(){
  	return this.http.get(this.url);
  }
}
