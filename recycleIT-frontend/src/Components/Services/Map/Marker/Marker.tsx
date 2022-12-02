import { Typography, IconButton, Rating, Popper} from '@mui/material'
import { SetStateAction, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IMarkerProps } from '../../../interfaces/Interfaces';
import './Marker.css'

const Marker = (props: IMarkerProps) => {
    const [isLabelVisible, setIsLabelVisible] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    let markerClassName = "location-icon "
    let markerStroke = "#D48204";

    const toggleLabelVisibility = (event: { currentTarget: SetStateAction<HTMLButtonElement | null>; }) => {
        setIsLabelVisible(prev => !prev);
        setAnchorEl(event.currentTarget);
    }

    if (props.showLabel === props.id) {
        markerStroke = 'red';
        markerClassName += 'red';
    }

    return (
        <div 
            className="marker"
        >
            <Popper 
                open={isLabelVisible} 
                anchorEl={anchorEl}
                placement={'top-start'}
                className="marker-label"
            >
                <Typography 
                    variant="body1" 
                    style={{fontSize: '14px'}}
                >
                    {props.name}
                </Typography>
                <Rating 
                    value={props.rating}
                    readOnly 
                    size="small" 
                />
            </Popper> 
            <IconButton onClick={toggleLabelVisibility}>
                <LocationOnIcon 
                    stroke={markerStroke} 
                    fontSize="large"
                    className={markerClassName}
                />
            </IconButton>
        </div>
    )
}

export default Marker;