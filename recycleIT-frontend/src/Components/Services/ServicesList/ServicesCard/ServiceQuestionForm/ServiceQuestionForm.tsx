import React from 'react'
import {
    Button,
    ButtonGroup,
    Divider,
    TextField
} from '@mui/material'

interface IServiceQuestionFormProps {
    postQuestion: (message: string) => void,
    closeQuestionForm: () => void
}

const ServiceQuestionForm = (props: IServiceQuestionFormProps) => {

    const [message, setMessage] = React.useState('');
    const handleMessageChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setMessage(event.target.value)
    }

    const sendQuestion = (message: string) => {
        props.postQuestion(message);
        setMessage('')
    }

    return (
        <div className="item-details">
            <Divider style={{fontSize: '12px'}}>Ask A Question</Divider>
            <TextField 
                label="Your message here" 
                variant="standard" 
                style={{width: '100%'}} 
                size="small"
                margin="normal"
                value={message}
                onChange={handleMessageChange}
                />
            <ButtonGroup style={{width: '100%'}}>
                <Button 
                    variant="outlined" 
                    size="small"
                    style={{width: '50%'}}
                    onClick={() => sendQuestion(message)}
                    >
                    Ask
                </Button>            
                <Button 
                    variant="outlined" 
                    size="small"
                    style={{width: '50%'}}
                    color="error"
                    onClick={props.closeQuestionForm}
                    >
                    Cancel
                </Button> 
            </ButtonGroup>           
        </div>
    )
}

export default ServiceQuestionForm;