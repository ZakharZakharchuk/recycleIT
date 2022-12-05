import { Avatar, Button,Tab, Typography, Container, Card, Divider } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import styles from './Main.module.css'
import garbageRecycle from '../assets/garbageRecycle.png'
import data from './Data/data'
import CardsItem from './CardsItem/CardsItem'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { TabPanel } from "@mui/lab"
import { FACILITIES_TYPES } from '../../util/data-list-mock'
import { Link } from 'react-router-dom'

const Main = () => {
    const [item, setItem] = useState(data);
    const [value, setValue] = useState<string>('1');
    const [active, setActive] = useState<boolean>(false);
    const ref = useRef<any>(null);
    
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };
      const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
      };
    
    const ButtonData = [
        {
            title:'PLASTIC',
            id: 'plastic',
            value: '1'
        },
        {
            title:'PAPER',
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
                <Container maxWidth="xl" style={{display: 'flex', justifyContent: 'space-between', gap: '20px', minHeight: '80vh'}}>
                    <Box className={styles.Main_par_button_wrapper}>
                        <Typography gutterBottom variant="h3" className={styles.Main_typography}>
                            Recycle the waste - save the planet!
                        </Typography>
                        <Typography gutterBottom paragraph={true} className={styles.Main_paragraph}>Every time you throw something away, 
                            you have the power to make a difference. Find out about closest eco
                            services to help save the environment!
                        </Typography>
                        <Box className={styles.Main_buttonBroup_wrapper}>
                            <Button variant="contained" size="small" color="success" className={styles.Main_button}>
                                <Link to="/services" className={styles.Link}>
                                    Eco services
                                </Link>
                            </Button>
                            <Button variant="outlined" size="small" color="success" className={styles.Main_button}>Types of waste</Button>
                        </Box>
                    </Box>
                    <Box className={styles.Main_Avatar_wrapper}>
                        <Avatar src={garbageRecycle} alt='AccountCircleFilled'className={styles.Main_Avatar}/>
                    </Box>
                </Container>

                <Box className={styles.SectionTypes_container}>
                    <Container maxWidth="xl">
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
                                TabIndicatorProps={{style: {backgroundColor: 'green'}}}
                                textColor="secondary"
                                variant="scrollable"
                                scrollButtons
                                allowScrollButtonsMobile
                            >
                                {
                                    ButtonData.map((button: {title: string, id: string, value: string}) => {
                                        return <Tab 
                                                    label={button.title}
                                                    id={button.id}
                                                    value={button.value}
                                                    className={styles.SectionTypes_button }
                                                    onClick={() => setActive(active => !active)}
                                                    key={button.id}
                                            />
                                    })
                                }  
                            </TabList> 
                            <Box>
                                {
                                    ButtonData.map(type => {
                                        // filter cards
                                        const cardsForTab = data.filter(item => item.value === type.value);
                                        return <TabPanel style={{padding: 0}} value={type.value} key={type.value}>
                                                    <CardsItem item={cardsForTab}/>
                                                </TabPanel>
                                    })
                                }
                            </Box>
                        </TabContext>
                    </Container>
                </Box>

                <Box className={styles.SectionTypes_container_white}>
                    <Container maxWidth="xl">
                    <Typography variant="h4" className={styles.SectionTypes_typography}>
                            Popular facilities
                        </Typography>
                        <Typography paragraph={true} className={styles.SectionTypes_paragraph}>
                            Find out about popular types of  eco services
                        </Typography>

                        <div className={styles.Facilities_container}>
                                {
                                    FACILITIES_TYPES.map((card: {id: number, title: string, description: string})=> {
                                        return <Card key={card.id} className={styles.Facilities_card}>
                                                    <Typography gutterBottom variant="h6" className={styles.Facilities_title}>
                                                        {card.title}
                                                    </Typography>
                                                    <Divider light />
                                                    <Typography gutterBottom variant="body2" className={styles.Facilities_desc} >
                                                        {card.description}
                                                    </Typography>
                                            </Card>
                                    })
                                }
                        </div>
                    </Container>
                </Box>           
        </>
    )
}

export default Main