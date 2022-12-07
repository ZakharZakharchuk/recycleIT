package com.recycleit.recycleitbackend.service;

import com.recycleit.recycleitbackend.entity.Facility;
import com.recycleit.recycleitbackend.entity.FacilityRequest;
import com.recycleit.recycleitbackend.entity.FacilitySubtype;

import java.io.IOException;
import java.util.List;

public interface FacilitiesService {
    List<FacilitySubtype> getSubtypes();
    List<Facility> getAll(FacilityRequest facilityRequest) throws IOException;
}
