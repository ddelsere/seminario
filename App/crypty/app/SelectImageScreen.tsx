import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

type RootStackParamList = {
  SelectImage: undefined;
  TutorialCrypty: undefined;
  ValidateUrl: { url: string };
  ValidateImage: { imageUri: string };
  ResultScreen: { imageUri: string, validationResult: number };
  MasInfo: undefined;
};

type SelectImageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectImage'>;

export default function SelectImageScreen() {
  const [url, setUrl] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigation = useNavigation<SelectImageScreenNavigationProp>();

  useFocusEffect(
    React.useCallback(() => {
      // Clear the URL input when the screen is focused
      setUrl('');
    }, [])
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      navigation.navigate('ValidateImage', { imageUri: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.container2}>
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/bg.png')} style={styles.background}>
          <Image source={require('../assets/images/CryptyLogoMed.png')} />
          <Text style={styles.header}>Validar imagen</Text>
          <View style={styles.uploadContainer}>
            <Ionicons name="cloud-upload-outline" size={50} color="white" />
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.buttonText}>Subir foto</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.uploadContainer2}>
            <TextInput
              style={styles.input}
              placeholder="Enlace web de la imagen"
              placeholderTextColor="white"
              value={url}
              onChangeText={setUrl}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ValidateUrl', { url })}
            >
              <Text style={styles.buttonText}>Validar Foto</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fixToText}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('TutorialCrypty')}
            >
              <Text style={styles.buttonText}>Tutorial</Text>
            </TouchableOpacity>
            <Text style={styles.buttonText}> </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('MasInfo')}
            >
              <Text style={styles.buttonText}>FAQ</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
  },
  header: {
    fontSize: 24,
    color: 'white',
    marginBottom: 30,
  },
  uploadContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#5400FF',
    padding: 10,
  },
  uploadContainer2: {
    width: 200,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#5400FF',
    padding: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#5700AD',//#00E3FF Azul para volver atras
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',//#181818 Negro para volver atras
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#5400FF',
    color: 'white',

  },
});
