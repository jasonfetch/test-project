import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from '../cccontact'
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormControl, } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component'
import { ContactListComponent } from '../contact-list/contact-list.component'


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Input() 
  contacts : Contact [] = [{
    fname : "Matthew",
    lname : "Murdoch",
    phone : "8452197354",
    email : "devil@hellskitchen.com", },{
    fname : "Marc",
    lname : "Spector",
    phone : "2493678195",
    email : "m00nkn1ght@hotmail.com"
    }];
  ;


    firstName = new FormControl('');
    lastName = new FormControl('');
    phoneNumber = new FormControl('');
    emailAddress = new FormControl('');


  addContact() {
    var temp : Contact  = new Contact(this.firstName.value, this.lastName.value,
      this.phoneNumber.value, this.emailAddress.value);
    this.contacts.push(temp);
    console.log(this.contacts)
    }

  
    
    
  addDefaultContacts() : void {
    var c1 : Contact = new Contact ("Marc", "Spector", "5894123684", "m00nkn1ght@hotmail.com")
    var c2 : Contact = new Contact ("Matt", "Murdoch", "1648732897", "notthedevil@hellskitchen.com")
    this.contacts.push(c1, c2);
  }
  


  updateContact() {
    
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  
  }
}



