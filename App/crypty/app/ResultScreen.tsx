import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
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
        <View style={styles.container}>
            <Text style={styles.header}>Validar imagen</Text>
            <Image source={{ uri: route.params.imageUri }} style={styles.image} />
            <Text style={styles.resultText}>Imagen validada.</Text>
            <Text style={styles.resultText}>
                {/* {`La imagen tiene altas probabilidades de ser ${route.params.validationResult >= 0.5 ? 'auténtica' : 'falsa'}.`} */}
                {`La imagen tiene ${route.params.validationResult}% probabilidades de ser generada con IA`}
            </Text>
            <TouchableOpacity style={styles.validateButton} onPress={() => navigation.navigate('SelectImage')}>
                <Text style={styles.buttonText}>Volver a iniciar</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('SelectImage')}>
        <Text style={styles.restartText}>Volver a iniciar</Text>
      </TouchableOpacity> */}
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
        backgroundColor: '#00E3FF',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 30,
    },
    buttonText: {
        color: '#181818',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

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