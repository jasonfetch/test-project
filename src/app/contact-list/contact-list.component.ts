import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { AppComponent } from '../app.component';
import { Contact } from '../cccontact';
import { FormControl, } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { ContectErviceService } from '../contect-ervice.service';

export type EditorType = 'edit';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  updateHere = new FormControl('');

  @Input()
  contactList : Contact [] = [
  
  ];

  constructor (private contactService: ContectErviceService) { }
  ngOnInit() : void{
    this.getContacts()
  }
  getContacts() {
    this.contactService.getContacts()
      .subscribe(contacts => this.contactList = contacts.slice(1, 5));
  }
  delete(contact: Contact): void {
    this.contactList = this.contactList.filter(c => c !== contact);
    this.contactService.deleteContact(contact.id).subscribe();
  }
  updateFN(c: Contact) : void {
    c.fname = this.updateHere.value;
  }
  updateLN(c : Contact) : void {
    c.lname = this.updateHere.value;
  }
  updatePN(c : Contact) : void {
    c.phone = this.updateHere.value;
  }
  updateEA(c : Contact) : void {
    c.email = this.updateHere.value;
  }
}