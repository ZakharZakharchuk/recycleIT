import {useContext, useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { 
  Button, 
  FormControl, 
  Typography, 
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions 
} from '@mui/material';
import styles from './Support.module.css'
import ErrorMessage from '../helpers/ErrorMessage/ErrorMessage';
import { UserContext } from '../UserContext/UserContextProvider';

interface IQuestionFormState {
  email: string,
  message: string
}

const emailRegexpr = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

const Question = () => {
  // user will be later retrieved from User context
  const user = useContext(UserContext);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [values, setValues] = useState<IQuestionFormState>({
    email: user?.user?.email || '',
    message: ''
  });

  const handleChange =
    (prop: keyof IQuestionFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

  const handleClose = () => {
    setDialogOpen(prev => !prev);
    setValues({ 
      email: '',
      message: ''
    })
  }

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

  const validateForm = (email: string, message: string) => {
    let isEmailInvalid = false,
        isMessageInvalid = false;
    
    isEmailInvalid = !emailRegexpr.test(email);
    isMessageInvalid = !message.length || message.length > 140;

    setValidationError({
      email: isEmailInvalid,
      message: isMessageInvalid
    });   

    return !(isEmailInvalid || isMessageInvalid);
  }

  const onFormSubmit = () => {
    if (validateForm(values.email, values.message)) {
      console.log('send message to server');
      // server request

      // open dialog
      setDialogOpen(true);
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

        <Dialog
          open={dialogOpen}
          onClose={handleClose}
          style={{padding: '20px'}}
        >
          <DialogTitle style={{textAlign: 'center'}}>
            Thank you for your question!
          </DialogTitle>
          <DialogContent>
          <DialogContentText>
            Our support team will contact you via email 
            <span style={{color: '#2E7D32'}}> {values.email} </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{padding: '0 15px 15px'}}>
          <Button color="success" onClick={handleClose}>Continue to page</Button>
        </DialogActions>
        </Dialog>
      </div>
    )
}

export default Question