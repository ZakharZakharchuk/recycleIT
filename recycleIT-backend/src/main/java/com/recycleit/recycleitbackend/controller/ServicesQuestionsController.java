package com.recycleit.recycleitbackend.controller;

import com.recycleit.recycleitbackend.dto.QuestionRequestDto;
import com.recycleit.recycleitbackend.service.ServiceQuestionService;
import lombok.AllArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/services_questions")
@AllArgsConstructor
public class ServicesQuestionsController {

    private final ServiceQuestionService questionService;

    @PostMapping("/send")
    public void sendQuestion(@Validated @RequestBody QuestionRequestDto sendRequestDto) {
        questionService.sendQuestion(sendRequestDto);
    }
}
