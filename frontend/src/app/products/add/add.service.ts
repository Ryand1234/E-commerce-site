import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../../product'


@Injectable({
  providedIn: 'root'
})
export class AddService {

	private url = "/api/product/add"
  constructor(private http: HttpClient) { }

	registerProduct(data: Product) {
		return this.http.post(this.url, data);
	}
}
