import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import styles from './Support.module.css'
import { Box } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Accordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box className={styles.Accordions_container}>
      <Accordion className={styles.Accordion_wrapper} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
            className={styles.Accordion_summary}
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={styles.Accordion_header_typography}>
            What locations can I search for?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.Accordion_details}>
            <Typography className={styles.Accordion_details_typography}>
                For now, our application is available for USA residents. 
                You can select your current location or choose one from the available ones in the list. 
                If you do not specify the location, the services will be searched for all the country.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className={styles.Accordion_wrapper} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
         className={styles.Accordion_summary}
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={styles.Accordion_header_typography}>Some other question</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.Accordion_details}>
          <Typography className={styles.Accordion_details_typography}>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className={styles.Accordion_wrapper} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
         className={styles.Accordion_summary}
        //   expandIcon={}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={styles.Accordion_header_typography}>
            Some other question
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.Accordion_details}>
          <Typography className={styles.Accordion_details_typography}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className={styles.Accordion_wrapper} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
         className={styles.Accordion_summary}
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={styles.Accordion_header_typography}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.Accordion_details}>
          <Typography className={styles.Accordion_details_typography}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}