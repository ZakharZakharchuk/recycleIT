import React, { useState, useEffect } from "react";
import "./ServicesList.css";
import {
    Drawer,
    ListSubheader,
    CircularProgress,
    IconButton,
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
    const [errorMessage, setErrorMessage] = useState("");

    const facilitiesService = new FacilitiesService();

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
        servicesItems = props.servicesList.map((item) => {
            if (item.name) {
                return (
                    <ServicesCard
                        key={item.id}
                        item={item}
                        getItemLocation={getItemLocation}
                    />
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
                        servicesItems
                    )}

                    {errorAlert}
                </div>
            </div>
        </div>
    );
};

export default ServicesList;
