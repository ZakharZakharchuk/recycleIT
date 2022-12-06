package com.recycleit.recycleitbackend.controller;

import com.recycleit.recycleitbackend.dto.SupportQuestionDto;
import com.recycleit.recycleitbackend.entity.SupportQuestion;
import com.recycleit.recycleitbackend.service.SupportQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/support-questions")
@RequiredArgsConstructor
public class SupportQuestionController {

    private final SupportQuestionService supportQuestionService;

    @GetMapping
    Page<SupportQuestion> findAll(@RequestParam("pageSize") int pageSize, @RequestParam("pageNumber") int pageNumber){
        return supportQuestionService.findAll(PageRequest.of(pageNumber, pageSize));
    }

    @GetMapping("/{id}")
    SupportQuestion findById(@PathVariable("id") Long id){
        return supportQuestionService.findById(id);
    }

    @PostMapping
    SupportQuestion createSupportQuestion(@RequestBody SupportQuestionDto questionDto){
        return supportQuestionService.createQuestion(questionDto);
    }

    @PatchMapping("/give-answer")
    SupportQuestion giveAnswer(@RequestBody SupportQuestionDto supportQuestion){
        //todo send answer on mail
        return supportQuestionService.giveAnswer(supportQuestion.getId(), supportQuestion.getAnswer());
    }

    @PatchMapping("/show-on-page")
    SupportQuestion showOnPage(@RequestBody SupportQuestionDto supportQuestion){
        return supportQuestionService.markToShowOnPage(supportQuestion.getId());
    }
}
