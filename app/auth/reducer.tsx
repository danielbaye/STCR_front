export enum AuthActions {
    RestoreToken = 'RESTORE_TOKEN',
    SignIn = 'SIGN_IN',
    SignOut = 'SIGN_OUT',
    Loading = 'LOADING',
}

export type TCurrentUser = {
    userToken: string | null;
    isLoading: boolean;
    attributes: TUser | null;
};

export type TUser = {
    name: string;
    email: string;
    level: number;
};
export interface IAuthReducer {
    type: AuthActions | '';
    token: string;
    userAttributes: TUser | undefined;
}

export const authReducer = (state: TCurrentUser, action: IAuthReducer) => {
    switch (action.type) {
        case AuthActions.RestoreToken:
            return {
                ...state,
                userToken: action.token,
                attributes: action.userAttributes,
                isLoading: false,
            };
        case AuthActions.SignIn:
            return {
                ...state,
                userToken: action.token,
                attributes: action.userAttributes,
            };
        case AuthActions.SignOut:
            return {
                ...state,
                userToken: null,
                attributes: null,
            };
        default:
            return state;
    }
};