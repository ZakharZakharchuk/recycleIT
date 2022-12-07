import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthService } from "../../Services/authorizationService";

interface User {
    name: string,
    email: string,
    token: string
}

interface UserContextType {
    user: User | null,
    isLoggedIn: boolean,
    isRegistered: boolean,
    signout: () => void,
    signup: (name: string, email: string, password: string) => void,
    signin: (email: string, password: string) => void,
    loading: boolean,
    error: boolean,
    errorMessage: string
}
// create user context
const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider = ({ children }: any) => {
    // the value that will be given to the context
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Error occured');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const authService = new AuthService();

    useEffect(() => {
        const userFromLocal = localStorage.getItem('user');
        if (userFromLocal) {
            const user = JSON.parse(userFromLocal);
            setUser({name: user.name, email: user.email, token: user.token});
            setIsLoggedIn(true);
        }
    }, [])

    useEffect(() => {
        console.log(location.pathname);
        // if we leave the authorization page, 
        // but the error is still present:
        if (location.pathname !== '/authorization' && error) {
            setError(false)
        }
    }, [error, location])

    const signup = useCallback((name: string, email: string, password: string) => {
        if (error) {
            setError(false)
        }
        // server request
        setLoading(true);
        authService.register(name, email, password)
            .then(() => {
                setIsRegistered(true);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                setErrorMessage('Error registering user');
                setError(true);
            })
    }, [authService, error])

    const signin = useCallback((email: string, password: string) => {
        console.log(email);
        if (error) {
            setError(false)
        }
        setLoading(true);
        // check if user is already authenticated
        if (!localStorage.getItem('user')) {
            // server request here
            authService.login(email, password)
                .then(res => {
                    console.log(res);
                    // save user to localstorage if request successful
                    const user = res?.data;
                    localStorage.setItem('user', JSON.stringify({name: user.username, email: email, token: user.token}));
                    setUser({name: user.username, email: email, token: user.token});
                    setIsLoggedIn(true);
                    setLoading(false);
                    navigate('/');
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                    setErrorMessage('Error signing in');
                    setError(true);
                })
        } 
    }, [authService, error, navigate]);

    const signout = useCallback(() => {
        const currentRoute = location.pathname;
        if (error) {
            setError(false)
        }
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            setUser(null);
            setIsLoggedIn(false);
        }
        navigate(currentRoute);
    }, [error, navigate]);

    // memoized context value to be passed to consumers
    const contextValue: UserContextType = useMemo(() => ({
        user,
        isLoggedIn,
        isRegistered,
        signup,
        signout,
        signin,
        loading,
        error,
        errorMessage
    }), [user, isLoggedIn, isRegistered, signup, signout, signin, loading, error, errorMessage])

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };