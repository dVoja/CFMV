package dv.CFMV.controller;

import dv.CFMV.Service.ContactService;
import dv.CFMV.Service.UserService;
import dv.CFMV.model.Contact;
import dv.CFMV.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/userController")
public class UserController {
    @Autowired
    private UserService userService;


    @RequestMapping(value = "/delete/{id}",
            method = RequestMethod.DELETE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<Contact> deleteContact(@PathVariable Long id){
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
