import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  //.
  thankYou = false;
  test: 'placeholder';
  contactForm: FormGroup;
  teams: string[] = [
    'Alfa Romeo',
    'Alpha Tauri',
    'Alpine',
    'Aston Martin',
    'Ferrari',
    'Haas',
    'Mercedes',
    'McLaren',
    'Red Bull',
    'Williams',
  ];

  constructor(private contactService: ContactService) {}

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

    this.contactForm.patchValue({
      interest: this.test,
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.contactService.postContactData(this.contactForm.value);
    this.thankYou = true;

    setTimeout(() => {
      this.contactForm.reset();
      this.thankYou = false;
    }, 5000);
  }
}
