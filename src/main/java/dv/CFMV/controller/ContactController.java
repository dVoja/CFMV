package dv.CFMV.controller;

import dv.CFMV.model.Contact;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/contactController")
public class ContactController {



    @RequestMapping(value = "/create",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE, //JSON - podaci u kom se salju sa fornta na back i obrnuto
            produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<Contact> createContact(@RequestBody Contact recivedContact){

        if(recivedContact == null){
            return new ResponseEntity(recivedContact, HttpStatus.BAD_REQUEST);
        }
        Contact  newContact = new Contact();

        // newContact = contactService.save(recivedContact); // -> Service -> ServiceImpl -> Repository(JPA) -> "inset into..." -> MySQL
        return new ResponseEntity(newContact, HttpStatus.OK);
    }



}
