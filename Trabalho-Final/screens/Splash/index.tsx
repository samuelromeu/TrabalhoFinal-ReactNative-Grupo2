import React, { useEffect } from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'

import splashJson from '../../assets/splash.json'

export default function SplashScreen() {
    const navigation = useNavigation()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: 'Feed' }]
            }))
        }, 1700)

        return () => clearTimeout(timeout)
    }, [navigation])

    return (
        <View>
            <LottieView
                source={splashJson}
                autoPlay
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}
            />
        </View>
    );
}