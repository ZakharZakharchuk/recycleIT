package com.recycleit.recycleitbackend.service.impl;

import com.recycleit.recycleitbackend.dto.RatingDto;
import com.recycleit.recycleitbackend.entity.Rating;
import com.recycleit.recycleitbackend.repository.RatingRepository;
import com.recycleit.recycleitbackend.service.RatingService;
import java.util.Optional;
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
        Optional<Rating> currentRating = Optional.ofNullable(
            ratingRepository.getByFacilityIdAndUserId(rating.getFacilityId(),
                rating.getUserId()));
        if (currentRating.isPresent()) {
            rating.setId(currentRating.get().getId());
            ratingRepository.save(rating.mapToRating());
        } else {
            ratingRepository.save(rating.mapToRating());
        }
    }

    @Override
    public BigDecimal getFacilityRating(Long serviceId) {
        BigDecimal rating = ratingRepository.getAvgMarkByFacilityId(serviceId);
        return rating != null ? rating : BigDecimal.ZERO;
    }
}
