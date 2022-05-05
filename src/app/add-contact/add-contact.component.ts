import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from '../cccontact'
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormControl, } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component'
import { ContactListComponent } from '../contact-list/contact-list.component'
import { ContectErviceService } from '../contect-ervice.service';
import { InMemoryDataService } from '../in-memory-data.service';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  
  contacts : Contact[] = [] 


    firstName = new FormControl('');
    lastName = new FormControl('');
    phoneNumber = new FormControl('');
    emailAddress = new FormControl('');

    



  updateContact() {
    
  }
  

  getValues() : Contact {
    var temp : Contact = new Contact (Math.random(), this.firstName.value, this.lastName.value, 
      this.phoneNumber.value, this.emailAddress.value)
      return temp;
  }
  constructor (private contactService: ContectErviceService, data : InMemoryDbService) { }
  addContact(c : Contact) : void {
    this.contactService.addContact( c )
      .subscribe(contact => {
        this.contacts.push(contact);
      });
  }

  ngOnInit() {
  
  }
}



