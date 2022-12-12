import {
    Button,
    Tab,
    Typography,
    Container,
    Card,
    Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styles from "./Main.module.css";
import mainBanner from '../../../assets/mainBanner.svg';
import data from "./Data/data";
import CardsItem from "./CardsItem/CardsItem";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TabPanel } from "@mui/lab";
import { FACILITIES_TYPES, WASTE_CATEGORIES } from "../../../util/constants";
import { Link } from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";

const Main = () => {
    const [value, setValue] = useState<string>("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <Container
                maxWidth="xl"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    minHeight: "70vh",
                }}
            >
                <Box className={styles.Main_par_button_wrapper}>
                    <Typography
                        gutterBottom
                        variant="h3"
                        className={styles.Main_typography}
                    >
                        Recycle the waste - save the planet!
                    </Typography>
                    <Typography
                        gutterBottom
                        paragraph={true}
                        className={styles.Main_paragraph}
                    >
                        Every time you throw something away, you have the power
                        to make a difference. Find out about closest eco
                        services to help save the environment!
                    </Typography>
                    <Box className={styles.Main_buttonBroup_wrapper}>
                        <Button
                            variant="contained"
                            size="large"
                            color="success"
                            className={styles.Main_button}
                        >
                            <Link to="/services" className={styles.Link}>
                                Eco services
                            </Link>
                        </Button>
                    </Box>
                </Box>
                <Box className={styles.Main_Avatar_wrapper}>
                    <img src={mainBanner} alt="banner"></img>
                </Box>
            </Container>

            <Box className={styles.SectionTypes_container}>
                <Container maxWidth="xl">
                    <Typography
                        variant="h4"
                        className={styles.SectionTypes_typography}
                    >
                        Not sure how to sort?
                    </Typography>
                    <Typography
                        paragraph={true}
                        className={styles.SectionTypes_paragraph}
                    >
                        Find out about different types of waste
                    </Typography>
                    <TabContext value={value}>
                        <TabList
                            className={styles.SectionTypes_buttonBroup_wrapper}
                            onChange={handleChange}
                            TabIndicatorProps={{
                                style: { backgroundColor: "green" },
                            }}
                            textColor="secondary"
                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                        >
                            {WASTE_CATEGORIES.map(
                                (button: {
                                    title: string;
                                    id: string;
                                    value: string;
                                }) => {
                                    return (
                                        <Tab
                                            label={button.title}
                                            id={button.id}
                                            value={button.value}
                                            className={
                                                styles.SectionTypes_button
                                            }
                                            key={button.id}
                                        />
                                    );
                                }
                            )}
                        </TabList>
                        <Box>
                            {WASTE_CATEGORIES.map((type) => {
                                const cardsForTab = data.filter(
                                    (item) => item.value === type.value
                                );
                                return (
                                    <TabPanel
                                        style={{ padding: 0 }}
                                        value={type.value}
                                        key={type.value}
                                    >
                                        <CardsItem item={cardsForTab} />
                                    </TabPanel>
                                );
                            })}
                        </Box>
                    </TabContext>
                </Container>
            </Box>

            <Box className={styles.SectionTypes_container_white}>
                <Container maxWidth="xl">
                    <Typography
                        variant="h4"
                        className={styles.SectionTypes_typography}
                    >
                        Popular facilities
                    </Typography>
                    <Typography
                        paragraph={true}
                        className={styles.SectionTypes_paragraph}
                    >
                        Find out about popular types of eco services
                    </Typography>

                    <div className={styles.Facilities_container}>
                        {FACILITIES_TYPES.map(
                            (card: {
                                id: number;
                                title: string;
                                description: string;
                            }) => {
                                return (
                                    <Card
                                        key={card.id}
                                        className={styles.Facilities_card}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            className={styles.Facilities_title}
                                        >
                                            {card.title}
                                        </Typography>
                                        <Divider light />
                                        <Typography
                                            gutterBottom
                                            variant="body2"
                                            className={styles.Facilities_desc}
                                        >
                                            {card.description}
                                        </Typography>
                                    </Card>
                                );
                            }
                        )}
                    </div>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Main;
