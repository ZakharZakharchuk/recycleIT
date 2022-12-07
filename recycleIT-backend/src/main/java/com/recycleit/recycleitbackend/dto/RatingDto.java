package com.recycleit.recycleitbackend.dto;

import com.recycleit.recycleitbackend.entity.Rating;
import com.recycleit.recycleitbackend.entity.User;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RatingDto {
    private Long id;
    private User userId;
    private Long facilityId;
    private BigDecimal mark;

    public Rating mapToRating() {
        return Rating.builder()
                .id(id)
                .userId(userId)
                .facilityId(facilityId)
                .mark(mark)
                .build();
    }

}
