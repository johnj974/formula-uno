import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  //.

  registeredEmail: string;
  registeredEmailArray: string[] = []; //TO CAPTURE AND PASS TO BACKEND
  constructor() {}

  ngOnInit(): void {}

  onSignUp(formData: NgForm) {
    console.log(formData.value.email);
    this.registeredEmail = formData.value.email;
    this.registeredEmailArray.push(this.registeredEmail);
    setTimeout(() => {
      this.registeredEmail = null;
      formData.reset();
    }, 5000);
  }
}
