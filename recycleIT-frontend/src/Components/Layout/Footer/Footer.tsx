import { Box, Button } from "@mui/material";
import styles from "./Footer.module.css";
import call from "../../../assets/call.svg";
import message from "../../../assets/message.svg";
import { Link } from "react-router-dom";
import logoDarkGreen from "../../../assets/logoDarkGreen.svg";
const Footer = () => {
    return (
        <Box className={styles.Footer_container}>
            <Box className={styles.Footer_logo_wrapper}>
                <Link to="/">
                    <img src={logoDarkGreen} alt="RecucleIT" />
                </Link>
            </Box>
            <Box className={styles.Footer_buttons_wrapper}>
                <Link to="/" className={styles.Link}>
                    <Button variant="text" className={styles.Footer_button}>
                        HOME
                    </Button>
                </Link>
                <Link to="/services" className={styles.Link}>
                    <Button variant="text" className={styles.Footer_button}>
                        SERVICES MAP
                    </Button>
                </Link>
                <Link to="/support" className={styles.Link}>
                    <Button variant="text" className={styles.Footer_button}>
                        SUPPORT
                    </Button>
                </Link>
            </Box>
            <Box className={styles.Footer_icons_wrapper}>
                <div className={styles.Footer_icon}>
                    <img src={call} alt="call" className={styles.Footer_call} />
                    <span className={styles.text}>+123456789</span>
                </div>
                <div className={styles.Footer_icon}>
                    <img
                        src={message}
                        alt="message"
                        className={styles.Footer_message}
                    />
                    <span className={styles.text}>recycle.it@email.com</span>
                </div>
            </Box>
        </Box>
    );
};
export default Footer;
