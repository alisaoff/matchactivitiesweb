import React, { createContext, useState, useEffect, useCallback } from 'react';
import { signInService } from '../services/auth';
import useLocalStorage from '../hooks/useLocalStorage';


const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    
    const [storageUser, setStorageUser, removeStorageUser] = useLocalStorage('@authApp: user');
    const [storageToken, setStorageToken, removeStorageToken] = useLocalStorage('@authApp: token');

    const [user, setUser] = useState({});


    useEffect(() => {

        if (storageUser && storageToken) {
            setUser(storageUser);
            // api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
        }       
    }, []);


    const signIn = useCallback( async () => {
    

        const response = await signInService();
        setUser(response.user);
        // api.defaults.headers.Authorization = `Baerer ${response.token}`;
        setStorageUser(response.user);
        setStorageToken(response.token);
 
    }, []);

    
    const signOut = useCallback( () => {
        removeStorageUser();
        removeStorageToken()
        setUser({});

    }, []);

    
    return (

        <AuthContext.Provider value={{ 
            signed: (user && user.name) ? true : false, 
            user, 
            signIn, 
            signOut, 
            
        }}>
            { children }
        </AuthContext.Provider>
    )
}


export default AuthContext;

/*import React from 'react';
import { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { useContext } from 'react';


interface User{
    name: string;
}

interface SignInCredentials {
    name: string;
    email: string;
    password: string;
}


interface AuthContextData{
    signed: boolean;
    user: User | null;
    signIn(credentials: SignInCredentials): Promise<void>; 
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ( {children}) => {

    const [user, setUser] = useState< User | null >(null);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await  AsyncStorage.getItem('@MatchActivties:user');
            const storagedToken = await AsyncStorage.getItem('@MatchActivties:token');

            if (storagedUser && storagedToken){
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
            }
        }
        loadStorageData();
    }, []);

    const signIn = useCallback(async ({name, email, password}) =>{
        const response = await api.post('/login', {
            name,
            email,
            password,
        });

        const {token, user} = response.data;
        
        await AsyncStorage.setItem('@MatchActivties:user', JSON.stringify(user));
        await AsyncStorage.setItem('@MatchActivties:token', token);

        api.defaults.headers.authorization = `Bearer ${token}`;

        setUser(user);
    }, []);

    function signOut(){
        AsyncStorage.clear().then(() =>{
            setUser(null);
        });
    }

    return ( 
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
        {children}
    </AuthContext.Provider>
    );
};

export function useAuth(){
    const context = useContext(AuthContext);
    
    return context;
}*/

