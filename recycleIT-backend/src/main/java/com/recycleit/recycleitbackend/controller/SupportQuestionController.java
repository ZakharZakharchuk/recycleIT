package com.recycleit.recycleitbackend.controller;

import com.recycleit.recycleitbackend.dto.QuestionRequestDto;
import com.recycleit.recycleitbackend.service.SupportQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/support-questions")
@RequiredArgsConstructor
public class SupportQuestionController {

    private final SupportQuestionService supportQuestionService;

    @PostMapping("/send")
    void sendQuestion(@Validated @RequestBody QuestionRequestDto questionRequestDto) {
        supportQuestionService.sendQuestion(questionRequestDto);
    }
}
