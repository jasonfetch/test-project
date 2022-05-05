import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { AppComponent } from '../app.component';
import { Contact } from '../cccontact';
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

  @Input()
  contactList : Contact [] = [
  
  ];
  
showEditContact : boolean = true;




  
  constructor (private contactService: ContectErviceService, private edit : EditContactComponent) { }
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
  updateFN(){

  }
  updateLN(){
    
  }
  updatePN(){
    
  }
  updateEA(){
    
  }
}