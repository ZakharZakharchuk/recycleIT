package com.recycleit.recycleitbackend.service.impl;

import com.recycleit.recycleitbackend.dto.SupportQuestionDto;
import com.recycleit.recycleitbackend.entity.SupportQuestion;
import com.recycleit.recycleitbackend.repository.SupportQuestionRepository;
import com.recycleit.recycleitbackend.service.SupportQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
@RequiredArgsConstructor
public class SupportQuestionServiceImpl implements SupportQuestionService {

    private final SupportQuestionRepository supportQuestionRepository;

    @Override
    public Page<SupportQuestion> findAll(Pageable pageable) {
        return supportQuestionRepository.findAll(pageable);
    }

    @Override
    public SupportQuestion findById(Long id) {
        return supportQuestionRepository.findById(id).
                orElseThrow(()-> new EntityNotFoundException("Question wit id: " + id + " not found"));
    }

    @Override
    public SupportQuestion createQuestion(SupportQuestionDto supportQuestionDto) {
        return supportQuestionRepository.save(supportQuestionDto.mapToSupportQuestion());
    }

    @Override
    public void deleteById(Long id) {
        supportQuestionRepository.deleteById(id);
    }

    @Override
    public void giveAnswer(Long id, String answer) {
        supportQuestionRepository.giveAnswer(id, answer);
    }

    @Override
    public void markToShowOnPage(Long id) {
        supportQuestionRepository.showOnPage(id);
    }
}
