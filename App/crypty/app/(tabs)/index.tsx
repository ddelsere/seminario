import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectImageScreen from '../SelectImageScreen';
import ValidateImageScreen from '../ValidateImageScreen';
import ResultScreen from '../ResultScreen';

type RootStackParamList = {
  SelectImage: undefined;
  ValidateImage: { imageUri: string };
  ResultScreen: { imageUri: string, validationResult: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // The only NavigationContainer in the app should be here
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="SelectImage" >
        <Stack.Screen name="SelectImage" component={SelectImageScreen} options={{ title: 'Seleccionar imagen' }}  />
        <Stack.Screen name="ValidateImage" component={ValidateImageScreen} options={{ title: 'Validar imagen' }} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title: 'Resultado' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
