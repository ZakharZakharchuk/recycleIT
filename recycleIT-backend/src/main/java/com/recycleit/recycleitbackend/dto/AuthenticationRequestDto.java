package com.recycleit.recycleitbackend.dto;

import javax.validation.constraints.Email;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationRequestDto {

    @Email
    private String email;

    private String password;
}
