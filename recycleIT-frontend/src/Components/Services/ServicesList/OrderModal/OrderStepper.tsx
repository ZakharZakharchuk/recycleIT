/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import creditCard from '../../../assets/creditCard.jpg'
import cash from '../../../assets/cash.jpg'
import styles from './OrderModal.module.css'
import Radio from '@mui/material/Radio';
import { Alert, Snackbar, Stack } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const steps = ['Add Email and Phone number', 'Choose weight and delivery ', 'Payment'];

const OrderStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] =useState(new Set<number>());
  const [selectedValue, setSelectedValue] = useState('a');
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState();
  const [standart, setStandart] = useState<boolean>(false);
  const [value, setValue] = React.useState<Dayjs | null>(null);
  
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  const handleOnChange =(value: any) => {
    setPhone(value)
 }
 
  return (
    <Box sx={{ width: '100%' }} className={styles.Stepper_container}>
      <Stepper activeStep={activeStep} color="success">
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} color="success">
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 7 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Button onClick={handleClick}>Send</Button>
                <Snackbar open={open} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%', marginBottom:-50}}>
                     You successfully order!
                    </Alert>
                </Snackbar>
            </Stack>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {
                activeStep === 0 ? (
                    <Box className={styles.Stepper_email_number}>
                      <div className={styles.Stepper_descr}>As a security measure, you will need your Email
                        and your Phone Number to view your current 
                        account balance and make payments.
                      </div>
                      <div className={styles.Stepper_email_number_wrapper}>
                        <TextField
                            color="success"
                            type="email"
                            required
                            id="outlined-required"
                            label="Email"
                            helperText="Write your Email..."
                        />                      
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                          <DatePicker
                            label="Basic example"
                            value={value}
                            onChange={(newValue: any) => {
                              setValue(newValue);
                            }}
                            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} color="success"/>}
                        />
                        <MuiPhoneNumber 
                          helperText="Write your Phone Number..." 
                          className={styles.Stepper_phone} 
                          color="success" 
                          defaultCountry={'us'} 
                          onChange={(e)=> handleOnChange(e)}/>
                        </LocalizationProvider>
                      </div>
                    </Box>
                  
                ) : activeStep === 1 ? (
                    <>
                        <Box className={styles.Stepper_checkbox}>
                            <Radio {...controlProps('a')} color="success" />
                            <label className={styles.Stepper_checkbox_label}>0-1kg will be 50$</label> 
                            <Radio {...controlProps('b')} color="success" />
                            <label className={styles.Stepper_checkbox_label}>1-10kg will be 150$</label> 
                            <Radio {...controlProps('c')} color="success" />
                            <label>10-50kg will be 300$</label>
                        </Box>
                        <Box className={styles.Stepper_delivery}>
                            <div>
                                <Checkbox color="default" onClick={()=>{setStandart(!standart); console.log("hijiji")}}/>
                                <label>Standart...</label>
                                {standart  && (
                                  <Box  className={styles.Stepper_Standart_wrapper}>
                                    <Box>
                                      <h4>Standart orders types... </h4>
                                      <ul>
                                        <li>Plastic</li>
                                        <li>Glass</li>
                                        <li>Paper</li>
                                      </ul>
                                    </Box>
                                    <Box>
                                    <h4>Extra +15$ for this tipes... </h4>
                                    <ul>
                                      <li>Metal</li>
                                      <li>Electronic</li>
                                    </ul>
                                  </Box>
                                  </Box>
                                  
                                )}
                            </div>
                            <div>
                                <Checkbox color="default" />
                                <label>Express...(+100$)</label>
                            </div>
                        </Box>
                    </>
                ) : activeStep === 2 ? (
                    <Box className={styles.Stepper_payed}>
                      <Typography variant="h6" gutterBottom>Payment method</Typography>
                      <div className={styles.Stepper_cash_wrapper}>
                        <Checkbox color="success"/>
                        <Typography variant="subtitle2" className={styles.Stepper_cash}>Cash!</Typography>
                        {/* <img src={cash} className={styles.Stepper_card}/> */}
                      </div>
                      <div className={styles.Stepper_express_card_wrapper}>
                        <TextField id="standard-basic" label="Name of Card" variant="standard" color="success"/>
                        <TextField id="standard-basic" label="Card number" variant="standard" color="success"/>
                      </div>
                      <div className={styles.Stepper_express_check_wrapper}>
                        <Checkbox color="success"/>
                        <Typography variant="subtitle2" className={styles.Stepper_cash}>Remember credit card details for next time!</Typography>
                      </div>
                        {/* <Box>
                            <Checkbox
                                // icon={<BookmarkBorderIcon />}
                                // checkedIcon={<BookmarkIcon />}
                            />
                            <Typography variant="subtitle2" gutterBottom>Credit Card!</Typography>
                            <img src={creditCard} className={styles.Stepper_card}/>
                        </Box>
                        <Box>
                            <Radio
                              color="success"
                                // icon={<BookmarkBorderIcon />}
                                // checkedIcon={<BookmarkIcon />}
                            />
                            <Typography variant="subtitle2" gutterBottom>Cash!</Typography>
                            <img src={cash} className={styles.Stepper_card}/>
                        </Box> */}
                    </Box>
                ) : (
                    <p>Heey</p>
                )

            }
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
export default OrderStepper