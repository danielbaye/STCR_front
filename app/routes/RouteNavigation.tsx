
import { styles } from "../styles"
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from "react";
import { useAuthDispatch, useAuthState } from "../auth/context";
import { MainDashboard } from "./MainDashboard";
import { LoginPage } from "./LoginPage";
import { AuthActions } from "../auth/reducer";
import { getLocalAuth } from "../services/LocalStorate";
import { useApiClient } from "../services/ApiService";

const Stack = createStackNavigator();

export const RouteNavigation = () => {
    const apiClient = useApiClient()
    const userToken = useAuthState();
    const dispatch = useAuthDispatch();

    const updateDispatch = async () => {
        const localAuth = getLocalAuth()
        console.log(localAuth)
        if (await apiClient.checkToken(localAuth))
            dispatch({
                type: AuthActions.RestoreToken,
                token: localAuth.accessToken,
                userAttributes: localAuth.userAttributes
            })
    }

    useEffect(() => {
        updateDispatch()
    }, [dispatch]);

    return (
        <Stack.Navigator >
            {userToken?.userToken ?
                <Stack.Screen
                    name="Home"
                    component={MainDashboard}
                />
                :
                <Stack.Screen name="login" component={LoginPage} />
            }
        </Stack.Navigator>
    )
}

