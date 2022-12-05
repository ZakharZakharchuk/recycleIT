package com.recycleit.recycleitbackend.controller;

import com.recycleit.recycleitbackend.dto.AuthenticationRequestDto;
import com.recycleit.recycleitbackend.dto.UserDto;
import com.recycleit.recycleitbackend.entity.User;
import com.recycleit.recycleitbackend.exception.UserAlreadyExistException;
import com.recycleit.recycleitbackend.security.jwt.JwtTokenProvider;
import com.recycleit.recycleitbackend.service.UserService;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final AuthenticationManager authenticationManager;

    private final JwtTokenProvider jwtTokenProvider;

    private final UserService userService;

    @Autowired
    public UserController(AuthenticationManager authenticationManager,
        JwtTokenProvider jwtTokenProvider, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AuthenticationRequestDto requestDto) {
        try {
            String username = requestDto.getUsername();
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, requestDto.getPassword()));
            User user = userService.findByUsername(username);

            if (user == null) {
                throw new UsernameNotFoundException(
                    "User with username: " + username + " not found");
            }

            String token = jwtTokenProvider.createToken(username, user.getRoles());

            Map<Object, Object> response = new HashMap<>();
            response.put("username", username);
            response.put("token", token);

            return ResponseEntity.ok(response);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username or password");
        }
    }
    @PostMapping("/register")
    public ResponseEntity login(@RequestBody UserDto userDto) {
        try {
            userService.register(userDto.mapToUser());

            String username = userDto.getUsername();
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, userDto.getPassword()));
            User user = userService.findByUsername(username);

/*            if (user == null) {
                throw new UsernameNotFoundException(
                    "User with username: " + username + " not found");
            }*/

            String token = jwtTokenProvider.createToken(username, user.getRoles());

            Map<Object, Object> response = new HashMap<>();
            response.put("username", username);
            response.put("token", token);

            return ResponseEntity.ok(response);
        } catch (UserAlreadyExistException e) {
            throw new BadCredentialsException("User already exist");
        }
    }
}
