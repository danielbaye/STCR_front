
import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './auth/context';
import { RouteNavigation } from './routes/RouteNavigation';

const App = () => {
    const spy = 0;
    return (
        <AuthProvider>
            <RouteNavigation />
        </AuthProvider>
    )
}
export default App;