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
    // get email from user state
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleMessageChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setMessage(event.target.value)
    }

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setEmail(event.target.value)
    }

    const sendQuestion = (message: string) => {
        props.postQuestion(message);
        setMessage('')
    }

    return (
        <div className="item-details">
            <Divider 
                style={{fontSize: '12px', fontFamily: 'sans-serif'}}
            >
                Ask A Question
            </Divider>
            {
                !email && <TextField 
                            label="Your email" 
                            variant="standard" 
                            style={{width: '100%', marginTop: '5px'}} 
                            size="small"
                            margin="normal"
                            value={email}
                            onChange={handleEmailChange}
                        />
            }
            <TextField 
                label="Your message here" 
                variant="standard" 
                style={{width: '100%',  marginTop:'5px'}} 
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