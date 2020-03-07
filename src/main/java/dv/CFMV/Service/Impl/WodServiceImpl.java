package dv.CFMV.Service.Impl;

import dv.CFMV.Repository.WodRepository;
import dv.CFMV.Service.WodService;
import dv.CFMV.model.Wod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WodServiceImpl implements WodService {

    @Autowired
    private WodRepository wodRepository;

    @Override
    public Wod save(Wod newWod) {

        return  this.wodRepository.save(newWod);
    }
    @Override
    public void deleteById(Long id) {

        this.wodRepository.deleteById(id);
    }

    @Override
    public Wod findById(Long id){
       return this.wodRepository.findById(id).orElse(null);
    }

    @Override
    public List<Wod> findAll() {
        return this.wodRepository.findAll();
    }

    @Override
    public Wod findByDate(String date ) {

        return this.wodRepository.findByDate(date).orElse(null);
    }
}
