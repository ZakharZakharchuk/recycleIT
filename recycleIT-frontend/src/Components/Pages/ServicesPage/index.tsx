import Map from './Map/Map';
import ServicesList from './ServicesList/ServicesList';
import { useState, useEffect, createContext } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { 
    LocationType, 
    ChosenItemType, 
    IServiceList 
} from '../../../util/Interfaces';
import './index.css'

export const UserLocation = createContext<LocationType | null>(null);

const ServicesPage = () => {
    const [servicesList, setServicesList] = useState<IServiceList[] | null>(null);
    const [isDrawerOpened, setIsDrawerOpened] = useState(false);
    const [userLocation, setUserLocation] = useState<LocationType | null>(null);
    const [chosenItemLocation, setChosenItemLocation] = useState<ChosenItemType | null>(null);
    const isMobileDevice = useMediaQuery('(min-width:900px)');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log('success', position);
            setUserLocation({lat: position.coords.latitude, lng: position.coords.longitude});
        });
    }, []);

    useEffect(() => {
        setIsDrawerOpened(isMobileDevice);
    }, [isMobileDevice])

    const setServicesData = (services: IServiceList[] | null) => {
        setServicesList(services);
    }

    const setItemLocation = (id: number, lat: number, lng: number) => {
        setChosenItemLocation({id: id, lat: lat, lng: lng});
    }

    const toggleDrawerOpened = () => {
        setIsDrawerOpened(prev => !prev)
    }

    return (
        <div className='services-page'>
            <UserLocation.Provider value={userLocation}>
                <div className="container">
                    <ServicesList 
                        servicesList={servicesList} 
                        setServicesList={setServicesData}
                        setItemLocation={setItemLocation}
                        isDrawerOpened={isDrawerOpened}
                        isMobileDevice={isMobileDevice}
                        toggleDrawerOpened={toggleDrawerOpened}
                    />
                    <Map 
                        servicesList={servicesList}
                        chosenItemLocation={chosenItemLocation}
                        toggleDrawerOpened={toggleDrawerOpened}
                        isMobileDevice={isMobileDevice}
                    />
                </div>
            </UserLocation.Provider>
        </div>
    )
}
export default ServicesPage
