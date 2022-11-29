package com.recycleit.recycleitbackend.service;

import com.recycleit.recycleitbackend.entity.ServicesQuestion;

import java.util.List;

public interface ServicesQuestionsService {
    ServicesQuestion getQuestion(Long id);
    List<ServicesQuestion> getAllQuestions();
    boolean postQuestion(Long id, String userMail, String question);
}
