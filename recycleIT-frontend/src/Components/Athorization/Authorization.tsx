import './Authorization.css';
import {
    Typography,
    OutlinedInput,
    Button,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
    TextField
} from '@mui/material';
import {useState} from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Header from '../Header/Header';
import ErrorMessage from './../helpers/ErrorMessage/ErrorMessage'


interface IFormState {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
    showPassword: boolean;
    isFormValid: boolean
}

interface IFormProps {
    submitForm: () => void
}

// minimum eight characters, at least one letter and one number and no spaces
const passwordRegexpr = /^(?=.*[A-Za-z])(?=.*\d)(?=^\S*$)[A-Za-z\d]{8,}$/

const emailRegexpr = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i

const Authorization = () => {
    const [values, setValues] = useState<IFormState>({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        showPassword: false,
        isFormValid: false
    });
    const [validationError, setValidationError] = useState({
        name: false,
        email: false,
        password: false,
        passwordsMatch: false,
    });

    const [isLoginMode, setIsLoginMode] = useState(false);

    const validateForm = (name: string, email: string, password: string, repeatPassword: string) => {
        let isNameInvalid = false,
            isEmailInvalid = false,
            isPasswordInvalid = false,
            doPasswordsMatch = false;
        
        if (!isLoginMode) {
            isNameInvalid = name.length < 3 || name.length > 15;
        }
        isEmailInvalid = !emailRegexpr.test(email);
        
        isPasswordInvalid = !passwordRegexpr.test(password);

        doPasswordsMatch = password === repeatPassword;
        
        setValidationError({
            name: isNameInvalid,
            email: isEmailInvalid,
            password: isPasswordInvalid,
            passwordsMatch: !doPasswordsMatch
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

    const handleLoginModeChange = () => {
        setIsLoginMode(prev => !prev);

        // clear the errors if they occured on previous form state
        setValidationError({
            name: false,
            email: false,
            password: false,
            passwordsMatch: false
        });
        // if password was visible - hide it 
        if (values.showPassword) {
            setValues({
                ...values,
                showPassword: !values.showPassword,
            });
        }
    }

    const submitForm = () => {
        validateForm(values.name, values.email, values.password, values.repeatPassword)
        if (values.isFormValid) {
            console.log('submit form');
            setValidationError({
                name: false,
                email: false,
                password: false,
                passwordsMatch: false
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
                    <TextField
                        fullWidth
                        required={true}
                        type='text'
                        id="name"
                        label="Username"
                        value={values.name}
                        onChange={handleChange('name')}
                        error={validationError.name}
                    />
                    {
                        validationError.name ?
                            <ErrorMessage 
                                text={"Name must be between 3 and 15 symbols"}
                            /> : null
                    }
                </FormControl>

                <FormControl>
                    <TextField
                        fullWidth
                        required={true}
                        type='email'
                        id="email"
                        label="Email"
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
                    <InputLabel htmlFor="password">Password *</InputLabel>
                    <OutlinedInput
                        id="password"
                        fullWidth
                        required={true}
                        label="Password"
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
                    />
                    {
                        validationError.password ?
                            <ErrorMessage 
                                text={"Password must be minimum 8 characters, at least one letter and one number"}
                            /> : null
                    }
                </FormControl>

                <FormControl style={{display: isLoginMode ? 'none' : 'block'}}>
                    <InputLabel htmlFor="repeat-password">Repeat password *</InputLabel>
                    <OutlinedInput
                        id="repeat-password"
                        fullWidth
                        required={true}
                        label="Repeat password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.repeatPassword}
                        onChange={handleChange('repeatPassword')}
                        error={validationError.passwordsMatch}
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
                    />
                    {
                        validationError.passwordsMatch ?
                            <ErrorMessage 
                                text={"Passwords do not match"}
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
                        onClick={handleLoginModeChange}
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