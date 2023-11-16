import React from 'react';
import { View, Image, StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

const Welcome = () => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.imagen}
      />

      <TouchableOpacity onPress={handlePress}>
        <AntDesign name="rightcircle" size={60} color="#BB9785" style={styles.right}/>
      </TouchableOpacity>
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
  right:{
    top:-28,
    right:-80,
  }
});

export default Welcome;