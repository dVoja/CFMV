package dv.CFMV.Repository;

import dv.CFMV.model.Contact;
import dv.CFMV.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User,Long> {
}
