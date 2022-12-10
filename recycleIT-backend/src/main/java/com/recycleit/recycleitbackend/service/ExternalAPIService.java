package com.recycleit.recycleitbackend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.recycleit.recycleitbackend.entity.Facility;
import com.recycleit.recycleitbackend.entity.FacilityRequest;
import com.recycleit.recycleitbackend.entity.FacilitySubtype;

import java.util.List;

public interface ExternalAPIService {
    List<FacilitySubtype> getSubtypes();
    List<Facility> getFacilities(FacilityRequest facilityRequest) throws JsonProcessingException;
}
