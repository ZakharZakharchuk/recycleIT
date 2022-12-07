package com.recycleit.recycleitbackend.dto;

import com.recycleit.recycleitbackend.entity.Rating;
import com.recycleit.recycleitbackend.entity.User;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RatingDto {
    private Long id;
    private User userId;
    private Long facilityId;
    private Integer mark;

    public Rating mapToRating() {
        return Rating.builder()
                .id(id)
                .userId(userId)
                .facilityId(facilityId)
                .mark(mark)
                .build();
    }

}
