package com.recycleit.recycleitbackend.service;

import com.recycleit.recycleitbackend.entity.User;
import com.recycleit.recycleitbackend.exception.UserAlreadyExistException;

public interface UserService {
    User findByUsername(String username);
    User register(User user) throws UserAlreadyExistException;

}
