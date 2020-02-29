package dv.CFMV.controller;

import dv.CFMV.DAO.ContactDAO;
import dv.CFMV.Repository.ContactRepository;
import dv.CFMV.Service.ContactService;
import dv.CFMV.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.List;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/contactController")
public class ContactController {
    @Autowired
    private ContactService contactService;

    @Autowired
    private JavaMailSender javaMailSender;


    @RequestMapping(value = "/create/{idasd}",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<Contact> createContact(@PathVariable String idasd, @RequestBody ContactDAO recivedContact){

        if(recivedContact == null){
            return new ResponseEntity(recivedContact, HttpStatus.BAD_REQUEST);
        }

        Contact  newContact = new Contact();

        //Contact   email= null content = null...
        newContact.setContent(recivedContact.getContent());
        newContact.setPhoneNumber(Long.parseLong(recivedContact.getPhoneNumber()));
        newContact.setdeleted(false);
        newContact.setEmail(recivedContact.getEmail());
        newContact.setFirstName(recivedContact.getFirstName());
        newContact.setLastName(recivedContact.getLastName());
        Contact  retContact;
        retContact = contactService.save(newContact); // -> Service -> ServiceImpl -> Repository(JPA) -> "inset into..." -> MySQL <-

        //JAVA MAIL
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo("cfmv2@outlook.com");
        mailMessage.setSubject("Client Contact");
        mailMessage.setReplyTo(recivedContact.getEmail());
        mailMessage.setText(recivedContact.getContent());


        javaMailSender.send(mailMessage);

        return new ResponseEntity(retContact, HttpStatus.OK);
    }
// Fizicko brisanje
    @RequestMapping(value = "/delete/{id}",
            method = RequestMethod.DELETE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<Contact> deleteContact( @PathVariable Long id){
        contactService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    //Logicko brisanje
    @RequestMapping(value = "/logicdelete/{id}",
            method = RequestMethod.DELETE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<Contact> deleteContactLogically( @PathVariable Long id) {
        // Nadjes entitet koji menjas
        //promenis vrednost atributa
        // sacuvas
        if ( (String.valueOf(id)).equals("undefined") || (String.valueOf(id)).equals("null") ) {
            System.out.println("Error id...");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Contact delContact = contactService.findById(id);
        delContact.setdeleted(true);
         Contact retContact= contactService.save(delContact);
        return new ResponseEntity<>(retContact , HttpStatus.OK);
    }
    @RequestMapping ( value = "/update/{id}",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public  ResponseEntity<Contact> updateContact(@PathVariable Long id,  @RequestBody Contact contact){

        if ( (String.valueOf(id)).equals("undefined") || (String.valueOf(id)).equals("null") ) {
            System.out.println("Error id...");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Contact newContact = contactService.findById(id);
        newContact.setFirstName(contact.getFirstName());
        newContact.setLastName(contact.getLastName());
        newContact.setEmail(contact.getEmail());
        newContact.setContent(contact.getContent());
        newContact.setPhoneNumber(contact.getPhoneNumber());
        Contact ret = this.contactService.save(newContact);
        //Contact newwContact = new Contact(contact.getEmail(), contact.getContent(), contact.getFirstName(), contact.getLastName(), contact.getPhoneNumber());
        //Contact   email= contact.getEmail() content = contact.getContent(),...
        return new ResponseEntity<>(ret, HttpStatus.OK);

    }
    @RequestMapping ( value = "/findAll",
            method = RequestMethod.GET,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public  ResponseEntity<List<Contact>> findContact(){
            List<Contact> allContact = this.contactService.findAll();
        return new ResponseEntity<>(allContact,HttpStatus.OK);
    }
    @RequestMapping ( value = "/findById/{id}",
            method = RequestMethod.GET,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public  ResponseEntity<Contact> findById(@PathVariable Long id){

            if ( (String.valueOf(id)).equals("undefined") || (String.valueOf(id)).equals("null") ) {
                System.out.println("Error id...");
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
                Contact idelemts = this.contactService.findById(id);
                return new ResponseEntity<>(idelemts, HttpStatus.OK);

    }


}
