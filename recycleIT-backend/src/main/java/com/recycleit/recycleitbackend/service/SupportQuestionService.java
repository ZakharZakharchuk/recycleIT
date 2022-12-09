package com.recycleit.recycleitbackend.service;

import com.recycleit.recycleitbackend.dto.QuestionRequestDto;

public interface SupportQuestionService {
    void sendQuestion(QuestionRequestDto questionRequestDto);
}
