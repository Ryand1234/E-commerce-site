import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

	private url = '/api/users/';
  constructor(private  http : HttpClient) { }

	getProfile(token: string){
		var new_url = this.url + token;
		console.log("URL: ",new_url);	
	return this.http.get(new_url);
	}
}
