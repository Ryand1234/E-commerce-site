import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Person }  from './person'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
	

	private url = "/api/users/register";

	private header = {
                headers:  new HttpHeaders({'Content-Type': 'application/json'})
                  };

//	public status: string;
  constructor( private http: HttpClient ) { }


  register(data: Person ){
	
//return this.http.post(this.url, {'username': 'riyan', 'email':'riyan@gmail.com', 'password':'riyan123455', 'number': '9874563215'});
	return this.http.post(this.url, data);
	}
}
