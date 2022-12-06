package com.recycleit.recycleitbackend.controller;

import com.recycleit.recycleitbackend.dto.SendRequestDto;
import com.recycleit.recycleitbackend.service.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/services_questions")
@AllArgsConstructor
public class ServicesQuestionsController {

    private final EmailService emailService;

    @PostMapping("/send")
    public void postQuestion(@RequestBody SendRequestDto sendRequestDto){
/*        servicesQuestionsServiceImpl.postQuestion(id, userMail, question);*/
        emailService.sendSimpleMessage(sendRequestDto.getEmail(), sendRequestDto.getQuestion());
    }
}
