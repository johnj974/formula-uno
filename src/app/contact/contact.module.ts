import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { MainContactComponent } from './main-contact/main-contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainContactComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
