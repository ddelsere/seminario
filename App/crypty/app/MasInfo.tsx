import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ImageBackground , ActivityIndicator,ScrollView } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';



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
        <ScrollView>
        <View style={styles.container}>

        <ImageBackground source={require('../assets/images/bg.png')} style={styles.background}>
        <View style={styles.fixToTextC}><View style={styles.fixToTextP}>
              <Text style={styles.header}>¿Qué hace única a Crypty en la detección de imágenes generadas por inteligencia artificial?</Text>
          </View>
          
          <View style={styles.fixToTextR}>
              <Text style={styles.Text}>Crypty se destaca por su avanzada tecnología de detección, que identifica si una imagen ha sido creada o modificada con inteligencia artificial. Nuestro sistema detecta patrones y texturas que pueden pasar desapercibidos para el ojo humano, brindando una precisión excepcional en la identificación de contenido sintético.</Text>
          </View></View>
          <View style={styles.fixToTextC}><View style={styles.fixToTextP}>
              <Text style={styles.header}>¿Cómo asegura Crypty que los resultados de detección sean confiables?</Text>
          </View>
          
          <View style={styles.fixToTextR}>
              <Text style={styles.Text}>El motor de Crypty está en constante actualización para adaptarse a los últimos avances en IA, incluyendo modelos de generación recientes. Esto asegura que nuestros usuarios obtengan siempre resultados confiables, incluso frente a las tecnologías de generación más nuevas.</Text>
          </View></View>
          <View style={styles.fixToTextC}><View style={styles.fixToTextP}>
              <Text style={styles.header}>¿Es segura la información que subo a Crypty?</Text>
          </View>
          <View style={styles.fixToTextR}>
              <Text style={styles.Text}>Sí, en Crypty la seguridad y privacidad son prioridades. Utilizamos centros de datos con certificaciones de seguridad de alto estándar y aplicamos cifrado avanzado para proteger la transmisión de tus datos, garantizando que tu información esté segura en todo momento.</Text>
          </View></View>
          <View style={styles.fixToTextC}><View style={styles.fixToTextP}>
              <Text style={styles.header}>¿Crypty cumple con normativas de privacidad internacionales?</Text>
          </View>
          <View style={styles.fixToTextR}>
              <Text style={styles.Text}>¡Claro que sí! Crypty sigue estándares internacionales como el GDPR para proteger los datos de nuestros usuarios, incluyendo opciones para procesar y eliminar los datos de manera segura y bajo normativa, cuando así se necesite.
              </Text>
          </View> </View>
          <View style={styles.fixToTextC}><View style={styles.fixToTextP}>
              <Text style={styles.header}>¿Por qué elegir Crypty para la detección de contenido manipulado?
              </Text>
          </View>
          
          <View style={styles.fixToTextR}>
              <Text style={styles.Text}>Con Crypty, obtienes una combinación única de precisión y seguridad. Nuestro sistema detecta contenido generado por IA con fiabilidad, mientras cumple con altos estándares de privacidad, permitiéndote analizar tus imágenes con confianza y proteger su autenticidad.</Text>
          </View> </View>
          
          
            <TouchableOpacity style={styles.validateButton} onPress={() => navigation.navigate('SelectImage')}>
                <Text style={styles.buttonText}>Volver al inicio</Text>
            </TouchableOpacity>
            
            </ImageBackground>
            </View> 
            </ScrollView>
        </View>     
       
    );
}

const styles = StyleSheet.create({
    fixToTextC: {
        width: 410,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderRadius: 20,
        borderColor: '#5400FF',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
      },
    fixToTextP: {
        width: 400,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5400FF',
        borderRadius: 20,
        borderColor: '#1c1c1c',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
      },
      fixToTextR: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        padding: 10,
        marginBottom: 20,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181818',
    },
    header: {
        fontSize: 18,
        color: 'white',
        marginBottom: 20,
    },
    
    Text: {
        fontSize: 14,
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
        height: 1000,
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
