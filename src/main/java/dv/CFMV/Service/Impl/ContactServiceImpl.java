package dv.CFMV.Service.Impl;

import dv.CFMV.Repository.ContactRepository;
import dv.CFMV.Service.ContactService;
import dv.CFMV.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactServiceImpl  implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public Contact save(Contact newContact) {

        return  this.contactRepository.save(newContact);
    }
    @Override
    public void deleteById(Long id) {

        this.contactRepository.deleteById(id);
    }

    @Override
    public Contact findById(Long id){
       return this.contactRepository.findById(id).orElse(null);
    }

    @Override
    public List<Contact> findAll() {
        return this.contactRepository.findAll();
    }
}
