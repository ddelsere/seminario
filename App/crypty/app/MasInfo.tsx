import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ImageBackground , ActivityIndicator } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  SelectImage: undefined;
  ValidateImage: { imageUri: string };
  ValidateUrl: { url: string };
  ResultScreen: { imageUri: string, validationResult: number };
  MasInfo:undefined;
};
type MasInfoNavigationProp = StackNavigationProp<RootStackParamList, 'MasInfo'>;
type MasInfoRouteProp = RouteProp<RootStackParamList, 'MasInfo'>;

export default function MasInfo({ route }: { route: MasInfoRouteProp }) {
    const navigation = useNavigation<MasInfoNavigationProp>();

    return (
        <View style={styles.container2}>
        <View style={styles.container}>
        <ImageBackground source={require('../assets/images/bg.png')} style={styles.background}>

        <View style={styles.ContainerP}>
              <Text style={styles.header}>Pregunta 1</Text>
          </View>
          <View style={styles.ContainerR}>
              <Text style={styles.Text}>Respuesta 1</Text>
          </View>
          <View style={styles.ContainerP}>
              <Text style={styles.header}>Pregunta 2</Text>
          </View>
          <View style={styles.ContainerR}>
              <Text style={styles.Text}>Respuesta 2</Text>
          </View>

            <TouchableOpacity style={styles.validateButton} onPress={() => navigation.navigate('SelectImage')}>
                <Text style={styles.buttonText}>Volver al inicio</Text>
            </TouchableOpacity>
            </ImageBackground>
            </View> 
        </View>     
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181818',
    },
    header: {
        fontSize: 26,
        color: 'white',
        marginBottom: 20,
    },
    
    Text: {
        fontSize: 20,
        color: 'white',
        marginBottom: 20,
    },
    ContainerP: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#5400FF',
        padding: 5,
        marginBottom:15,
     },
     ContainerR: {
        width: 300,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#5400FF',
        padding: 5,
        marginBottom:50,
     },
    restartText: {
        color: '#00E3FF',
        textDecorationLine: 'underline',
        marginTop: 20,
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
});
