import { 
    IconButton, 
    Rating, 
    Popper, 
    Tooltip, 
    tooltipClasses, 
    TooltipProps, 
    styled
} from '@mui/material'
import { SetStateAction, useEffect, useRef, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IMarkerProps } from '../../../interfaces/Interfaces';
import './Marker.css';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
[`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 16,
    width: '150px'
},
}));

const Marker = (props: IMarkerProps) => {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(prev => !prev);
    };

    const markerClassName = useRef('location-icon');
    const markerStroke = useRef('#D48204');

    useEffect(() => {
        if (props.showLabel === props.id) {
            markerClassName.current = 'red';
        } else {
            markerClassName.current = 'location-icon';
        }
    }, [props.showLabel])

    return (
        <div className="marker">
            <LightTooltip
                PopperProps={{
                    disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                placement="top"
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={props.name}
                >
                <IconButton onClick={handleTooltipOpen}>
                    <LocationOnIcon 
                        stroke={markerStroke.current} 
                        fontSize="large"
                        className={markerClassName.current}
                    />
                </IconButton>
            </LightTooltip>
        </div>
    )
}

export default Marker;