import { Avatar, Box, Button, SvgIcon, Typography } from "@mui/material"
import styles from './Footer.module.css'
import leaf from '../assets/leaf.png'
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import call from '../assets/call.svg'
import message from '../assets/message.svg'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <Box className={styles.Footer_container}>
            <Box className={styles.Footer_logo_wrapper}>
                <Avatar src={leaf} alt='leaf' className={styles.Footer_logo}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    className={styles.Footer_logo_description}
                >
                    RecycleIT
                </Typography>
            </Box>
            <Box className={styles.Footer_buttons_wrapper}>
                <Link to="/" className={styles.Link}>
                    <Button variant="text" className={styles.Footer_button}>HOME</Button>
                </Link>
                <Link to='/services' className={styles.Link}>
                    <Button variant="text" className={styles.Footer_button}>SERVICES MAP</Button>
                </Link>
                <Link to='/support' className={styles.Link}>
                    <Button variant="text" className={styles.Footer_button}>SUPPORT</Button>
                </Link>
            </Box>
                <Box className={styles.Footer_icons_wrapper}>
                    <img src={call} alt="call" className={styles.Footer_call}/>
                    <span className={styles.text}>+123456789</span>
                    <img src={message} alt="message" className={styles.Footer_message}/>
                    <span className={styles.text}>recycle.it@email.com</span>
                </Box>
        </Box>
    )
}
export default Footer