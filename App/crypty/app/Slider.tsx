import React, { useState } from 'react';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, ImageBackground } from 'react-native';

/*import TutorialStyles from './estilos/TutorialStyles.css';*/

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        <Slide1 />,
        <Slide2 />,
        <Slide3 />,
        <Slide4 />
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <View style={styles.container2}>
        <View style={styles.container}>
            <div className='slider'>
            <Text style={styles.header}>{slides[currentIndex]}</Text>
            </div>
            <button className='prev' onClick={prevSlide}>←</button>
            <button className='next' onClick={nextSlide}>→</button>
        </View>
        </View>
    );
};

export default Slider;


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