import { useState } from "react";
import { Drawer, IconButton, ListSubheader, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './ServicesWrapper.css'

function ServicesWrapper({
    isDrawerOpened, 
    isMobileDevice, 
    toggleDrawerOpened, 
    side,
    content,
    heading
}: {isDrawerOpened: boolean, 
    isMobileDevice: boolean, 
    toggleDrawerOpened: () => void, 
    side: any, 
    content: any,
    heading: string
}) {
    return (
        <>
            <Drawer
                variant="persistent"
                anchor="left"
                open={isDrawerOpened}
            >
                <ListSubheader component="div" 
                    className="list-subheader"
                >
                    Services
                    <IconButton 
                        style={{display: !isMobileDevice ? 'block' : 'none'}}
                        onClick={toggleDrawerOpened}
                    >
                        <CloseIcon style={{color: 'grey', display: 'block'}}/>
                    </IconButton>
                </ListSubheader>
                {side}
            </Drawer>

            <div className="side-top">
                <Typography gutterBottom variant="h6" style={{color: '#4F4F4F'}}>
                <IconButton 
                style={{display: !isMobileDevice ? 'inline-block' : 'none'}} 
                onClick={toggleDrawerOpened}>
                    <MenuOpenIcon style={{color: '#4F4F4F'}} />
                </IconButton>
                {heading}
                </Typography>
            </div>

            {content}
        </>
    )
}

export default ServicesWrapper;