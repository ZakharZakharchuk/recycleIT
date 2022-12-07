package com.recycleit.recycleitbackend.service.impl;

import com.recycleit.recycleitbackend.entity.Facility;
import com.recycleit.recycleitbackend.entity.FacilityRequest;
import com.recycleit.recycleitbackend.entity.FacilitySubtype;
import com.recycleit.recycleitbackend.service.ExternalAPIService;
import com.recycleit.recycleitbackend.service.FacilitiesService;
import com.recycleit.recycleitbackend.service.RatingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FacilitiesServiceImpl implements FacilitiesService {

    private final ExternalAPIService externalAPIService;
    private final RatingService ratingService;

    @Override
    public List<FacilitySubtype> getSubtypes() {
        return externalAPIService.getSubtypes();
    }

    @Override
    public List<Facility> getAll(FacilityRequest facilityRequest) throws IOException {
        List<Facility> facilities = externalAPIService.getFacilities(facilityRequest);
        facilities.forEach(facility -> facility.setRating(ratingService.getFacilityRating(facility.getId())));
        return facilities;
    }
}
