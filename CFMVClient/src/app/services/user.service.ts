import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contact} from "../model/Contact";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient){
}
  addContact(contact){

    console.log(contact);
    return this.httpClient.post('http://localhost:8080/contactController/create', contact );
  }
}

