
import { styles } from "../styles"
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from "react";
import { useAuthDispatch, useAuthState } from "../auth/context";
import { MainDashboard } from "./MainDashboard";
import { LoginPage } from "./LoginPage";
import { AuthActions } from "../auth/reducer";
import { getLocalAuth } from "../services/LocalStorate";

const Stack = createStackNavigator();

export const RouteNavigation = () => {
    const userToken = useAuthState();
    const dispatch = useAuthDispatch();

    useEffect(() => {
        if (!userToken.userToken) {
            const localAuth = getLocalAuth()
            if (localAuth)
                dispatch({
                    type: AuthActions.RestoreToken,
                    token: localAuth.accessToken,
                    userAttributes: localAuth.userAttributes
                })
        }
    }, [dispatch]);
    return (
        <Stack.Navigator >
            {userToken?.userToken ?
                <Stack.Screen
                    name="Home"
                    component={MainDashboard}
                    options={{ title: 'Welcome' }}
                />
                :
                <Stack.Screen name="login" component={LoginPage} />
            }
        </Stack.Navigator>
    )
}

