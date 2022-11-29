package com.recycleit.recycleitbackend.service.impl;

import com.recycleit.recycleitbackend.entity.ServicesQuestion;
import com.recycleit.recycleitbackend.service.ServicesQuestionsService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServicesQuestionsServiceImpl implements ServicesQuestionsService {

    @Override
    public ServicesQuestion getQuestion(Long id){
        //todo database query
        return new ServicesQuestion();
    }

    @Override
    public List<ServicesQuestion> getAllQuestions(){
        //todo database query
        return new ArrayList<>();
    }

    @Override
    public boolean postQuestion(Long id, String userMail, String questionText){
        ServicesQuestion servicesQuestion = new ServicesQuestion();

        servicesQuestion.setId(id);
        servicesQuestion.setUserMail(userMail);
        servicesQuestion.setQuestion(questionText);

        //todo database query

        return true;
    }
}
