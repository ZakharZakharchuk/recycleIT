import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./../Support.module.css";
import React from 'react';

interface IAccordionProps {
    question: string,
    answer: string
}

function AccordionItem({question, answer}: IAccordionProps) {
    const [expanded, setExpanded] = React.useState<string | null>(null);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : null);
    };
    return (
        <Accordion
            className={styles.Accordion_wrapper}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={styles.Accordion_summary}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography className={styles.Accordion_header_typography}>
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.Accordion_details}>
                <Typography className={styles.Accordion_details_typography}>
                    {answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default AccordionItem;
