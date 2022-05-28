import React from 'react'
import { View, KeyboardAvoidingView, ImageBackground, Text } from 'react-native'
import { LoginTypes } from '../../types/Screen.types';

export default function Login({ navigation }: LoginTypes) {
    return (
        <View>
            <ImageBackground source={require('../../assets/loginBack')}>
                <View>
                    <Text>LOGIN</Text>
                    
                </View>
            </ImageBackground>
        </View>
    )
}