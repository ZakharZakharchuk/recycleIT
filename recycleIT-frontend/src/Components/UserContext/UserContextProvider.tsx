import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

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
    error: boolean
}
// create user context
const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider = ({ children }: any) => {
    // the value that will be given to the context
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const navigate = useNavigate();

    const signup = useCallback((name: string, email: string, password: string) => {
        // server request
        // if successful:
        setIsRegistered(true);

        // if nor successful:
        // setError(true)
    }, [])

    const signin = useCallback((email: string, password: string) => {
        // check if user is already authenticated
        if (!localStorage.getItem('user')) {
            // server request here
            // save user to localstorage if request successful
            const userMock = { name: 'Name', email: email, token: '12345'};
            localStorage.setItem('user', JSON.stringify({name: userMock.name, email: userMock.email, token: userMock.token}));
            setUser({...userMock});
            setIsLoggedIn(true);
            console.log('user in context provider: ', user);
            navigate('/');
            // in case request fails or rejects
            // setError(true)
        } 
    }, [navigate, user]);

    const signout = useCallback(() => {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            setUser(null);
            setIsLoggedIn(false);
        }
        navigate('/');
    }, []);

    // memoized context value to be passed to consumers
    const contextValue: UserContextType = useMemo(() => ({
        user,
        isLoggedIn,
        isRegistered,
        signup,
        signout,
        signin,
        error
    }), [user, isLoggedIn, isRegistered, signup, signout, signin, error])

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };