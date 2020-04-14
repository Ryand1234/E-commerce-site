import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserLogin } from './user-login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
	
	private url = '/api/users/login'
  constructor(private http: HttpClient) { }

	login(data: UserLogin) {
		return this.http.post(this.url, data);
	}
}
