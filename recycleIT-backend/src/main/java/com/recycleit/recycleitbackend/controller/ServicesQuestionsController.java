package com.recycleit.recycleitbackend.controller;

import com.recycleit.recycleitbackend.entity.ServicesQuestion;
import com.recycleit.recycleitbackend.service.ServicesQuestionsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/services_questions")
public class ServicesQuestionsController {

    private final ServicesQuestionsService servicesQuestionsService;

    public ServicesQuestionsController(ServicesQuestionsService servicesQuestionsService) {
        this.servicesQuestionsService = servicesQuestionsService;
    }

    @GetMapping("/{id}")
    public ServicesQuestion findById(Long id){
        return servicesQuestionsService.getQuestion(id);
    }

    @GetMapping
    public List<ServicesQuestion> getAll(){
        return servicesQuestionsService.getAllQuestions();
    }

    @PostMapping("/post")
    public void postQuestion(Long id, String userMail, String question){
        servicesQuestionsService.postQuestion(id, userMail, question);
    }
}
