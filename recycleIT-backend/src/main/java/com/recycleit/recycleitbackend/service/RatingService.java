package com.recycleit.recycleitbackend.service;

import com.recycleit.recycleitbackend.dto.RatingDto;

import java.math.BigDecimal;

public interface RatingService {
    void setRating(RatingDto rating);
    void changeRating(Long serviceId,Long userId, BigDecimal mark);
    BigDecimal getFacilityRating(Long serviceId);
}
