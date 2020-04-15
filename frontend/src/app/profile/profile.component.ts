import { Component, OnInit } from '@angular/core';
import { Person } from '../person'
import { ProfileService } from './profile.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	
	userinfo : any;
  constructor(private service : ProfileService,
  			private router : Router) { }

  		msg: any;

  ngOnInit(){

	this.service.getProfile().subscribe((result)=>{ this.userinfo = result}, (error)=>{
  this.msg = error
  });
	
	}


}
