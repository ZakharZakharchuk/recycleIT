import React, {useState, useContext, useEffect} from 'react'
import {
    Button,
    ButtonGroup,
    Divider,
    TextField
} from '@mui/material'
import { IQuestionFormState } from '../../../../../../util/Interfaces';
import { UserContext } from '../../../../../UserContext/UserContextProvider';
import ErrorMessage from '../../../../../UI/ErrorMessage/ErrorMessage';
import { EMAIL_REGEXPR } from '../../../../../../util/constants';

interface IServiceQuestionFormProps {
    postQuestion: (email: string, message: string) => void,
    closeQuestionForm: () => void
}

const ServiceQuestionForm = (props: IServiceQuestionFormProps) => {
    const user = useContext(UserContext);
    const [values, setValues] = useState<IQuestionFormState>({
        email: user?.user?.email || '',
        message: ''
    });
    const [validationError, setValidationError] = useState({
        email: false,
        message: false,
    });

    useEffect(() => {
        if (user?.isLoggedIn) {
            if (user?.user?.email) {
            setValues({...values, email: user?.user?.email})
            }
        } else {
            setValues({ 
            email: '',
            message: ''
            })
        }
    }, [user])

    const handleChange =
    (prop: keyof IQuestionFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const sendQuestion = () => {
        if (validateForm(values.email, values.message)) {
            props.postQuestion(values.email, values.message);
            setValues({email: user?.user?.email || '', message: ''})
        }
    }

    const validateForm = (email: string, message: string) => {
        let isEmailInvalid = false,
            isMessageInvalid = false;
        
        isEmailInvalid = !EMAIL_REGEXPR.test(email);
        isMessageInvalid = !message.length || message.length > 140;

        setValidationError({
            email: isEmailInvalid,
            message: isMessageInvalid
        });   

        return !(isEmailInvalid || isMessageInvalid);
    }

    return (
        <div className="item-details">
            <Divider 
                style={{fontSize: '13px', fontFamily: 'sans-serif', marginBottom: '5px'}}
            >
                Ask A Question
            </Divider>
            <TextField 
                label="Your email" 
                required
                style={{width: '100%', marginTop: '5px'}} 
                size="small"
                margin="normal"
                value={values.email}
                onChange={handleChange('email')}
                error={validationError.email}
            />
            {
                validationError.email ?
                    <ErrorMessage 
                        text={"Email is invalid"}
                    /> : null
            }
            <TextField 
                label="Your message here" 
                required
                multiline
                rows={3}
                style={{width: '100%',  marginTop:'5px'}} 
                size="small"
                margin="normal"
                value={values.message}
                onChange={handleChange('message')}
                error={validationError.message}
                />
                {
                    validationError.message ?
                        <ErrorMessage 
                            text={"Message is required with maximum of 140 characters"}
                        /> : null
                }
            <ButtonGroup style={{width: '100%'}}>
                <Button 
                    variant="outlined" 
                    size="small"
                    style={{width: '50%'}}
                    onClick={sendQuestion}
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