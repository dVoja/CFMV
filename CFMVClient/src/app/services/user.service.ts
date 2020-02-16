import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contact} from "../model/Contact";
import {getSortHeaderMissingIdError} from "@angular/material/sort/typings/sort-errors";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient){

}
  addContact(contact:Contact ){
    console.log(contact);
    return  this.httpClient.post('http://localhost:8080/contactController/create/' + "5", contact );
  }

  deleteContact(id){
    console.log(id);
    return this.httpClient.delete('http://localhost:8080/contactController/delete/' + id );

  }
  findAll(id){
    console.log(id);
    return this.httpClient.get('http://localhost:8080/contactController/findAll');
  }
  update(contact, id){
    console.log(id);
    return this.httpClient.get('http://localhost:8080/contactController/update/' + id, contact);
  }
  findById(id) {
    console.log(id);
    return this.httpClient.get('http://localhost:8080/contactController/findbyId/' + id);
  }
  logicdelete(id) {
    console.log(id);
    return this.httpClient.get('http://localhost:8080/contactController/logicdelete/' + id);
  }
}

