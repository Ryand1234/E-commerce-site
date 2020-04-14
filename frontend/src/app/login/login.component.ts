import { Component, OnInit } from '@angular/core';
import { UserLogin } from './user-login'
import { FormControl, FormGroup } from '@angular/forms'
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	User = new FormGroup({
	email: new FormControl(''),
	password: new FormControl('')
	});

	token: any;
	url = "/profile/";

  constructor(private service: LoginService) { }

	onSubmit(){
		var user = new UserLogin(this.User.value.email, this.User.value.password);
		this.service.login(user).subscribe((result)=>{
		this.token = result},(error)=>{console.log("Error: ",error)});
		
		
	}


}
