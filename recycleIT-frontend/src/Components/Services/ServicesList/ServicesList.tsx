import React, { useState, useEffect, createRef, useContext } from 'react'
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
import CloseIcon from '@mui/icons-material/Close';
import AlertMessageBox from '../../helpers/AlertMessageBox'
import { IServiceListProps } from '../../interfaces/Interfaces'

const ServicesList = (props: IServiceListProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchServices = (location: string, serviceType: string) => {
        console.log(location, serviceType);

        let serviceTypeId = '';
        // let serviceTypeFound;
        
        // if (props.servicesList) {
        //     serviceTypeFound = props.servicesList
        //     .find(service => service.id === Number(serviceType))
        // }

        // console.log(serviceTypeFound);

        // if (serviceTypeFound) {
        //     serviceTypeId = String(serviceTypeFound.facilitySubtypes)
        // }
        
        setLoading(true);
        if (error) {
            setError(false)
        }
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
        servicesItems = props.servicesList.map((item, i) => {
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

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={props.isDrawerOpened}
        >
            <div className="services-list">
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
        </Drawer>
    )
}

export default ServicesList
