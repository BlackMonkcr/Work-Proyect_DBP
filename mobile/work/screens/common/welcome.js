import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.imagen} />

      <Button onPress={handlePress} title='Comienza Ahora!' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12229D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  buttonContainer: {
    // Ajusta el tamaño del área táctil según sea necesario
    padding: 10,
  },
  right: {
    top: -28,
    right: -80,
  },
});

export default Welcome;
