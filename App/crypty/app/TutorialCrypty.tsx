import Slider from './Slider';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, Image } from 'react-native';

type RootStackParamList = {
    SelectImage: undefined;
    TutorialCrypty: undefined;
    ResultScreen: { imageUri: string, validationResult: number };
};


type TutorialCryptyNavigationProp = StackNavigationProp<RootStackParamList, 'TutorialCrypty'>;
type TutorialCryptyRouteProp = RouteProp<RootStackParamList, 'TutorialCrypty'>;


export default function TutorialCrypty({ route }: { route: TutorialCryptyRouteProp }) {
    const navigation = useNavigation<TutorialCryptyNavigationProp>();

    return(
        <View style={styles.container2}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/bg.png')} style={styles.background}>
                
                <Text style={styles.header}>Como usar Crypty</Text>
                    {<Slider/>}

            <TouchableOpacity onPress={() => navigation.navigate('SelectImage')}>
                <Text style={styles.restartLink}>Volver al inicio</Text>
            </TouchableOpacity>
        </ImageBackground>
        </View>
        </View>
    );
}




const styles = StyleSheet.create({
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181818',
    },
    background: {
        flex: 1,
        width: 500,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181818',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181818',
    },
    header: {
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    subText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 20,
    },
    validateButton: {
        backgroundColor: '#5700AD',//#00E3FF Azul para volver atras
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 30,
    },
    buttonText: {
        color: 'white',//#181818 Negro para volver atras
        fontSize: 16,
        fontWeight: 'bold',
    },
    restartLink: {
        color: '#00E3FF',
        marginTop: 20,
        textDecorationLine: 'underline',
    },
});