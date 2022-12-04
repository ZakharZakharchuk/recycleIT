import './Authorization.css';
import {
    Typography,
    OutlinedInput,
    Button,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton
} from '@mui/material';
import {useState} from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Header from '../Header/Header';

interface IFormState {
    name: string;
    email: string;
    password: string;
    showPassword: boolean;
    isFormValid: boolean
}

interface IFormProps {
    submitForm: () => void
}
const ErrorMessage = (props: {text: string}) => {
    return (
        <div className='error-message'>{props.text}</div>
    )
}
// minimum eight characters, at least one letter and one number and no spaces
const passwordRegexpr = /^(?=.*[A-Za-z])(?=.*\d)(?=^\S*$)[A-Za-z\d]{8,}$/

const emailRegexpr = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i

const Authorization = () => {
    const [values, setValues] = useState<IFormState>({
        name: '',
        email: '',
        password: '',
        showPassword: false,
        isFormValid: false
    });
    const [validationError, setValidationError] = useState({
        name: false,
        email: false,
        password: false
    });
    console.log(validationError);
    const [isLoginMode, setIsLoginMode] = useState(false);

    const validateForm = (name: string, email: string, password: string) => {
        let isNameInvalid = false,
            isEmailInvalid = false,
            isPasswordInvalid = false;
        
        if (!isLoginMode) {
            isNameInvalid = name.length < 3 || name.length > 15;
            console.log(isNameInvalid);
        }
        isEmailInvalid = !emailRegexpr.test(email);
        console.log(isEmailInvalid);
        
        isPasswordInvalid = !passwordRegexpr.test(password);
        console.log(isPasswordInvalid);
        
        setValidationError({
            name: isNameInvalid,
            email: isEmailInvalid,
            password: isPasswordInvalid
        })        
    }

    const handleChange =
    (prop: keyof IFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const submitForm = () => {
        validateForm(values.name, values.email, values.password)
        if (values.isFormValid) {
            console.log('submit form');
            setValidationError({
                name: false,
                email: false,
                password: false
            })
        } else {
            console.log('form invalid')
        }
    }
    
    return (
    <> 
    <Header/>
        <div className="form-container">
            <form className="form">
            <Typography variant="h5" style={{textAlign: 'center'}}>RecycleIT</Typography>
                <Typography variant="h6">
                    {
                        isLoginMode ? 'Sign In' : 'Create Account'
                    }
                </Typography>
                
                <FormControl style={{display: isLoginMode ? 'none' : 'block'}}>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <OutlinedInput
                        fullWidth
                        required
                        type='text'
                        id="name"
                        label="Required"
                        value={values.name}
                        onChange={handleChange('name')}
                        error={validationError.name}
                    />
                    {
                        validationError.name ?
                            <ErrorMessage 
                                text={"Name must be between 3 and 5 symbols"}
                            /> : null
                    }
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="name">Email</InputLabel>
                    <OutlinedInput
                        fullWidth
                        required
                        type='email'
                        id="email"
                        label="Required"
                        value={values.email}
                        onChange={handleChange('email')}
                        error={validationError.email}
                    />
                    {
                        validationError.email ?
                            <ErrorMessage 
                                text={"Enter valid email"}
                            /> : null
                    }
                </FormControl>
                
                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        fullWidth
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        error={validationError.password}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end">
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    {
                        validationError.password ?
                            <ErrorMessage 
                                text={"Password must be minimum eight characters, at least one letter and one number"}
                            /> : null
                    }
                </FormControl>

                <Button 
                    variant='contained' 
                    color="success"
                    onClick={submitForm}
                >
                    {
                        isLoginMode ? 'Sign In' : 'Sign Up'
                    }
                </Button>

                <Typography variant="body2" style={{textAlign: 'center'}}> 
                    {
                        isLoginMode ? 'Do not have an account?' : 'Already have an account?'
                    }
                    <Button 
                        size="small" 
                        color="success"
                        onClick={() => setIsLoginMode(prev => !prev)}
                    >
                        {
                            isLoginMode ? 'Sign Up' : 'Sign In'
                        }
                    </Button>
                </Typography>
            </form>
        </div>
    </>
    )
}

export default Authorization