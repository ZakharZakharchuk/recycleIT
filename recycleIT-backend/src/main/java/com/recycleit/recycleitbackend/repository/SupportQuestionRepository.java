package com.recycleit.recycleitbackend.repository;

import com.recycleit.recycleitbackend.entity.SupportQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface SupportQuestionRepository extends JpaRepository<SupportQuestion, Long> {
    @Modifying
    @Query(value = "update SupportQuestion s set s.answer = :answer where s.id = :id ")
    void giveAnswer(Long id, String answer);

    @Modifying
    @Query(value = "update SupportQuestion s set s.showOnPage = true where s.id = :id ")
    void showOnPage(Long id);
}
