package com.recycleit.recycleitbackend.service.impl;

import com.recycleit.recycleitbackend.dto.RatingDto;
import com.recycleit.recycleitbackend.entity.Rating;
import com.recycleit.recycleitbackend.repository.RatingRepository;
import com.recycleit.recycleitbackend.service.RatingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingServiceImpl implements RatingService {

    private final RatingRepository ratingRepository;

    @Override
    public void setRating(RatingDto rating) {
        ratingRepository.save(rating.mapToRating());
    }

    @Override
    public void changeRating(Long serviceId, Long userId, int mark) {
        ratingRepository.changeRating(userId, serviceId, mark);
    }

    @Override
    public BigDecimal getFacilityRating(Long serviceId) {

        List<Rating> allMarks= ratingRepository.getRatingsByFacilityId(serviceId);
        double avgMarks = 0;

        for (Rating mark:allMarks) {
            avgMarks += mark.getMark().doubleValue();
        }

        avgMarks = avgMarks/allMarks.size();
        return BigDecimal.valueOf(avgMarks);
    }
}
