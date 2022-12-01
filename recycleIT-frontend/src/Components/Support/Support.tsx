import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Header from '../Header/Header';
import Accordions from './Accordion';
import Question from './Question';
import styles from './Support.module.css'
const Support = () => {
    return (
        < >
            {/* <Header/> */}
            <Box className={styles.Support_ask_quetions}>
                <Typography variant="h4" className={styles.Support_ask_typography}>
                    Frequently Asked Questions
                </Typography>
            </Box>
            <Box className={styles.Support_main_containner}>
                <Accordions/>
                <Question/>
            </Box>
        </>
    )
}

export default Support