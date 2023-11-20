import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const navigation = useNavigation();

  const handleSignIn = () => {
    console.log('Signing in...');
    navigation.navigate('NavBarClient')
  };

  const handlePress = () => {
    navigation.navigate('SignupWorker');
  }

  const navigateToRegister = () => {
    navigation.navigate('SignupClient');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/circles.png')}
        style={styles.circles}
      />
      <Image
        source={require('../../assets/logo3.png')}
        style={styles.imagen}
      />
      <Text style={styles.login}>Login</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={24} color="#12229D" />
        <TextInput
          style={styles.input}
          placeholder="Email or Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.passwordContainer}>
        <MaterialIcons name="lock-outline" size={24} color="#12229D" />
        <TextInput
          style={styles.password}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons name={isPasswordVisible ? 'ios-eye-off-outline' : 'ios-eye-outline'} size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn} >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Or work with us</Text>

      <TouchableOpacity style={styles.workerButton} onPress={handlePress}>
        <MaterialCommunityIcons name="run-fast" size={30} color="#12229D" />
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToRegister}>
            <Text style={styles.registerText}>
            Don’t have account?{' '}
              <Text style={styles.registerLink}>Sign Up</Text>
            </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
  circles:{
    width: 200,
    height: 200,
    left:110,
    top:40,
  },
  imagen: {
    width: 400,
    height: 400,
    bottom: 130,
  },
  login: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#12229D',
    bottom: 250,
    right: 145,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: '#9AB4FF',
    borderWidth: 2,
    paddingHorizontal: 15,
    height: 60,
    width: '80%',
    marginBottom: 30,
    shadowColor: '#9AB4FF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: '#9AB4FF',
    borderWidth: 2,
    paddingHorizontal: 15,
    height: 60,
    width: '80%',
    marginBottom: 30,
    shadowColor: '#9AB4FF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  password: {
    flex: 1,
    height: '100%',
    marginLeft: 8,
  },
  signInButton: {
    backgroundColor: '#9AB4FF',
    borderRadius: 8,
    bottom:200,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: '#12229D',
    bottom: 150,
  },
  workerButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    bottom:140,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '20%',
    alignItems: 'center',
    shadowColor: '#9AB4FF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  registerText: {
    marginTop: 10,
    color: '#12229D',
    fontSize: 16,
    bottom: 100,
  },
  registerLink: {
    color: '#1a48d0',
    fontWeight: 'bold',
  }
});

export default Login;

