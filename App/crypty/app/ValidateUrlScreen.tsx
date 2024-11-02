import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
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
      const result = await response.json();
      const validationResult = result.validationScore; // Assuming the API returns a number
      setLoading(false);
      // Navigate to ResultScreen with the validation result
      navigation.navigate('ResultScreen', {
        imageUri: route.params.url, // Pass URL here if necessary
        validationResult: validationResult,
      });
    } catch (error) {
      setLoading(false);
      console.error('Error validating URL:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Validar URL</Text>
      <Text style={styles.urlText}>{route.params.url}</Text>
      <TouchableOpacity style={styles.validateButton} onPress={validateUrl}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Validar URL</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SelectImage')}>
        <Text style={styles.restartText}>Volver a iniciar</Text>
      </TouchableOpacity>
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
  urlText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  validateButton: {
    backgroundColor: '#00E3FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#181818',
    fontSize: 16,
    fontWeight: 'bold',
  },
  restartText: {
    color: '#00E3FF',
    textDecorationLine: 'underline',
  },
});
