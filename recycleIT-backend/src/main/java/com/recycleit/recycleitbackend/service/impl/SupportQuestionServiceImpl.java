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
        supportQuestionRepository.save(supportQuestionDto.mapToSupportQuestion());
        return null;
    }

    @Override
    public void deleteById(Long id) {
        supportQuestionRepository.deleteById(id);
    }

    @Override
    public SupportQuestion giveAnswer(Long id, String answer) {
        supportQuestionRepository.giveAnswer(id, answer);
        return null;
    }

    @Override
    public SupportQuestion markToShowOnPage(Long id) {
        supportQuestionRepository.showOnPage(id);
        return null;
    }
}
