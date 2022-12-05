package com.recycleit.recycleitbackend.controller;

import com.recycleit.recycleitbackend.entity.ServicesQuestion;
import com.recycleit.recycleitbackend.service.impl.ServicesQuestionsServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/services_questions")
@AllArgsConstructor
public class ServicesQuestionsController {

    private final ServicesQuestionsServiceImpl servicesQuestionsServiceImpl;

    @GetMapping("/{id}")
    public ServicesQuestion findById(Long id){
        return servicesQuestionsServiceImpl.getQuestion(id);
    }

    @GetMapping
    public List<ServicesQuestion> getAll(){
        return servicesQuestionsServiceImpl.getAllQuestions();
    }

    @PostMapping
    public void postQuestion(Long id, String userMail, String question){
        servicesQuestionsServiceImpl.postQuestion(id, userMail, question);
    }
}
