package dv.CFMV.Repository;

import dv.CFMV.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ContactRepository  extends JpaRepository<Contact,Long> {
        //delete save   postoje pa ih ne moras pisati
  //  Contact findByPhoneNumber(long br); // Select * from Contact where phone_number = br;
  //  Contact save(Contact contact); //predeffinisano je u JPA pa ne mora da postoji
       // void delete(Long id);
    Optional<Contact> findById (Long id);
}
