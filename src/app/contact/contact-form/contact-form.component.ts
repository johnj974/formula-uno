import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  //.
  contactForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      interest: new FormControl(null, Validators.required),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      message: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.contactForm);
  }
}
