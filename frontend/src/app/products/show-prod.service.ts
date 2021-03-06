import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../product'

@Injectable({
  providedIn: 'root'
})
export class ShowProdService {

	private url = "/api/all-prod";

  constructor(private http: HttpClient) { }

	getProduct() {

		return this.http.get<Product>(this.url);

			}

}
