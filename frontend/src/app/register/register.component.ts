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
	name : new FormControl(''),
	email : new FormControl(''),
	password : new FormControl(''),
	number : new FormControl(''),
	dob : new FormControl(''),
	sex : new FormControl('')
	});

	status: any;
	
	constructor(private service: HomeService) { }
	onSubmit(){

		var user = new Person(this.person.controls.name.value, this.person.controls.email.value, this.person.controls.number.value, this.person.controls.password.value, this.person.value.dob, this.person.value.sex);

		this.service.register(user).subscribe((msg: any) => {	this.status = msg},(err) => { console.log('error is: ',err)});

}

}
