import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Contact } from './cccontact';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const contacts = [
      {id: 1, fname: "Matt", lname: "Murdock", phone: "2956382075", email: "devil@hellskitchen"},
      {id: 1, fname: "Matt", lname: "Murdock", phone: "2956382075", email: "devil@hellskitchen"},
      {id: 2, fname: "Marc", lname: "Spector", phone: "9803578964", email: "m00nkn1ght@hotmain.com"}
    ];
    return {contacts};
  }
  genId(contacts: Contact[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 2;
  }
}
