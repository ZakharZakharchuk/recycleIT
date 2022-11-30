import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button, Typography } from '@mui/material';
import styles from './Support.module.css'

const Question = () => {
 
    return (
      <div className={styles.Question_wrapper}>
        <Typography variant='h5' className={styles.Question_header_typography}>
          Haven`t found the answer?
        </Typography>
        <Typography className={styles.Question_header_paragraph} >
          Write your question and we will get in touch with you via email
        </Typography>
        <TextField
          className={styles.Question_email}
          required
          id="outlined-required"
          label="Email address"
          placeholder='email address'
          color="success"
        />
        <TextField
        className={styles.Question_text}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          placeholder='Some text that user entered'
          color="success"
        />
        <Button className={styles.Question_send_button}  >
          SEND QUESTION
        </Button>
      </div>
    )
}

export default Question