
import { useApiClient } from "../services/ApiService";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { COLORS } from "../constants";
import { TextInput, Pressable, Text } from "react-native";
import { styles } from "../UI/loginPageStyles";
import { useAuthDispatch, useAuthState } from "../auth/context";
import { AuthActions } from "../auth/reducer";
import { saveAuthLocally } from "../services/LocalStorate";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

    const initialValues = {
        username: '',
        password: '',
    };
    const schema = Yup.object().shape({
        firstName: Yup.string().min(4).required('username is required'),
        password: Yup.string().min(4).required('password is required')
    });
    const onSubmit = (values) => {
        console.log("submit")
        // Handle form submission, e.g., send data to server
        console.log('Form submitted with values:', values);
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
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit} // Make sure onSubmit is correctly defined
            >
                <Form style={styles.form}>
                    <Field type="text" placeholder="username" name="username" style={styles.input} />
                    <ErrorMessage name="username" component="div" />

                    <Field type="password" placeholder="password" name="password" style={styles.input} />
                    <ErrorMessage name="password" component="div" />

                    <button type="submit" style={styles.button}>
                        Submit
                    </button>
                </Form>
            </Formik>
            {/* 
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
            ><Text style={styles.text}>to Login</Text></Pressable> */}

        </SafeAreaView>
    )
}