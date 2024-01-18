import React, { createContext, useContext, useState } from "react";
import { TUser } from "../auth/reducer";
import { getDebugData, getDebugData2 } from "../debugExcels/getData";

export type AuthData = {
    accessToken: string,
    userAttributes: TUser
}

type AuthContext = {
    authData?: AuthData
    setAuthData: (data: AuthContext['authData']) => void;
}

const defaultAuthContext: AuthContext = {
    authData: undefined,
    setAuthData: function (value) { this.authData = value; },
}
const AuthContext = createContext<AuthContext>(defaultAuthContext);



class ApiClient {
    constructor(
        private readonly authContext: AuthContext,
    ) { }
    async login(username: string, password: string) {
        this.authContext.setAuthData({ accessToken: username + ":" + password, userAttributes: { name: 'admin', level: 3, email: "e@mail.com" } })
        return this.authContext.authData
    }
    getToken() {
        return this.authContext.authData
    }
    getAuth() {
        return this.authContext.authData
    }
    async initialLogin() {
        return this.authContext.authData
    }

    async getMainTable(startDate: Date, endDate: Date) {
        console.log("getMainTable")
        return await getDebugData(startDate, endDate)
    }
    async getSeconderyTable(startDate: Date, endDate: Date) {
        console.log("getSeconderyTable")
        return await getDebugData2(startDate, endDate)
    }
}

export const userIsLoggedIn = () => {
    const authContext = useContext(AuthContext);
    return authContext.authData !== undefined;
}
const defaultApiClient = new ApiClient(defaultAuthContext);

const ApiClientContext = createContext<ApiClient>(defaultApiClient);

export const useApiClient = () => useContext(ApiClientContext);
