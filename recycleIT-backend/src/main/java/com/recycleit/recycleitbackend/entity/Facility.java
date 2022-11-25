package com.recycleit.recycleitbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Facility {
    private Long id;

    private String name;

    private String streetAddress;

    private String city;

    private String latitude;

    private String longtitude;

    private String contactPhone;

    private String facilitySubtypes;

    private Long rating;

    private boolean delivery;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public String getCity() {
        return city;
    }

    public String getLatitude() {
        return latitude;
    }

    public String getLongtitude() {
        return longtitude;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public String getFacilitySubtypes() {
        return facilitySubtypes;
    }

    public Long getRating() {
        return rating;
    }

    public boolean isDelivery() {
        return delivery;
    }
}
