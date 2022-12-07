package com.recycleit.recycleitbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class Facility {
    private Long id;

    private String name;

    private String streetAddress;

    private String city;

    private String latitude;

    private String longitude;

    private String contactPhone;

    private String facilitySubtypes;

    private BigDecimal rating;

    private boolean delivery;

//    public Long getId() {
//        return id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public String getStreetAddress() {
//        return streetAddress;
//    }
//
//    public String getCity() {
//        return city;
//    }
//
//    public String getLatitude() {
//        return latitude;
//    }
//
//    public String getLongitude() {
//        return longitude;
//    }
//
//    public String getContactPhone() {
//        return contactPhone;
//    }
//
//    public String getFacilitySubtypes() {
//        return facilitySubtypes;
//    }
//
//    public BigDecimal getRating() {
//        return rating;
//    }
//
//    public boolean isDelivery() {
//        return delivery;
//    }
}
