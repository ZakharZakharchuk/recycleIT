package com.recycleit.recycleitbackend.service;

import com.recycleit.recycleitbackend.entity.ServicesQuestion;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServicesQuestionsService {

    public ServicesQuestion getQuestion(Long id){
        //todo database query
        return new ServicesQuestion();
    }

    public List<ServicesQuestion> getAllQuestions(){
        //todo database query
        return new ArrayList<>();
    }

    public boolean postQuestion(Long id, String userMail, String questionText){
        ServicesQuestion servicesQuestion = new ServicesQuestion();

        servicesQuestion.setId(id);
        servicesQuestion.setUserMail(userMail);
        servicesQuestion.setQuestion(questionText);

        //todo database query

        return true;
    }
}
