package com.recycleit.recycleitbackend.service;

import com.recycleit.recycleitbackend.entity.Role;
import com.recycleit.recycleitbackend.entity.User;
import com.recycleit.recycleitbackend.exception.UserAlreadyExistException;
import com.recycleit.recycleitbackend.repository.RoleRepository;
import com.recycleit.recycleitbackend.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository,
        BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User register(User user) throws UserAlreadyExistException {
        Role roleUser = roleRepository.findByName("USER");
        User checkUser = userRepository.findByUsername(user.getUsername());
        if (checkUser == null) {
            List<Role> userRoles = new ArrayList<>();
            userRoles.add(roleUser);

            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRoles(userRoles);

            User registeredUser = userRepository.save(user);

            log.info("IN register - user: {} successfully registered", registeredUser);

            return registeredUser;
        } else {
            throw new UserAlreadyExistException(
                "User with username: " + user.getUsername() + " already exist");
        }
    }

    public User findByUsername(String username) {
        User result = userRepository.findByUsername(username);
        log.info("IN findByUsername - user: {} found by username: {}", result, username);
        return result;
    }
}
