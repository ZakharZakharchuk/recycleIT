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

export const FAQ = [
    {
        id: '123',
        question: 'Where is the service available?',
        answer: 'For now, our application is available for USA residents. You can select your current location or choose one from the available ones in the list. If you do not specify the location, the services will be searched for all the country.'
    },
    {
        id: '456',
        question: 'What locations can I search for?',
        answer: 'You can search for different eco facilities by the type of waste they accept. To view the examples of waste disposal facilities visit main page.'
    },
    {
        id: '789',
        question: 'What eco services are available?',
        answer: 'We have a range of eco services that accept different types of waste, like food waste, electronics, batteries, plastic and even toxic waste. To find out about the types of services visit the main page.'
    },
    {
        id: '910',
        question: 'What do I do if I have question about the eco service?',
        answer: 'You can ask your question in the form which is available for each services on our Services Page. Just type your question and you will receive the answer on your email.'
    },
    {
        id: '101',
        question: 'How do I receive answer to my question?',
        answer: 'If you are authorized, just leave your question in a question form. If you are new here, leave your email address and our support team will send you the answer to your inbox.'
    },
]


export const FACILITIES_TYPES = [
    {
        id: 1,
        title: 'Composting',
        description: 'Active, permitted facilities that process organic waste for composting. Materials that may be accepted include but are not limited to: yard waste, such as fallen leaves, grass clippings, weeds, and other plants, limbs or trunks of trees and other woody plants; pre- or post-consumer food waste, and manure.'
    },
    {
        id: 2,
        title: 'Electronics Recyclers',
        description: 'Active, permitted facilities that process electronic materials for recycling. Items that may be accepted include but are not limited to: cell phones, televisions, computers, batteries, printers, scanners, telecom equipment, copiers, and gaming systems.'
    },
    {
        id: 3,
        title: 'Household Hazardous Waste Collection',
        description: 'Facilities that collect household hazardous waste materials for recycling. Leftover household products that contain corrosive, toxic, ignitable, or reactive ingredients are considered to be household hazardous waste.'
    },
    {
        id: 4,
        title: 'Metal Recyclers',
        description: 'Facilities that process metals for recycling e.g. aluminum, steel, copper, lead, zinc, and auto scrap.'
    },
];

export const WASTE_CATEGORIES = [
    {
        title:'PLASTIC',
        id: 'plastic',
        value: '1'
    },
    {
        title:'PAPER',
        id: 'paper',
        value: '2'
    },
    {
        title:'GLASS',
        id: 'glass',
        value: '3'
    },
    {
        title:'METAL',
        id: 'metal',
        value: '4'
    },
    {
        title:'ELECTRONIC',
        id: 'electronic',
        value: '5'
    }
];

export const PASSWORD_REGEXPR = /^(?=.*[0-9])(?=.*[!@#$%^&_*])[a-zA-Z0-9!@#$%^&_*]{8,14}$/
export const EMAIL_REGEXPR = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
export const MAX_MESSAGE_LENGTH = 500
export const MAX_SERVICE_MESSAGE_LENGTH = 250
export const COMPANY_EMAIL = 'recycleithacathon@gmail.com'