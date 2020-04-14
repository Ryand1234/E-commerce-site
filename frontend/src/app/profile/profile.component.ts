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

  ngOnInit() {
	
	var url = this.router.url;
	var token = url.split('/')[2]
	
	this.service.getProfile(token).subscribe((result)=>{ this.userinfo = result},(error)=>{console.log("ERROR: ",error)});
	
	}


}
