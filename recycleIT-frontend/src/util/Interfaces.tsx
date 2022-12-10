export interface IServiceCardProps {
    getItemLocation: (id: number, lat: number, lng: number) => void,
    item: {
        id: number;
        name: string,
        streetAddress: string,
        city: string,
        latitude: number,
        longitude: number,
        contactPhone: string,
        facilitySubtypes: string,
        rating: number,
        delivery: boolean
    }
}

export interface IServiceListProps {
    servicesList: IServiceList[] | null, 
    setServicesList: (services: IServiceList[] | null) => void,
    setItemLocation: (id: number, lat: number, lng: number) => void,
    toggleDrawerOpened: () => void,
    isDrawerOpened: boolean,
    isMobileDevice: boolean
}

export interface IServicesSearchProps {
    fetchServices: (location: string, serviceType: string, id?: number) => void
}

export interface IServiceList {
    id: number;
    name: string,
    streetAddress: string,
    city: string,
    latitude: number,
    longitude: number,
    contactPhone: string,
    facilitySubtypes: string,
    rating: number,
    delivery: boolean
}

export interface IMapProps {
    servicesList: IServiceList[] | null,
    chosenItemLocation: LocationType | null,
    toggleDrawerOpened: () => void,
    isMobileDevice: boolean,
}

export interface IMarkerProps {
    lat: number, 
    lng: number, 
    name: string, 
    rating: number,
    id: number,
    showLabel: number
}

export interface LocationType {
    lat: number, 
    lng: number
}
export interface ChosenItemType {
    id: number,
    lat: number, 
    lng: number
}

export interface IQuestionFormState {
    email: string,
    message: string
}


