package com.recycleit.recycleitbackend.service;

import com.recycleit.recycleitbackend.dto.SupportQuestionDto;
import com.recycleit.recycleitbackend.entity.SupportQuestion;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SupportQuestionService {
    Page<SupportQuestion> findAll(Pageable pageable);
    SupportQuestion findById(Long id);
    SupportQuestion createQuestion(SupportQuestionDto supportQuestionDto);
    void deleteById(Long id);
    void giveAnswer(Long id, String answer);
    void markToShowOnPage(Long id);
}
