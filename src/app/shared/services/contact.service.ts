import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ContactData {
  name: string;
  email: string;
  interest: string;
  phone: string;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  //.
  constructor(private http: HttpClient) {}

  postContactData(data: ContactData) {
    this.http
      .post<ContactData>(
        'https://formula-uno-f7666-default-rtdb.europe-west1.firebasedatabase.app/contacts.json',
        data
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
