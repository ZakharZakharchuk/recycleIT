import Header from '../Header/Header';
import Map from './Map/Map';
import ServicesList from './ServicesList/ServicesList';
import { useState, useEffect, createContext } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { 
    LocationType, 
    ChosenItemType, 
    IServiceList 
} from '../interfaces/Interfaces';

export const UserLocation = createContext<LocationType | null>(null);

const Services = () => {

    const [servicesList, setServicesList] = useState<IServiceList[] | null>(null);
    const [isDrawerOpened, setIsDrawerOpened] = useState(false);
    const [userLocation, setUserLocation] = useState<LocationType | null>(null);
    const [chosenItemLocation, setChosenItemLocation] = useState<ChosenItemType | null>(null);
    const isMobileDevice = useMediaQuery('(min-width:900px)');

    useEffect(() => {
        // get user`s current location
        navigator.geolocation.getCurrentPosition((position) => {
            console.log('success', position);
            setUserLocation({lat: position.coords.latitude, lng: position.coords.longitude});
        });
    }, []);

    useEffect(() => {
        setIsDrawerOpened(isMobileDevice);
    }, [isMobileDevice])

    const setServicesData = (services: IServiceList[] | null) => {
        console.log('service list updated');
        setServicesList(services);
    }

    const setItemLocation = (id: number, lat: number, lng: number) => {
        setChosenItemLocation({id: id, lat: lat, lng: lng});
    }

    const toggleDrawerOpened = () => {
        setIsDrawerOpened(prev => !prev)
    }

    return (
        <>
            {/* <Header/> */}
            <UserLocation.Provider value={userLocation}>
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
            </UserLocation.Provider>
        </>
    )
}
export default Services