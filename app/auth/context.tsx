import React, { FC, memo, ReactNode, useReducer } from 'react';
import {
    authReducer,
    IAuthReducer,
    TCurrentUser,
} from './reducer';

const AuthStateContext = React.createContext<TCurrentUser>({
    userToken: null,
    isLoading: false,
    attributes: null,
});
const AuthDispatchContext = React.createContext<(d: IAuthReducer) => void>(
    () => { },
);

interface iAuthProviderProps {
    children: ReactNode;
}
const AuthProvider: FC<iAuthProviderProps> = memo(({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        isLoading: true,
        userToken: null,
        attributes: null,
    });
    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
});

function useAuthState() {
    const context = React.useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }
    return context;
}
const useAuthDispatch = () => {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error('useAuthDispatch must be used within a AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuthState, useAuthDispatch };