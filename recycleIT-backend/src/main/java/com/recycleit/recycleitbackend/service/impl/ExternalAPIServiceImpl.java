package com.recycleit.recycleitbackend.service.impl;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.recycleit.recycleitbackend.entity.Facility;
import com.recycleit.recycleitbackend.entity.FacilityRequest;
import com.recycleit.recycleitbackend.entity.FacilitySubtype;

import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import com.recycleit.recycleitbackend.service.ExternalAPIService;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ExternalAPIServiceImpl implements ExternalAPIService {

    private static final String SUBTYPES_REQUEST_URL = "https://iwaste.epa.gov/api/disposal-facility-subtypes";
    private final static List<Long> SUBTYPES_ID = Arrays.asList(1L, 4L, 6L, 11L, 34L, 36L, 37L, 38L,
        39L, 40L);
    private static final String FACILITIES_REQUEST_URL =
        "https://iwaste.epa.gov/api/facilities?facilityTypeId=%s&stateCode=%s&epaRegion=";
    private static final String FACILITIES_ARRAY_NAME = "data";
    private final RestTemplate restTemplate = new RestTemplate();

    @Override
    public List<FacilitySubtype> getSubtypes() {
        FacilitySubtype[] objects = restTemplate
            .getForEntity(SUBTYPES_REQUEST_URL, FacilitySubtype[].class)
            .getBody();
        return Arrays.stream(objects)
            .filter(subtype -> SUBTYPES_ID.contains(subtype.getId()))
            .collect(Collectors.toList());
    }

    @Override
    public List<Facility> getFacilities(FacilityRequest facilityRequest)
        throws JsonProcessingException {
        String url = String.format(FACILITIES_REQUEST_URL, facilityRequest.getFacilityTypeId(),
            facilityRequest.getStateCode());

        ResponseEntity<Object> response = restTemplate.getForEntity(url,
            Object.class);
        String json = new Gson().toJson(response.getBody());
        JSONObject jsonObject = new JSONObject(json);
        JSONArray data = jsonObject.getJSONArray(FACILITIES_ARRAY_NAME);

        ObjectMapper mapper = new ObjectMapper();
        Facility[] facilities = mapper.readValue(data.toString(), Facility[].class);
        Random random = new Random();
        List<Facility> facilityList = Arrays.stream(facilities)
            .collect(Collectors.toList());
        facilityList.forEach(facility -> facility.setDelivery(random.nextBoolean()));
        return facilityList;
    }
}
