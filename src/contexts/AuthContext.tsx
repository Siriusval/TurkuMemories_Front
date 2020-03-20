import React, { ReactNode, useState } from 'react';
interface IAuthContext {
    isLogged: boolean;
    login(): void;
    logout(): void;
}

const AuthContext = React.createContext<IAuthContext | undefined>(undefined);

export const useAuthContext = () => {
    const c = React.useContext(AuthContext);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
};

export const AuthProvider: React.FC<ReactNode | any> = props => {
    const [isLogged, setIsLogged] = useState<boolean>(props.isLogged);

    const login = () => {
        setIsLogged(true);
    };

    const logout = () => {
        setIsLogged(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLogged,
                login,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
