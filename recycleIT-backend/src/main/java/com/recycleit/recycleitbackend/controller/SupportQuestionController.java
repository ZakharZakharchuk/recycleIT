package com.recycleit.recycleitbackend.controller;

import com.recycleit.recycleitbackend.dto.SupportQuestionDto;
import com.recycleit.recycleitbackend.entity.SupportQuestion;
import com.recycleit.recycleitbackend.service.SupportQuestionService;
import com.recycleit.recycleitbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/support-questions")
@RequiredArgsConstructor
public class SupportQuestionController {

    private final SupportQuestionService supportQuestionService;
    private final UserService userService;

    @GetMapping
    Page<SupportQuestion> findAll(@RequestParam("pageSize") int pageSize, @RequestParam("pageNumber") int pageNumber) {
        return supportQuestionService.findAll(PageRequest.of(pageNumber, pageSize));
    }

    @GetMapping("/{id}")
    SupportQuestion findById(@PathVariable("id") Long id) {
        return supportQuestionService.findById(id);
    }

    @PostMapping
    SupportQuestion createSupportQuestion(@RequestBody String mail, String message) {
        SupportQuestionDto questionDto = new SupportQuestionDto();
        questionDto.setMessage(message);
        if(mail!=null){
            questionDto.setAuthor(userService.findByEmail(mail));
        }
        return supportQuestionService.createQuestion(questionDto);
    }

    @PatchMapping("/give-answer")
    void giveAnswer(@RequestBody SupportQuestionDto supportQuestion) {
        supportQuestionService.giveAnswer(supportQuestion.getId(), supportQuestion.getAnswer());
    }

    @PatchMapping("/show-on-page")
    void showOnPage(@RequestBody SupportQuestionDto supportQuestion) {
        supportQuestionService.markToShowOnPage(supportQuestion.getId());
    }
}
