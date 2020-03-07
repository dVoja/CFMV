package dv.CFMV.controller;

import dv.CFMV.DAO.ContactDAO;
import dv.CFMV.Service.ContactService;
import dv.CFMV.Service.WodService;
import dv.CFMV.model.Contact;
import dv.CFMV.model.Wod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/wodController")
public class WodController {
    @Autowired
    private WodService wodService;



    @RequestMapping(value = "/create/",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<Wod> createWod(@RequestBody Wod wod){

        if(wod == null){
            return new ResponseEntity(wod, HttpStatus.BAD_REQUEST);
        }

        Wod  newWod = new Wod();

        //Contact   email= null content = null...
        newWod.setDate(wod.getDate());
        newWod.setDay((wod.getDay()));

        newWod.setIndeks(wod.getIndeks());
        newWod.setTekst(wod.getTekst());

        Wod  ret;
        ret = wodService.save(newWod); // -> Service -> ServiceImpl -> Repository(JPA) -> "inset into..." -> MySQL <-



        return new ResponseEntity(ret, HttpStatus.OK);
    }
// Fizicko brisanje
    @RequestMapping(value = "/delete/{id}",
            method = RequestMethod.DELETE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<Wod> deleteWod( @PathVariable Long id){
        wodService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping ( value = "/findAll",
            method = RequestMethod.GET,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public  ResponseEntity<List<Wod>> findWod(){
            List<Wod> all = this.wodService.findAll();
        return new ResponseEntity<>(all,HttpStatus.OK);
    }
    @RequestMapping ( value = "/findById/{id}",
            method = RequestMethod.GET,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public  ResponseEntity<Wod> findById(@PathVariable Long id){

            if ( (String.valueOf(id)).equals("undefined") || (String.valueOf(id)).equals("null") ) {
                System.out.println("Error id...");
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        Wod idelemts = this.wodService.findById(id);
                return new ResponseEntity<>(idelemts, HttpStatus.OK);

    }

    @RequestMapping ( value = "/findByDate/{date}",
            method = RequestMethod.GET,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE )
    public  ResponseEntity<Wod> findByDate(@PathVariable String date){

        if ( date.equals("undefined") || ((date)).equals("null") ) {
            System.out.println("Error Date...");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Wod retelemts = this.wodService.findByDate("3/7/2020");
        return new ResponseEntity<>(retelemts, HttpStatus.OK);

    }


}
