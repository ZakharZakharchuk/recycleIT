import { Avatar, Button,Tab, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Header from '../Header/Header'
import styles from './Main.module.css'
import garbageRecycle from '../assets/garbageRecycle.png'
import data from './Data/data'
import CardsItem from './CardsItem/CardsItem'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Footer from '../Footer/Footer'
const Main = () => {
    const [item, setItem] = useState(data);
    const [value, setValue] = useState<string>('1');
    const [active, setActive] = useState<boolean>(false)
    
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);

      };
    
   const ButtonData =[
    {
        title:'PLASTIC',
        id: 'plastic',
        value: '1'
    },
    {
        title:'PAPERE',
        id: 'paper',
        value: '2'
    },
    {
        title:'GLASS',
        id: 'glass',
        value: '3'
    },
    {
        title:'METAL',
        id: 'metal',
        value: '4'
    },
    {
        title:'ELECTRONIC',
        id: 'electronic',
        value: '5'
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
                <TabContext value={value}>
                    <TabList
                        className={ styles.SectionTypes_buttonBroup_wrapper } 
                        onChange={handleChange}
                        TabIndicatorProps={{style: {display:'none'}}}
                        textColor="secondary"
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile>
                        {
                            ButtonData.map((button: {title: string, id: string, value: string}) => {
                                return <Tab 
                                            label={button.title}
                                            id={button.id}
                                            value={button.value}
                                            // className={active ? styles.SectionTypes_button_active : styles.SectionTypes_button }
                                            onClick={() => setActive(active => !active)}
                                            key={button.id}
                                            className={styles.SectionTypes_button} 
                                       />
                            })
                        }  
                     </TabList> 
                    <Box className={styles.Cards_container}>
                        <CardsItem item={item} setItem={setItem} value={ButtonData}/>
                    </Box>
                </TabContext>
            </Box>
            <Footer/>
        </>
    )
}

export default Main