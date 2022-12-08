package com.recycleit.recycleitbackend.service;

import com.recycleit.recycleitbackend.dto.QuestionRequestDto;

public interface ServiceQuestionService {
    void sendQuestion(QuestionRequestDto questionRequestDto);
}
