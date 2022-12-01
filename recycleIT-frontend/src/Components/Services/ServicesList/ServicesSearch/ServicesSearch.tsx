import { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { 
    Button, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem,
    SelectChangeEvent, 
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import { 
    STATE_CODES, 
    SERVICES_TYPES 
} from '../../../../util/data-list-mock';
import { UserLocation } from '../../index';
import AlertMessageBox from '../../../helpers/AlertMessageBox';
import { 
    IServicesSearchProps, 
    LocationType 
} from '../../../interfaces/Interfaces';
import { renderMenuItems } from '../../../../util/renderMenuItems';

const ServicesSearch = (props: IServicesSearchProps) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
    const [location, setLocation] = useState('');
    const [facilityType, setFacilityType] = useState('');
    const [serviceTypes, setServiceTypes] = useState([{id: 0, name: ''}]);
    
    const userLocation = useContext(UserLocation) as LocationType;

    useEffect(() => {
        //server request to get all available services types
        setTimeout(() => {
            setServiceTypes(SERVICES_TYPES);
        }, 700);
    }, [])

    const handleLocationChange = (event: SelectChangeEvent) => {
        if (error) {
            setError(false)
        }
        if (isCheckboxSelected) {
            setIsCheckboxSelected(false)
        }
        setLocation(event.target.value);
    };

    const handleFacilityTypeChange = (event: SelectChangeEvent) => {
        setFacilityType(event.target.value);
    };

    const states = renderMenuItems(STATE_CODES);
    const services = renderMenuItems(serviceTypes);

    const toggleCheckbox = () => {
        if (!isCheckboxSelected) {
            selectCurrentLocation()
        } else {
            setLocation('')
        }
        setIsCheckboxSelected(prev => !prev)
        setError(false)
    }

    const requestFacilities = () => {
        props.fetchServices(location, facilityType)
    }

    const selectCurrentLocation = () => {  
        console.log('location request');
        const API_KEY = process.env.REACT_APP_API_KEY,
            API_HOST = process.env.REACT_APP_API_HOST,
            API_URL = 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi' 

        const options = {
            method: 'GET',
            url: API_URL,
            params: {lat: userLocation.lat, lng: userLocation.lng},
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST
            }
        };

        setLoading(true);
        axios.request(options).then((response) => {
            const reg = response.data.Results[0].region;
            // find region code according to location
            const stateCode = STATE_CODES
                .find(state => state.id.toUpperCase() === reg.toUpperCase());
            
            if (stateCode) {
                setLocation(stateCode.id);
            } else {
                // show alert if location does not satisfy us
                setError(true)
            }
            setLoading(false)
        }).catch((error) => {
            console.log(error);
            
            setError(true)
            setLoading(false)
        });
    }
    
    const errorComponent = error && <AlertMessageBox error={true} text="Your location does not work"/>
    const loader = loading && <AlertMessageBox loading={true} text="Loading your location"/>

    return (
        <div className="services-search">
            <FormControl variant="standard" sx={{minWidth: '100%' }}>
                <InputLabel id="demo-simple-select-standard-label">Select location</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    value={location}
                    onChange={handleLocationChange}
                    label="Location"
                    style={{maxWidth: '320px'}}
                >
                        <MenuItem value="">
                            <em>All country</em>
                        </MenuItem>
                        { states }
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{minWidth: '100%' }}>
                <InputLabel id="demo-simple-select-standard-label">Select facility type</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    value={facilityType}
                    onChange={handleFacilityTypeChange}
                    label="Location"
                >
                    <MenuItem value="">
                        <em>Any type</em>
                    </MenuItem>
                    { services }
                </Select>
            </FormControl>

            <FormControlLabel 
                control={
                    <Checkbox
                        inputProps={{ 'aria-label': 'controlled' }}
                        color='success'
                        onChange={toggleCheckbox}
                        checked={isCheckboxSelected}
                    />} 
                label="Use my current location" 
            />
            
            { errorComponent }
            { loader }

            <Button 
                variant="contained" 
                style={{width: '100%', backgroundColor: "#82B23F"}}
                onClick={requestFacilities}
            >
                Find
            </Button>
        </div>
    )
}

export default ServicesSearch