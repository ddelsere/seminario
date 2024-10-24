import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
    SelectImage: undefined;
    ValidateImage: { imageUri: string };
    ResultScreen: { imageUri: string, validationResult: number };
};

type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ResultScreen'>;
type ResultScreenRouteProp = RouteProp<RootStackParamList, 'ResultScreen'>;

export default function ResultScreen({ route }: { route: ResultScreenRouteProp }) {
    const navigation = useNavigation<ResultScreenNavigationProp>();


    return (
        <View style={styles.container2}>

        <View style={styles.container}>
        <ImageBackground source={require('../assets/images/bg.png')} style={styles.background}>
            <Text style={styles.header}>Validar imagen</Text>
            
            <Image source={{ uri: route.params.imageUri }} style={styles.image} />
            <Text style={styles.resultText}>Imagen validada.</Text>
              
            <Text style={styles.resultText}>
                    {/* {`La imagen tiene altas probabilidades de ser ${route.params.validationResult >= 0.5 ? 'auténtica' : 'falsa'}.`} */}
                    {ColorTexto(route.params.validationResult)}
            </Text>
            <Text style={styles.resultText}></Text>
            <TouchableOpacity style={styles.validateButton} onPress={() => navigation.navigate('SelectImage')}>
            
                <Text style={styles.buttonText}>Volver a iniciar</Text>
            </TouchableOpacity>
            </ImageBackground>
            </View> 
        </View>     
            
    );
}
/* Background
<View style={styles.container}>
<ImageBackground source={require('../assets/images/bg.png')} style={styles.background}>
</ImageBackground>
</View>
   */         

const styles = StyleSheet.create({
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
        width: 200,
        height: 200,
        borderRadius: 20,
        marginBottom: 20,
    },
    image2: {
        flex: 1,
        justifyContent: 'center',
    },

    uploadContainer: {
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'green',
        padding: 10,
     },
     uploadContainerTrue: {
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'green',
        padding: 10,
     },
     uploadContainerFalse: {
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'Red',
        padding: 10,
     },
     uploadContainerInsecure: {
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'yellow',
        padding: 10,
     },
    
    resultTextTrue: {
        fontSize: 18,
        color: 'green',
        marginBottom: 10,
        textAlign: 'center',
    },
    resultTextInsecure: {
        fontSize: 18,
        color: 'yellow',
        marginBottom: 10,
        textAlign: 'center',
    },
    resultTextFalse: {
        fontSize: 18,
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    resultText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
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


const ColorTexto = (porcentaje:number) => {
    if (porcentaje<33){
        return <View style={styles.uploadContainerTrue}> <Text style={styles.resultTextTrue}> 
        {/* {`La imagen tiene altas probabilidades de ser ${route.params.validationResult >= 0.5 ? 'auténtica' : 'falsa'}.`} */}
        {`La imagen tiene ${porcentaje}% probabilidades de ser generada con IA`}
        </Text> </View>
    }else if (porcentaje>66){
        return <View style={styles.uploadContainerFalse}><Text style={styles.resultTextFalse}>
        {/* {`La imagen tiene altas probabilidades de ser ${route.params.validationResult >= 0.5 ? 'auténtica' : 'falsa'}.`} */}
        {`La imagen tiene ${porcentaje}% probabilidades de ser generada con IA`}
        </Text> </View>
    }else{
        return<View style={styles.uploadContainerInsecure}> <Text style={styles.resultTextInsecure}> 
        {/* {`La imagen tiene altas probabilidades de ser ${route.params.validationResult >= 0.5 ? 'auténtica' : 'falsa'}.`} */}
        {`La imagen tiene ${porcentaje}% probabilidades de ser generada con IA`}
        </Text></View>
    }
}
/*
if (${route.params.validationResult}<35)
                {
                <Text style={styles.resultTextTrue}>
                    {}
                    {`La imagen tiene ${route.params.validationResult}% probabilidades de ser generada con IA`}
                </Text>
                }
            elif(${route.params.validationResult}>65)
            {
                <Text style={styles.resultTextFalse}>
                    {}
                    {`La imagen tiene ${route.params.validationResult}% probabilidades de ser generada con IA`}
                </Text>
            }
            else
            {
                <Text style={styles.resultTextInsecure}>
                    {}
                    {`La imagen tiene ${route.params.validationResult}% probabilidades de ser generada con IA`}
                </Text>
    }
*/