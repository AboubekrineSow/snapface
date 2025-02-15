import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  userEmail! : string;

  constructor(private router : Router){};

   onContinue(){
    this.router.navigateByUrl('facesnaps');
   }

   onSubmitForm(form: NgForm): void{
    console.log(form.value)
   }
}
