import { Component, OnInit } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { ContectErviceService } from '../contect-ervice.service';
import { Contact } from '../cccontact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

    firstName = new FormControl('');
    lastName = new FormControl('');
    phoneNumber = new FormControl('');
    emailAddress = new FormControl('');

  constructor() { }
  

  ngOnInit() {
  }

}