import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  //.

  registeredEmail: string;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  onSignUp(formData: NgForm) {
    console.log(formData.value.email);
    this.registeredEmail = formData.value.email;
    //this.contactService.postNewsLetterData(this.registeredEmail); // add when backend takes more than one endpoint
    setTimeout(() => {
      this.registeredEmail = null;
      formData.reset();
    }, 5000);
  }
}
