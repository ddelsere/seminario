import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, ImageBackground } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SelectImage: undefined;
  ValidateImage: { imageUri: string };
  ValidateUrl: { url: string };
  ResultScreen: { imageUri: string, validationResult: number };
};

type ValidateUrlScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ValidateUrl'>;
type ValidateUrlScreenRouteProp = RouteProp<RootStackParamList, 'ValidateUrl'>;

export default function ValidateUrlScreen({ route }: { route: ValidateUrlScreenRouteProp }) {
  const navigation = useNavigation<ValidateUrlScreenNavigationProp>();
  // const route = useNavigation<ValidateUrlScreenRouteProp>();
  console.log(route.params)
  // const { url } = route.params.url;

  const [loading, setLoading] = React.useState(false);

  const validateUrl = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/validate/url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: route.params.url,
        }),
      });
      const data = await response.json();
      // const validationResult = result.validationScore; // Assuming the API returns a number
      setLoading(false);
      // Navigate to ResultScreen with the validation result
      navigation.navigate('ResultScreen', {
        imageUri: route.params.url, // Pass URL here if necessary
        validationResult: data,
      });
    } catch (error) {
      setLoading(false);
      console.error('Error validating URL:', error);
    }
  };

  return (
    <View style={styles.container2}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/bg.png')} style={styles.background}>
                    <Text style={styles.header}>Validar imagen</Text>
                    <Image source={{ uri: route.params.url }} style={styles.image} />
                    <Text style={styles.subText}>Imagen lista para validar</Text>
                    <TouchableOpacity style={styles.validateButton} onPress={validateUrl} disabled={loading}>
                        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Validar imagen</Text>}
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