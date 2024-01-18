
import { useApiClient } from "../services/ApiService";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { COLORS } from "../constants";
import { TextInput, Pressable, Text } from "react-native";
import { styles } from "../styles";
import { useAuthDispatch, useAuthState } from "../auth/context";
import { AuthActions } from "../auth/reducer";
import { saveAuthLocally } from "../services/LocalStorate";

export const LoginPage: React.FC = () => {
    const apiClient = useApiClient()
    const authContext = useAuthState()


    const dispatch = useAuthDispatch();

    const [loading, setLoading] = useState<boolean>(false);

    const signInUser = async (username, password) => {
        setLoading(true);
        apiClient.login(username, password)
            .then(auth => {
                setLoading(false);
                saveAuthLocally(auth)
                dispatch({
                    type: AuthActions.SignIn,
                    token: auth.accessToken,
                    userAttributes: { name: auth.userAttributes.name, email: auth.userAttributes.email, level: auth.userAttributes.level }
                });
            })
            .catch(e => {
                setLoading(false);
            })
            .finally(() => setLoading(false));
    };

    const [user, setUser] = useState('');
    const [password, setPwd] = useState('');

    const handleUserChange = (inputText) => {
        setUser(inputText);
    };

    const handlePwdChange = (inputText) => {
        setPwd(inputText);
    };

    const handleButtonPress = () => {
        signInUser(user, password)
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen options={{ headerStyle: { backgroundColor: COLORS.lightWhite } }} />
            <TextInput
                style={styles.textInput}
                placeholder="user"
                onChangeText={handleUserChange}
                value={user}
            />
            <TextInput
                style={styles.textInput}
                placeholder="password"
                onChangeText={handlePwdChange}
                value={password}
                secureTextEntry={true}
            />
            <Pressable

                onPress={handleButtonPress}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    styles.wrapperCustom,
                ]}
            ><Text style={styles.text}>to Login</Text></Pressable>

        </SafeAreaView>
    )
}