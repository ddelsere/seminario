
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, ImageBackground } from 'react-native';

const Slide1 = () => {

    return(
        
        <View style={styles.container}>
            <Text style={styles.header}>Y listo!</Text>
            
            <Image
            style={styles.image}
            source={require('../assets/images/Tuto4.png')}
             />
             <Text style={styles.header2}>Recorda que tambien se puede validar mediante URL</Text>
        </View>

    );
}

//<Image source={{ uri: imageUri }} style={styles.image} />

export default Slide1;



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
        width: 300,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#5400FF',
        padding: 10,
    },
    header: {
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },
    header2: {
        fontSize: 20,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
        resizeMode:'contain',
        borderColor: '#fa8072',
        borderWidth: 2,
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

