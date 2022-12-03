import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Header from '../Header/Header';
import Accordions from './Accordion';
import Question from './Question';
import styles from './Support.module.css'
const Support = () => {
    return (
        <div className={styles.Support_page}>
            {/* <Header/> */}
            <div className={styles.Support_ask_quetions}>
                <Typography variant="h4" className={styles.Support_ask_typography}>
                    Frequently Asked Questions
                </Typography>
            </div>
            <Box className={styles.Support_main_containner}>
                <Accordions/>
                <Question/>
            </Box>
        </div>
    )
}

export default Support