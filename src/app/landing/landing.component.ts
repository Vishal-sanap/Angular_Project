import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

 show : boolean = false ;
 toggle : boolean = false;
 
  name : string = 'Vishal';
  love : string = 'CODING' ;

  address="Nashik";

  age(){
    console.log("Your Age Is 21")
  }
  
 city:any;
constructor ( public router : Router ) {}
login () {
  this.router.navigateByUrl('admin/login');
    }
    signup () {
      this.router.navigateByUrl('admin/signup');
    }

    toggleeffect(){
      this.toggle = !this.toggle;
    }
}
