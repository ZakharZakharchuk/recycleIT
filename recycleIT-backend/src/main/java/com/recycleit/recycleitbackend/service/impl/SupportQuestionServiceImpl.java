package com.recycleit.recycleitbackend.service.impl;

import com.recycleit.recycleitbackend.dto.QuestionRequestDto;
import com.recycleit.recycleitbackend.service.EmailService;
import com.recycleit.recycleitbackend.service.SupportQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SupportQuestionServiceImpl implements SupportQuestionService {

    private final EmailService emailService;

    @Override
    public void sendQuestion(QuestionRequestDto questionRequestDto) {
        emailService.sendSimpleMessage("FAQ question", questionRequestDto.getEmail(),
            questionRequestDto.getQuestion());
    }
}
