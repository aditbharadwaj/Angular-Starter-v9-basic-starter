import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: "Adit", description: "contact me on this email", email: "tidabharadwaj04@gmail.com"},
    {id: 2, name: "Aditya", description: "contact me on this email", email: "tidabharadwaj04@gmail.com"},
    {id: 3, name: "Adi", description: "contact me on this email", email: "tidabharadwaj04@gmail.com"},
    {id: 4, name: "Aditi", description: "contact me on this email", email: "tidabharadwaj04@gmail.com"}
  ];

  constructor() { }

  public getContacts():Array<{id, name, description, email}>{
    return this.contacts;
  }
  public createContact(contact: {id, name, description, email}){
    this.contacts.push(contact);
  }
}
