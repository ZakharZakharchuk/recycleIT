import { Typography, Button } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router"
import styles from './Error.module.css'

const Error404 = ():JSX.Element => {
    const navigate = useNavigate();
    return (
        <div className={styles.Error_wrapper}>
            <Typography variant="h1" className={styles.Error_header}>404</Typography>
            <Typography variant="h4" className={styles.Error_header}>
                Page not found
            </Typography>
            <Typography variant="body1" className={styles.Error_parg}>
                Seems like you the page you are trying to access was not found
            </Typography>
            <Button 
                variant="contained" 
                color="success"
                size="large"
                onClick={() => navigate('/')}
            >
                Back to main page
            </Button>
        </div>
    )
}
export default Error404