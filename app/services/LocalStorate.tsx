import { AuthData } from "./ApiService";


export function saveAuthLocally(authContext: AuthData) {
    const jsonString = JSON.stringify(authContext)
    localStorage.setItem('AuthContext', jsonString);
}

export function getLocalAuth(): AuthData{
    const authContextString = localStorage.getItem('AuthContext');
    return JSON.parse(authContextString)
}


