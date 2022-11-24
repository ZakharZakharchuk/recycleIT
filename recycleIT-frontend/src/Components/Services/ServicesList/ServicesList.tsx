import React, { useState } from 'react'
import './ServicesList.css'
import { 
    Drawer,
    ListSubheader, 
    Box, 
    CircularProgress
} from '@mui/material'
import ServicesCard from './ServicesCard/ServicesCard'
import ServicesSearch from './ServicesSearch/ServicesSearch'
import { SERVICES } from '../../../util/data-list-mock'

const ServicesList = () => {
    const [servicesList, setServicesList] = React.useState([{
        id: 0,
        name: '',
        streetAddress: '',
        city: '',
        latitude: 0,
        longitude: 0,
        contactPhone: '',
        facilitySubtypes: '',
        raiting: 0,
        delivery: false,
    }])
    const [loading, setLoading] = useState(false);

    const fetchServices = (location: string, serviceType: string, id?: number) => {
        console.log(location, serviceType, id);
        setLoading(true);
        // server request to get all required services
        setTimeout(() => {
            setServicesList(SERVICES);
            setLoading(false)
        }, 1000);
    }

    const servicesItems = servicesList.map((item) => {
        if (item.name) {
            return <ServicesCard key={item.id} item={item}></ServicesCard>
        }
    })    

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={true}
        >
            <div className="services-list">
                <ListSubheader component="div" style={{fontWeight: '600', position: "relative"}}>Services</ListSubheader>
                <ServicesSearch 
                    fetchServices={fetchServices}
                    ></ServicesSearch>
                <div className="cards-container">
                    { loading ? <CircularProgress color="success"/> : servicesItems }
                </div>
            </div>
        </Drawer>
    )
}

export default ServicesList
