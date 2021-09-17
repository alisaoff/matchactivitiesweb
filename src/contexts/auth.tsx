import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  name: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: null | User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@MatchActivties:token');
    const user = localStorage.getItem('@MatchActivties:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signOut = useCallback(() => {
    localStorage.removeItem('@MatchActivties:token');
    localStorage.removeItem('@MatchActivities:user');

    setData({} as AuthState);
  }, []);

  const signIn = useCallback(async ({name, email, password }) => {
    console.log("Está salvando os seguintes dados:")
    console.log({name, email, password});
    const response = await api.post('/login', {
      name, 
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@MatchActivties:token', token);
    localStorage.setItem('@MatchActivties:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@MatchActivties:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };




/*import React, { createContext, useState, useEffect, useCallback } from 'react';
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
        api.defaults.headers.Authorization = `Baerer ${response.token}`;
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


export default AuthContext;*/


