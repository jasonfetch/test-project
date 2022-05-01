import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { AppComponent } from '../app.component';
import { Contact } from '../cccontact';
import { ContactComponent } from '../contact/contact.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';

export type EditorType = 'edit';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})



export class ContactListComponent implements OnInit {

  @Input()  contactList : Contact [] = [
  
  ];
  
  
delete (c: Contact) : void{
this.contactList.splice(this.contactList.indexOf(c), 1);
}
editor: EditorType = 'edit';
get showEditContact() {
  return this.editor === 'edit';
}
toggleEditor(type: EditorType) {
  this.editor = type;
}
  

  ngOnInit() {
  }

}