package dv.CFMV.Service;

import dv.CFMV.model.Wod;

import java.util.List;

public interface WodService {
    Wod save(Wod newContact);
    void deleteById(Long id);
    Wod findById(Long id);
    List<Wod> findAll();
    Wod findByDate(String date);



}
