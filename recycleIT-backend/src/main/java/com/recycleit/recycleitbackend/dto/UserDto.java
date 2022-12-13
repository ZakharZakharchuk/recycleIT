package com.recycleit.recycleitbackend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.recycleit.recycleitbackend.entity.User;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDto {
    private Long id;

    @Pattern(regexp = "^[a-zA-Z0-9_]{3,15}$")
    private String username;

    @Email
    private String email;
    private String password;

    public User mapToUser() {
        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(password);
        return user;
    }
}
