package com.recycleit.recycleitbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FacilitySubtype {
    private Long id;
    private String shortName;

    private String guidanceHtml;

    public Long getId() {
        return id;
    }

    public String getShortName() {
        return shortName;
    }

    public String getGuidanceHtml() {
        return guidanceHtml;
    }

    public void setGuidanceHtml(String guidanceHtml) {
        this.guidanceHtml = guidanceHtml;
    }
}
