import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { NgForm } from '@angular/forms';
import { Person } from '../person'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent{

	//person = new Person('', '', '', '');
	person =  new FormGroup({
	username : new FormControl(''),
	email : new FormControl(''),
	password : new FormControl(''),
	number : new FormControl('')
	});

	status: any;
	
	constructor(private service: HomeService) { }
	onSubmit(){
		console.log(this.person.controls.email.value);
		var user = new Person(this.person.controls.username.value, this.person.controls.email.value, this.person.controls.number.value, this.person.controls.password.value);
		console.log("PERSON: ",user);
		this.service.register(user).subscribe((msg: any) => {	this.status = (typeof msg)},(err) => { console.log('error is: ',err)});
		console.log("MESSAGE: ",this.status);	
}

}
