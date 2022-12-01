import { Avatar, Button, Card, CardActionArea, CardContent, CardMedia, Container, Tab, Tabs, ToggleButtonGroup, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Header from '../Header/Header'
import styles from './Main.module.css'
import garbageRecycle from '../assets/garbageRecycle.png'
import data from './Data/data'
import CardsItem from './CardsItem/CardsItem'
import { ToggleButton } from '@mui/material';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

const Main = () => {
    const [item, setItem] = useState(data);
    const [alignment, setAlignment] = React.useState('plastic');
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

    const filterCards = (id: string | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const newCard = data.filter((card) => {
            console.log(`buttonID ${id}`)
            console.log(`CARD${card.category}`)
                return id === card.category
        })
        setItem(newCard)
   }
   const ButtonData =[
    {
        title:'PLASTIC',
        id: 'plastic'
    },
    {
        title:'PAPERE',
        id: 'paper'
    },
    {
        title:'GLASS',
        id: 'glass'
    },
    {
        title:'METAL',
        id: 'metal'
    },
    {
        title:'ELECTRONIC',
        id: 'electronic'
    }
   ]
    return (
        <>
            <Header/>
            <Box className={styles.Main_container}>
                <Box className={styles.Main_par_button_wrapper}>
                    <Typography variant="h3" className={styles.Main_typography}>
                        Recycle the waste - save the planet !
                    </Typography>
                    <Typography paragraph={true} className={styles.Main_paragraph}>Every time you throw something away, 
                        you have the power to make a difference. Find out about closest eco
                         services to help save the environment!
                    </Typography>
                    <Box className={styles.Main_buttonBroup_wrapper}>
                        <Button className={styles.Main_button_eco}>Eco services</Button>
                        <Button className={styles.Main_button_types}>Types of waste</Button>
                    </Box>
                </Box>
                <Box className={styles.Main_Avatar_wrapper}>
                    <Avatar src={garbageRecycle} alt='AccountCircleFilled'className={styles.Main_Avatar}/>
                </Box>
            </Box>
            <Box className={styles.SectionTypes_container}>
                <Typography variant="h4" className={styles.SectionTypes_typography}>
                    Not sure how to sort?
                </Typography>
                <Typography paragraph={true} className={styles.SectionTypes_paragraph}>
                    Find out about different types of waste
                </Typography>
                <ToggleButtonGroup 
                    className={styles.SectionTypes_buttonBroup_wrapper}
                    value={alignment}
                    exclusive
                    color="primary"
                    onChange={handleChange}>    
                {
                    ButtonData.map((button: {title: string, id: string}) => {
                        return <ToggleButton 
                                    id={button.id}
                                    value={button.title}
                                    key={button.id}
                                    className={styles.SectionTypes_button} 
                                    onClick={() => filterCards(button.id)}> 
                                        {button.title}
                                </ToggleButton>
                    })
                }        
                </ToggleButtonGroup>
                 {/* <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext> */}
                <Box className={styles.Cards_container}>
                    <CardsItem item={item} setItem={setItem}/>
                </Box>
            </Box>
        </>
    )
}

export default Main