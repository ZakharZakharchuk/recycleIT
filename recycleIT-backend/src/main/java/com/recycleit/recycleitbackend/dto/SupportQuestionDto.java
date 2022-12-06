package com.recycleit.recycleitbackend.dto;

import com.recycleit.recycleitbackend.entity.SupportQuestion;
import com.recycleit.recycleitbackend.entity.User;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SupportQuestionDto {
    private Long id;
    private User author;
    private String message;
    private String answer;
    private Boolean showOnPage;

    public SupportQuestion mapToSupportQuestion(){
        return SupportQuestion.builder()
                .id(id)
                .author(author)
                .message(message)
                .answer(answer)
                .showOnPage(showOnPage)
                .build();
    }
}
