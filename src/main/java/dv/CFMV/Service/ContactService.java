package dv.CFMV.Service;

import dv.CFMV.model.Contact;

import java.util.List;

public interface ContactService {
    Contact save(Contact newContact);
    void deleteById(Long id);
    Contact findById(Long id);
    List<Contact> findAll ();



}
