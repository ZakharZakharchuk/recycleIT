import {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Typography } from '@mui/material';
import styles from './Support.module.css'
import ErrorMessage from '../helpers/ErrorMessage/ErrorMessage';

interface IQuestionFormState {
  email: string,
  message: string,
  isFormValid: boolean
}

const emailRegexpr = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i

const Question = () => {
  // user will be later retrieved from User context
  const user = {name: '', email: 'cool.email@mail.com'};

  const [values, setValues] = useState<IQuestionFormState>({
    email: user.email || '',
    message: '',
    isFormValid: false
  });

  const handleChange =
    (prop: keyof IQuestionFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

  const [validationError, setValidationError] = useState({
    email: false,
    message: false,
    isFormValid: false
  });

  const validateForm = (email: string, message: string) => {
    let isEmailInvalid = false,
        isMessageInvalid = false;
    
    isEmailInvalid = !emailRegexpr.test(email);
    isMessageInvalid = !message.length || message.length > 140;

    setValidationError({
      email: isEmailInvalid,
      message: isMessageInvalid,
      isFormValid: true
    })        
  }

  const onFormSubmit = () => {
    validateForm(values.email, values.message);
    if (values.isFormValid) {
      console.log('send message to server');
      // server request
    }
  }

    return (
      <div className={styles.Question_wrapper}>
        <Typography variant='h5' className={styles.Question_header_typography}>
          Haven`t found the answer?
        </Typography>
        <Typography variant="body2" className={styles.Question_header_paragraph} >
          Write your question and we will get in touch with you via email
        </Typography>
        <FormControl>
          <TextField
            className={styles.Question_email}
            required
            id="outlined-required"
            label="Email address"
            placeholder='Email address'
            color="success"
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
        </FormControl>
        
        <FormControl>
          <TextField
            className={styles.Question_text}
            required
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            placeholder='Enter your message here'
            color="success"
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
        </FormControl>
        
        <Button 
          variant="contained" 
          style={{width: '100%', backgroundColor: "#028E3F"}}
          onClick={onFormSubmit}
          size="large"
        >
          SEND QUESTION
        </Button>
      </div>
    )
}

export default Question