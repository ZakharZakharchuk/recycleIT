package com.recycleit.recycleitbackend.repository;

import com.recycleit.recycleitbackend.entity.User;
import javax.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);

    User findByEmail(String email);

    User save(User user);
}
