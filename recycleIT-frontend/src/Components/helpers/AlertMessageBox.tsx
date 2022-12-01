import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import {
    Alert,
    CircularProgress
} from '@mui/material'

interface IAlertMessageBoxProps {
    error?: boolean, 
    loading?: boolean, 
    text: string
}

const AlertMessageBox = ({error, loading, text} : IAlertMessageBoxProps) => {
    let icon = null; 
    
    if (error) {
        icon = <SentimentVeryDissatisfiedIcon 
                    fontSize="inherit" 
                    style={{color: 'orange'}}
                />
    } else {
        icon = <CircularProgress color="success" size={22}/>
    }

    return (
        <Alert 
            variant="outlined" 
            severity={error ? "error" : "success"}
            icon={icon}
        >
            {text}
        </Alert>
    )
}

export default AlertMessageBox