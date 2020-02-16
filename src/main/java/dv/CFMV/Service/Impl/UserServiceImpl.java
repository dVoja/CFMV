package dv.CFMV.Service.Impl;

import dv.CFMV.Repository.ContactRepository;
import dv.CFMV.Repository.UserRepository;
import dv.CFMV.Service.ContactService;
import dv.CFMV.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void deleteById(Long id) {

        this.userRepository.deleteById(id);
    }
}
