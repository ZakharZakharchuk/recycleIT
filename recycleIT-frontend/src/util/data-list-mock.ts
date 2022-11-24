export const SERVICES = [
    {
        "id": 1000,
        "name": "Fort Detrick",
        "streetAddress": "Incinerator Complex, Building 393",
        "city": "Fort Detrick",
        "latitude": 39.436234,
        "longitude": -77.420627,
        "contactPhone": "Not Available",
        "facilitySubtypes": "Medical/ Biohazardous Waste Incinerators",
        "raiting": 4,
        "delivery": true
    },
    {
        "id": 1001,
        "name": "Holy Spirit Hospital",
        "streetAddress": "503 N. 21st Street",
        "city": "Camp Hill",
        "latitude": 40.252518,
        "longitude": -76.9238,
        "contactPhone": "Not Available",
        "facilitySubtypes": "Medical/ Biohazardous Waste Incinerators",
        "raiting": 4,
        "delivery": true
    },
    {
        "id": 35893,
        "name": "AgRecycle Inc",
        "streetAddress": "335 N Braddock Ave",
        "city": "Pittsburgh",
        "county": null,
        "latitude": 40.44979796,
        "longitude": -79.89321119,
        "contactPhone": "412-242-7645",
        "facilitySubtypes": "Composting",
        "raiting": 4,
        "delivery": true
    },
]

export const SERVICES_TYPES = [
    {
        id: 4,
        name: 'Medical Waste Incinerators'
    },
    {
        id: 22,
        name: 'Radioactive Waste Disposal'
    },
    {
        id: 34,
        name: 'Composting'
    },
]

export const WASTE_TYPES = {
    plastic: {
        types: [
            {
                name: 'PET/PTE',
                info: 'Single-use bottles'
            },
            {
                name: 'HDPE',
                info: 'Packaging'
            },
            {
                name: 'PVC',
                info: 'Drain pipes or playground equipment'
            },
            {
                name: 'LDPE',
                info: 'Flexible plastic - tubes and bags'
            },
            {
                name: 'PP',
                info: 'Containers for hot liquids, bottle caps'
            },
            {
                name: 'PS',
                info: 'Disposable plates and cups, takeway containers'
            },
        ]
    },
    paper: {
        types: [
            {
                name: 'Household waste paper',
                info: 'Newspapers, printer paper, magazines, junk mail'
            },
            {
                name: 'Cardboard waste (OCC)',
                info: 'Brown corrugated cardboard'
            },
            {
                name: 'Confidencial papers',
                info: 'Sredded documents'
            }
        ]
    },
    glass: {
        types: [
            {
                name: 'Colored glass',
                info: 'Colored bottles'
            },
            {
                name: 'Colorless glass',
                info: 'Transparent bottles'
            }
        ]
    },
    metal: {
        types: [
            {
                name: 'Ferrous metals',
                info: 'Refrigerators, ovens, cars'
            },
            {
                name: 'Non-ferrous metals',
                info: 'Soda cans, wrap foils, lead pipes'
            }
        ]
    },

}

export const STATE_CODES = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}