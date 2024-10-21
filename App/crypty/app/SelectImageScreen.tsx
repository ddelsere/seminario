import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

type RootStackParamList = {
  SelectImage: undefined;
  ValidateImage: { imageUri: string };
};

type SelectImageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectImage'>;

export default function SelectImageScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigation = useNavigation<SelectImageScreenNavigationProp>();

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
    <View style={styles.container}>
      <Text style={styles.header}>Validar imagen</Text>
      <View style={styles.uploadContainer}>
        <Ionicons name="cloud-upload-outline" size={50} color="white" />
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Subir foto</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#00E3FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: '#181818',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
