import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

	private url = '/api/product/search/';
  constructor(private http: HttpClient) { }

	getOneProduct(token: string) {
		var new_url = this.url + token;
		return this.http.get(new_url);
	}
}
