package com.recycleit.recycleitbackend.service;

import com.recycleit.recycleitbackend.dto.RatingDto;

public interface RatingService {
    void setRating(RatingDto rating);
    void changeRating(Long serviceId,Long userId, int mark);
    Integer getServiceRating(Long serviceId);
}
