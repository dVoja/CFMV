import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Contact} from "../model/Contact";

@Component({
  selector: 'app-kidfit',
  templateUrl: './kidfit.component.html',
  styleUrls: ['./kidfit.component.scss']
})
export class KidfitComponent implements OnInit {
  contact: Contact;
  constructor( private userService: UserService) {
    this.contact  = new Contact();
  }

  ngOnInit() {

  }

  onClick(){
    //TODO POSLE ISPRAVITI DA UZIMA SA FRONTA

    this.contact.deleted = false;
    this.contact.content = "asd";
    this.contact.email= "wadsa@was.com";
    this.contact.firstName= "Pera";
    this.contact.lastName = " Peric";
    this.contact.phoneNumber= 1231234567;

    this.userService.addContact(this.contact).subscribe((data:any) => {
      console.log("Povratna vrednost servera");
     console.log(data);

    });
    this.userService.addContact(this.contact);

  }
}
