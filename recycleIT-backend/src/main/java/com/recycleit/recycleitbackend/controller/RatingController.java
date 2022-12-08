package com.recycleit.recycleitbackend.controller;

import com.recycleit.recycleitbackend.dto.RatingDto;
import com.recycleit.recycleitbackend.dto.RatingRequestDto;
import com.recycleit.recycleitbackend.entity.User;
import com.recycleit.recycleitbackend.service.RatingService;
import com.recycleit.recycleitbackend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/ratings")
@AllArgsConstructor
public class RatingController {

    private final RatingService ratingService;
    private final UserService userService;

    @PostMapping("/set-rating")
    void setRating(@RequestBody RatingRequestDto ratingRequestDto) {
        User userId = userService.findByUsername(
            SecurityContextHolder.getContext().getAuthentication().getName());

        RatingDto rating = RatingDto.builder()
            .userId(userId)
            .facilityId(ratingRequestDto.getServiceId())
            .mark(BigDecimal.valueOf(ratingRequestDto.getMark()))
            .build();
        ratingService.setRating(rating);
    }
}
