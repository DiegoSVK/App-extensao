import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/fundo.png')}  
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bem-vindo ao App de Alimentos</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Search')}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(250, 128, 114, 0.6)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#FA8072',
  },
});

export default HomeScreen;
