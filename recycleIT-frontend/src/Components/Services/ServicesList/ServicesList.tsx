import React, { useState, useEffect } from 'react'
import './ServicesList.css'
import { 
    Drawer,
    ListSubheader,  
    CircularProgress,
    IconButton
} from '@mui/material'
import ServicesCard from './ServicesCard/ServicesCard'
import ServicesSearch from './ServicesSearch/ServicesSearch'
import { SERVICES, SERVICES_TYPES } from '../../../util/data-list-mock'
import AlertMessageBox from '../../helpers/AlertMessageBox'
import { IServiceListProps } from '../../interfaces/Interfaces';
import CloseIcon from '@mui/icons-material/Close';
import FacilitiesService from '../../../Services/apiService'

const ServicesList = (props: IServiceListProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [serviceTypes, setServiceTypes] = useState<{id: number, shortName: string}[]>([]);

    const facilitiesService = new FacilitiesService();

    const fetchServices = (location: string, serviceType: string) => {
        console.log(location, serviceType);
        
        setLoading(true);
        if (error) {
            setError(false)
        }

        // facilitiesService.getServicesTypes()
        //     .then(data => {
        //         console.log(data);
        //         setServiceTypes(data);
        //     })
        //     .catch(error => {
        //         setError(true);
        //         console.log(error);
        //     })
        // server request to get all required services

        //imitate server request
        setTimeout(() => {
            props.setServicesList(SERVICES)
            setLoading(false)
            setError(false)
        }, 1000);
    }

    const getItemLocation = (id: number, lat: number, lng: number) => {
        props.setItemLocation(id, lat, lng);
    }

    let servicesItems = null;

    if (props.servicesList) {
        servicesItems = props.servicesList.map((item) => {
            if (item.name) {
                return <ServicesCard 
                            key={item.id} 
                            item={item}
                            getItemLocation={getItemLocation}
                        />
            }
        }) 
    }  
    
    const errorAlert = error 
            && <AlertMessageBox error={true} text={errorMessage}/>

    const sideBarClass = props.isDrawerOpened ? "side_bar opened" : "side_bar"

    return (
        <div className={sideBarClass}>
            <ListSubheader component="div" 
                className="list-subheader"
            >
                    Services
                    <IconButton 
                        style={{display: !props.isMobileDevice ? 'block' : 'none'}}
                        onClick={props.toggleDrawerOpened}
                    >
                        <CloseIcon style={{color: 'grey', display: 'block'}}/>
                    </IconButton>
            </ListSubheader>
            <div className="services-list">
                <ServicesSearch fetchServices={fetchServices} />
                <div className="cards-container">
                    { 
                        loading ? 
                            <CircularProgress 
                                color="success"
                                style={{display: 'block', margin: '0 auto'}}
                            /> : servicesItems 
                    }
                    
                    {errorAlert}
                </div>
            </div>
        </div>
    )
}

export default ServicesList
