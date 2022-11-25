package com.recycleit.recycleitbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FacilitySubtype {
    private Long id;
    private String shortName;

    public Long getId() {
        return id;
    }

    public String getShortName() {
        return shortName;
    }
}