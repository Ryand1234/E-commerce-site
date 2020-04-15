import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AddToCartService {


		private url = "/api/cart/add/";

  constructor(private http: HttpClient) { }


	addtocart(token: string){
		
			var new_url = this.url + token;
			console.log("URL: ",new_url)
			return this.http.get(new_url);
		
		}

}
