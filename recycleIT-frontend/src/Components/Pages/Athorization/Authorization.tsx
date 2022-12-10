import "./Authorization.css";
import {
    Typography,
    OutlinedInput,
    Button,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
    TextField,
    Box,
} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import { UserContext } from "../../UserContext/UserContextProvider";
import AlertMessageBox from "../../UI/AlertMessageBox/AlertMessageBox";
import LogoButton from "./../../../assets/LogoButton.svg";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEXPR, PASSWORD_REGEXPR } from "../../../util/constants";

interface IFormState {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
    showPassword: boolean;
}

const Authorization = () => {
    const user = useContext(UserContext);
    const [values, setValues] = useState<IFormState>({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        showPassword: false,
    });
    const [validationError, setValidationError] = useState({
        name: false,
        email: false,
        password: false,
        passwordsMatch: false,
        isFormInvalid: false,
    });

    const [isLoginMode, setIsLoginMode] = useState(true);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(user?.errorMessage || "");
    const navigate = useNavigate();

    if (user?.isLoggedIn) {
        navigate(-1);
    }

    useEffect(() => {
        if (user?.loading) {
            setLoading(true);
            setError(false);
        } else {
            setLoading(false);
        }
        if (user?.isRegistered) {
            setIsLoginMode(true);
        }
        if (user?.error) {
            setError(true);
            setErrorMessage(user.errorMessage);
        }
    }, [user]);

    useEffect(() => {
        setValues({
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
            showPassword: false,
        });
    }, [isLoginMode]);

    const validateForm = (
        name: string,
        email: string,
        password: string,
        repeatPassword: string
    ) => {
        let isNameInvalid = false,
            isEmailInvalid = false,
            isPasswordInvalid = false,
            doPasswordsMatch = false,
            isFormInvalid = false;

        if (!isLoginMode) {
            isNameInvalid = name.length < 3 || name.length > 15;
            doPasswordsMatch =
                !repeatPassword || !(password === repeatPassword);
        }
        isEmailInvalid = !EMAIL_REGEXPR.test(email);
        isPasswordInvalid = !PASSWORD_REGEXPR.test(password);
        isFormInvalid =
            isNameInvalid ||
            doPasswordsMatch ||
            isEmailInvalid ||
            isPasswordInvalid;

        setValidationError({
            name: isNameInvalid,
            email: isEmailInvalid,
            password: isPasswordInvalid,
            passwordsMatch: doPasswordsMatch,
            isFormInvalid: isFormInvalid,
        });

        return !isFormInvalid;
    };

    const handleChange =
        (prop: keyof IFormState) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleLoginModeChange = () => {
        setIsLoginMode((prev) => !prev);

        if (error) {
            setError(false);
        }

        setValidationError({
            name: false,
            email: false,
            password: false,
            passwordsMatch: false,
            isFormInvalid: false,
        });
        if (values.showPassword) {
            setValues({
                ...values,
                showPassword: !values.showPassword,
            });
        }
    };

    const submitForm = () => {
        if (
            validateForm(
                values.name,
                values.email,
                values.password,
                values.repeatPassword
            )
        ) {
            if (isLoginMode) {
                user?.signin(values.email, values.password);
            } else {
                user?.signup(values.name, values.email, values.password);
            }

            setValidationError({
                name: false,
                email: false,
                password: false,
                passwordsMatch: false,
                isFormInvalid: false,
            });
        } else {
            console.error("form invalid");
        }
    };

    return (
        <div className="form-container">
            <form className="form">
                <Box
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                    }}
                >
                    <img src={LogoButton} alt="logo" />
                    <Typography variant="h5" style={{ color: "green" }}>
                        {isLoginMode ? "Sign In" : "Sign Up"}
                    </Typography>
                </Box>
                <FormControl
                    style={{ display: isLoginMode ? "none" : "block" }}
                >
                    <TextField
                        fullWidth
                        required={true}
                        type="text"
                        id="name"
                        label="Username"
                        value={values.name}
                        onChange={handleChange("name")}
                        error={validationError.name}
                    />
                    {validationError.name ? (
                        <ErrorMessage
                            text={"Name must be between 3 and 15 symbols"}
                        />
                    ) : null}
                </FormControl>
                <FormControl>
                    <TextField
                        fullWidth
                        required={true}
                        type="email"
                        id="email"
                        label="Email"
                        value={values.email}
                        onChange={handleChange("email")}
                        error={validationError.email}
                    />
                    {validationError.email ? (
                        <ErrorMessage text={"Enter valid email"} />
                    ) : null}
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="password">Password *</InputLabel>
                    <OutlinedInput
                        id="password"
                        fullWidth
                        required={true}
                        label="Password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        error={validationError.password}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {validationError.password ? (
                        <ErrorMessage
                            text={
                                "Password must be minimum 8 characters, at least one letter and one number"
                            }
                        />
                    ) : null}
                </FormControl>

                <FormControl
                    style={{ display: isLoginMode ? "none" : "block" }}
                >
                    <InputLabel htmlFor="repeat-password">
                        Repeat password *
                    </InputLabel>
                    <OutlinedInput
                        id="repeat-password"
                        fullWidth
                        required={true}
                        label="Repeat password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.repeatPassword}
                        onChange={handleChange("repeatPassword")}
                        error={validationError.passwordsMatch}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {validationError.passwordsMatch ? (
                        <ErrorMessage text={"Passwords do not match"} />
                    ) : null}
                </FormControl>

                <Button
                    variant="contained"
                    color="success"
                    onClick={submitForm}
                >
                    {isLoginMode ? "Sign In" : "Sign Up"}
                </Button>

                <Typography variant="body2" style={{ textAlign: "center" }}>
                    {isLoginMode
                        ? "Do not have an account?"
                        : "Already have an account?"}
                    <Button
                        size="small"
                        color="success"
                        onClick={handleLoginModeChange}
                    >
                        {isLoginMode ? "Sign Up" : "Sign In"}
                    </Button>
                </Typography>
                {error && <AlertMessageBox error text={errorMessage} />}
                {loading && <AlertMessageBox loading text={"Loading..."} />}
            </form>
        </div>
    );
};

export default Authorization;
