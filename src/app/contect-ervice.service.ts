import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Contact } from './cccontact';

@Injectable({
  providedIn: 'root'
})
export class ContectErviceService {

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl);
  }
  getContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url);
  }
  updateContact(c : Contact): Observable<any> {
    return this.http.put(this.contactsUrl, c, this.httpOptions);
  }
  addContact(c : Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, c, this.httpOptions);
  }
  deleteContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.delete<Contact>(url, this.httpOptions);
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient) { }
    private contactsUrl = 'api/contacts';  // URL to web api
}
