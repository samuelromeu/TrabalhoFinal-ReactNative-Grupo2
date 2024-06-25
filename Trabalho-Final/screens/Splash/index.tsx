import React, { useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { useAuth } from '../../service/AuthContext';

import splashJson from '../../assets/splash.json';

export default function SplashScreen() {
    const navigation = useNavigation();
    const { signed } = useAuth();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: signed ? "Main" : "Login" }]
            }));
        }, 1700);

        return () => clearTimeout(timeout);
    }, [navigation, signed]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView
                source={splashJson}
                autoPlay
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}
            />
        </View>
    );
}