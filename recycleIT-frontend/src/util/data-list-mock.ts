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
        id: 37,
        name: 'Household Hazardous Waste Collection',
        description: 'Facilities that collect household hazardous waste materials for recycling. Leftover household products that contain corrosive, toxic, ignitable, or reactive ingredients are considered to be household hazardous waste.'
    },
    {
        id: 36,
        name: 'Electronics Recyclers',
        description: 'Active, permitted facilities that process electronic materials for recycling. Items that may be accepted include but are not limited to: cell phones, televisions, computers, batteries, printers, scanners, telecom equipment, copiers, and gaming systems.'
    },
    {
        id: 34,
        name: 'Composting',
        description: 'Active, permitted facilities that process organic waste for composting. Materials that may be accepted include but are not limited to: yard waste, such as fallen leaves, grass clippings, weeds, and other plants, limbs or trunks of trees and other woody plants; pre- or post-consumer food waste, and manure.'
    },
    {
        id: 38,
        name: 'Metal Recyclers',
        description: 'Facilities that process metals for recycling e.g. aluminum, steel, copper, lead, zinc, and auto scrap.'
    }
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

export const STATE_CODES = [
    { id: 'AL', name: 'Alabama' },
    { id: 'AK', name: 'Alaska' },
    { id: 'AZ', name: 'Arizona' },
    { id: 'AR', name: 'Arkansas' },
    { id: 'CA', name: 'California' },
    { id: 'CO', name: 'Colorado' },
    { id: 'CT', name: 'Connecticut' },
    { id: 'DE', name: 'Delaware' },
    { id: 'DC', name: 'District Of Columbia' },
    { id: 'FL', name: 'Florida' },
    { id: 'GA', name: 'Georgia' },
    { id: 'GU', name: 'Guam' },
    { id: 'HI', name: 'Hawaii' },
    { id: 'ID', name: 'Idaho' },
    { id: 'IL', name: 'Illinois' },
    { id: 'IN', name: 'Indiana' },
    { id: 'IA', name: 'Iowa' },
    { id: 'KS', name: 'Kansas' },
    { id: 'KY', name: 'Kentucky' },
    { id: 'LA', name: 'Louisiana' },
    { id: 'ME', name: 'Maine' },
    { id: 'MH', name: 'Marshall Islands' },
    { id: 'MD', name: 'Maryland' },
    { id: 'MA', name: 'Massachusetts' },
    { id: 'MI', name: 'Michigan' },
    { id: 'MN', name: 'Minnesota' },
    { id: 'MS', name: 'Mississippi' },
    { id: 'MO', name: 'Missouri' },
    { id: 'MT', name: 'Montana' },
    { id: 'NE', name: 'Nebraska' },
    { id: 'NV', name: 'Nevada' },
    { id: 'NH', name: 'New Hampshire' },
    { id: 'NJ', name: 'New Jersey' },
    { id: 'NM', name: 'New Mexico' },
    { id: 'NY', name: 'New York' },
    { id: 'NC', name: 'North Carolina' },
    { id: 'ND', name: 'North Dakota' },
    { id: 'OH', name: 'Ohio' },
    { id: 'OK', name: 'Oklahoma' },
    { id: 'OR', name: 'Oregon' },
    { id: 'PW', name: 'Palau' },
    { id: 'PA', name: 'Pennsylvania' },
    { id: 'PR', name: 'Puerto Rico' },
    { id: 'RI', name: 'Rhode Island' },
    { id: 'SC', name: 'South Carolina' },
    { id: 'SD', name: 'South Dakota' },
    { id: 'TN', name: 'Tennessee' },
    { id: 'TX', name: 'Texas' },
    { id: 'UT', name: 'Utah' },
    { id: 'VT', name: 'Vermont' },
    { id: 'VI', name: 'Virgin Islands' },
    { id: 'VA', name: 'Virginia' },
    { id: 'WA', name: 'Washington' },
    { id: 'WV', name: 'West Virginia' },
    { id: 'WI', name: 'Wisconsin' },
    { id: 'WY', name: 'Wyoming' }
]
