package com.recycleit.recycleitbackend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.validation.constraints.Email;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class QuestionRequestDto {
    private Long serviceId;
    @Email
    private String email;
    private String question;
}
