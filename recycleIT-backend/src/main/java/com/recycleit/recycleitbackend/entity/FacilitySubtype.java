package com.recycleit.recycleitbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class FacilitySubtype {
    private Long id;
    private String shortName;
    private String guidanceHtml;
}
