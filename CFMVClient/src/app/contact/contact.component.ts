import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Contact} from "../model/Contact";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  private userForm: FormGroup; //any -> FormGroup
  contactForm: FormGroup;
  submited = false;
  success = false;

  constructor( private userService: UserService, private formBuilder: FormBuilder) {
    this.contact  = new Contact();

  }

  ngOnInit() {
    this.contactForm=this.formBuilder.group({
      firstName: ['',Validators.required],
      content:['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      phoneNumber: ['',Validators.required],
    });
  }
  onSubmit() {
    // alert("Uspesno!")
    this.submited = true;
    if (this.contactForm.invalid) {
      alert('Error.');
      return;
    } else {
      this.success = true;

      this.contact.content = this.contactForm.value.content;
      this.contact.email = this.contactForm.value.email;
      this.contact.firstName = this.contactForm.value.firstName;
      this.contact.lastName = this.contactForm.value.lastName;
      this.contact.phoneNumber = this.contactForm.value.phoneNumber;

      this.userService.addContact(this.contact).subscribe((data: any) => {
        console.log("Povratna vrednost servera");
        console.log(data);
      });
    }
  }
}
