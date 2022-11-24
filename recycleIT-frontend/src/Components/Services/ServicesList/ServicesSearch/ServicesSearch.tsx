import { useEffect, useState } from 'react'
import { 
    Button, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem,
    SelectChangeEvent, 
} from '@mui/material'
import { STATE_CODES, SERVICES_TYPES } from '../../../../util/data-list-mock'

interface IServicesSearchProps {
    fetchServices: (location: string, serviceType: string, id?: number) => void
}

const ServicesSearch = (props: IServicesSearchProps) => {

    const [location, setLocation] = useState('');
    const [facilityType, setFacilityType] = useState('');
    const [serviceTypes, setServiceTypes] = useState([{id: 0, name: ''}]);

    useEffect(() => {
        // server request to get all available services types
        setTimeout(() => {
            setServiceTypes(SERVICES_TYPES);
        }, 700);
    }, [])

    const handleLocationChange = (event: SelectChangeEvent) => {
        setLocation(event.target.value);
    };

        const handleFacilityTypeChange = (event: SelectChangeEvent) => {
        setFacilityType(event.target.value);
    };

    const states = Object.entries(STATE_CODES).map((code, i) => {
        return <MenuItem key={i} value={code[0]}>{code[1]}</MenuItem>
    })

    const services = serviceTypes.map((type, i) => {
        return <MenuItem key={i} value={type.name}>{type.name}</MenuItem>
    })

    return (
        <div className="services-search">
            <FormControl variant="standard" sx={{minWidth: '100%' }}>
                <InputLabel id="demo-simple-select-standard-label">Select your state</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    value={location}
                    onChange={handleLocationChange}
                    label="Location"
                    >
                        <MenuItem value="">
                            <em>None</em>
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
                            <em>None</em>
                        </MenuItem>
                        { services }
                </Select>
            </FormControl>

            <Button 
                variant="contained" 
                style={{width: '100%', backgroundColor: "#82B23F"}}
                onClick={() => props.fetchServices(location, facilityType)}
                >Find</Button>
        </div>
    )
}

export default ServicesSearch