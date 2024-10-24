import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Alert,ImageBackground } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    SelectImage: undefined;
    ValidateImage: { imageUri: string };
    ResultScreen: { imageUri: string, validationResult: number };
  };
  
  type ValidateImageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ValidateImage'>;
  type ValidateImageScreenRouteProp = RouteProp<RootStackParamList, 'ValidateImage'>;
  
  export default function ValidateImageScreen({ route }: { route: ValidateImageScreenRouteProp }) {
    const navigation = useNavigation<ValidateImageScreenNavigationProp>();
    const { imageUri } = route.params;

    const [isLoading, setIsLoading] = useState(false);

    const validateImage = async () => {
        setIsLoading(true);
        try {
            console.log('validar')
            const response = await fetch('http://localhost:3000/validate/url', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ imageUri: imageUri, }),
            });

            const data = await response.json();
            setIsLoading(false);

            if (response.ok) {
                console.log(data);
                navigation.navigate('ResultScreen', {
                    imageUri: imageUri,
                    validationResult: data,
                });
                Alert.alert('Validación completada', 'La imagen ha sido validada correctamente.');
            } else {
                Alert.alert('Error', 'Hubo un problema al validar la imagen.');
            }
        } catch (error) {
            setIsLoading(false);
            Alert.alert('Error', 'No se pudo conectar con el servidor.');
        }
    };

    return (
        <View style={styles.container2}>
        <View style={styles.container}>
        <ImageBackground source={require('../assets/images/bg.png')} style={styles.background}>
            <Text style={styles.header}>Validar imagen</Text>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <Text style={styles.subText}>Imagen lista para validar</Text>
            <TouchableOpacity style={styles.validateButton} onPress={validateImage} disabled={isLoading}>
                {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Validar imagen</Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SelectImage')}>
                <Text style={styles.restartLink}>Volver a iniciar</Text>
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