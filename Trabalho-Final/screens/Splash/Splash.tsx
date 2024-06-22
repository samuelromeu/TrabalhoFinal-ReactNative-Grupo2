import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native'

import splashJson from '../../assets/splash.json'
import { useNavigation, CommonActions } from '@react-navigation/core'

export interface SplashScreenProps {
}

const size = Dimensions.get('window').width * 0.5

const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{name: 'Home'}]
            }))
        }, 4000);
    }, [])

    return (
        <View style={styles.container}>
            <LottieView source={splashJson} style={{width: size, height: size}} 
                autoPlay loop resizeMode='contain' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default SplashScreen