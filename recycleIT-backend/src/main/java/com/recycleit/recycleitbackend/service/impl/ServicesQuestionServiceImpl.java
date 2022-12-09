package com.recycleit.recycleitbackend.service.impl;

import com.recycleit.recycleitbackend.dto.QuestionRequestDto;
import com.recycleit.recycleitbackend.service.EmailService;
import com.recycleit.recycleitbackend.service.ServiceQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ServicesQuestionServiceImpl implements ServiceQuestionService {

    private final EmailService emailService;

    @Override
    public void sendQuestion(QuestionRequestDto questionRequestDto) {
        emailService.sendSimpleMessage("Service question", questionRequestDto.getEmail(),
            questionRequestDto.getQuestion());
    }
}
