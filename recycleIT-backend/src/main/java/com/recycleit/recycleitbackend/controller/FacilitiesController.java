package com.recycleit.recycleitbackend.controller;

import com.recycleit.recycleitbackend.entity.FacilityRequest;
import com.recycleit.recycleitbackend.entity.FacilitySubtype;
import com.recycleit.recycleitbackend.service.ExternalAPIService;
import java.io.IOException;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/facilities")
@CrossOrigin
public class FacilitiesController {

    private final ExternalAPIService externalAPIService;

    public FacilitiesController(ExternalAPIService externalAPIService) {
        this.externalAPIService = externalAPIService;
    }

    @GetMapping("/subtypes")
    public List<FacilitySubtype> getSubtypes() {
        return externalAPIService.getSubtypes();
    }

    @PostMapping("/all")
    public Object getAll(@RequestBody FacilityRequest facilityRequest)
        throws IOException {
        return externalAPIService.getFacilities(facilityRequest);
    }
}
