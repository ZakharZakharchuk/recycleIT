package com.recycleit.recycleitbackend.controller;

import com.recycleit.recycleitbackend.entity.FacilityRequest;
import com.recycleit.recycleitbackend.entity.FacilitySubtype;
import com.recycleit.recycleitbackend.service.ExternalAPIService;
import java.io.IOException;
import java.util.List;

import com.recycleit.recycleitbackend.service.FacilitiesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/facilities")
@CrossOrigin(origins = {"http://localhost:3000/"})
@RequiredArgsConstructor
public class FacilitiesController {

    private final FacilitiesService facilitiesService;

    @GetMapping("/subtypes")
    public List<FacilitySubtype> getSubtypes() {
        return facilitiesService.getSubtypes();
    }

    @PostMapping("/all")
    public Object getAll(@RequestBody FacilityRequest facilityRequest)
        throws IOException {
        return facilitiesService.getAll(facilityRequest);
    }
}
