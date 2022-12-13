import React, { useState, useEffect } from "react";
import "./ServicesList.css";
import {
    Drawer,
    ListSubheader,
    CircularProgress,
    IconButton,
    Pagination,
} from "@mui/material";
import ServicesCard from "./ServicesCard/ServicesCard";
import ServicesSearch from "./ServicesSearch/ServicesSearch";
import AlertMessageBox from "../../../UI/AlertMessageBox/AlertMessageBox";
import { IServiceListProps } from "../../../../util/Interfaces";
import CloseIcon from "@mui/icons-material/Close";
import FacilitiesService from "../../../../Services/apiService";

const ServicesList = (props: IServiceListProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error loading data");

    const facilitiesService = new FacilitiesService();
    const MAX_ITEMS_ON_PAGE = 10;

    const [page, setPage] = React.useState(1);
    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(props.servicesList?.length || MAX_ITEMS_ON_PAGE);

    const ref: React.RefObject<HTMLInputElement> = React.createRef();

    useEffect(() => {
        setPage(1);

    }, [props.servicesList])

    const handleClick = () => {
        console.log(ref);
        
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
        })}
    };

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        // start: (page - 1) * MAX_ITEMS_ON_PAGE
        setPage(value);
        setStart(countStartIndex(value));
        setEnd(countEndIndex(value));
        handleClick();
    };

    const countStartIndex = (value: number) => {
        return (value -1) * MAX_ITEMS_ON_PAGE;
    }

    const countEndIndex = (value: number) => {
        return ((value -1) * MAX_ITEMS_ON_PAGE) + (MAX_ITEMS_ON_PAGE - 1);
    }

    let pagesNumber = Math.ceil(
        props.servicesList && props.servicesList?.length > MAX_ITEMS_ON_PAGE
            ? props.servicesList?.length / MAX_ITEMS_ON_PAGE
            : 0
    );

    const fetchServices = (location: string, serviceType: string) => {
        setLoading(true);
        if (error) {
            setError(false);
        }

        facilitiesService
            .getFacilities(location, String(serviceType))
            .then((data) => {
                if (data.data.length) {
                    props.setServicesList(data.data);
                } else {
                    props.setServicesList(null);
                    setError(true);
                    setErrorMessage(
                        "No eco services that satisfy your request"
                    );
                }
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(true);
                console.error(error);
            });
    };

    const getItemLocation = (id: number, lat: number, lng: number) => {
        props.setItemLocation(id, lat, lng);
    };

    let servicesItems = null;

    if (props.servicesList) {
        servicesItems = props.servicesList.map((item, i) => {
            if (item.name) {
                return (
                    <div ref={i === start ? ref : null}>
                        <ServicesCard
                            key={item.id}
                            item={item}
                            getItemLocation={getItemLocation}
                        />
                    </div>
                );
            }
        });
    }

    const errorAlert = error && (
        <AlertMessageBox error={true} text={errorMessage} />
    );

    const sideBarClass = props.isDrawerOpened ? "side_bar opened" : "side_bar";

    return (
        <div className={sideBarClass}>
            <ListSubheader component="div" className="list-subheader">
                Services
                <IconButton
                    style={{
                        display: !props.isMobileDevice ? "block" : "none",
                    }}
                    onClick={props.toggleDrawerOpened}
                >
                    <CloseIcon style={{ color: "grey", display: "block" }} />
                </IconButton>
            </ListSubheader>
            <div className="services-list">
                <ServicesSearch fetchServices={fetchServices} />
                <div className="cards-container">
                    {loading ? (
                        <CircularProgress
                            color="success"
                            style={{ display: "block", margin: "0 auto" }}
                        />
                    ) : (
                        servicesItems?.slice(start, end)
                    )}

                    {errorAlert}
                </div>
            </div>
            {
                pagesNumber && !loading && ! error ? 
                <div className="pagination">
                    <Pagination
                        count={pagesNumber}
                        size="small"
                        page={page}
                        onChange={handlePageChange}
                    />
                </div> : null
            }
        </div>
    );
};

export default ServicesList;
