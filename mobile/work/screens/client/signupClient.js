import React, { useState } from 'react';
import { View, Text, Image,TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Ionicons, MaterialIcons,Fontisto } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

const SignupClient = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword,setConfirmpassword]=useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
      };

    const handleSignUp = async (e) => {
      if (!name || !email || !password || !confirmpassword) {
        Alert.alert('Validation Error', 'Please fill in all fields.');
        return;
      }

      if (password !== confirmpassword) {
        Alert.alert('Validation Error', 'Passwords do not match.');
        return;
      }

      e.preventDefault();
      try {
        const response = await fetch('https://work.up.railway.app/api/v1/auth/signupClient', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          Alert.alert(
            '¡Felicidades!',
            'Ya puedes empezar. Tu cuenta ha sido registrada exitosamente.',
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );
          navigation.navigate('Login')
        } else {
          Alert.alert('No pudo registrar', 'El email ya pertence a una cuenta existente');
        }
      } catch (error) {
        Alert.alert('Error en el servidor', 'No se pudo registrar');
      }
    };

    const navigation = useNavigation();

    const navigateToLogin = () => {
        navigation.navigate('Login');
      }

    const getBack = () => {
        navigation.navigate('Login');
      }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/circles.png')}
                style={styles.imagen}
              />
            <TouchableOpacity onPress={getBack} style={styles.back}>
                <Icon name="angle-left" size={35} color={'#12229D'} />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
            <Text style={styles.signup}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={24} color="#12229D" />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  value={name}
                  onChangeText={setName}
                />
            </View>

            <View style={styles.emailContainer}>
                <Fontisto name="email" size={24} color="#12229D" />
                <TextInput
                  style={styles.email}
                  placeholder="Email or Username"
                  value={email}
                  onChangeText={setEmail}
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

            <View style={styles.confirmpasswordContainer}>
                <MaterialIcons name="lock-outline" size={24} color="#12229D" />
                <TextInput
                  style={styles.confirmpassword}
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChangeText={setConfirmpassword}
                  secureTextEntry={!isConfirmPasswordVisible}
                />
                <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                  <Ionicons name={isConfirmPasswordVisible ? 'ios-eye-off-outline' : 'ios-eye-outline'} size={24} color="#000000" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp} >
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToLogin}>
                    <Text style={styles.loginText}>
                    Already have an account ?{' '}
                      <Text style={styles.loginLink}>Sign In</Text>
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
    imagen: {
        position: 'absolute',
        alignSelf: 'flex-start',
        right: 0,
        top: 0,
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    back: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '2%',
        height: '24%',
        alignSelf: 'flex-start',
        top:-130,
      },
      backText: {
        color: "#12229D" ,
        fontWeight: 'bold',
        marginLeft: '1%',
        fontSize:25,
        top:1,
      },
    signup: {
        fontSize: 33,
        fontWeight: 'bold',
        color: '#12229D',
        bottom: 170,
        marginLeft: '5%',
      },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 80,
        backgroundColor: 'white',
        borderRadius: 10,
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
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 80,
        backgroundColor: 'white',
        borderRadius: 10,
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
    email: {
        flex: 1,
        height: '100%',
        marginLeft: 8,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 80,
        backgroundColor: 'white',
        borderRadius: 10,
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
    confirmpasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 80,
        backgroundColor: 'white',
        borderRadius: 10,
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
    confirmpassword: {
        flex: 1,
        height: '100%',
        marginLeft: 8,
    },
    signUpButton: {
        backgroundColor: '#9AB4FF',
        borderRadius: 10,
        bottom:80,
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: '80%',
        alignItems: 'center',
    },
    signUpButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginText: {
        marginTop: 10,
        color: '#12229D',
        fontSize: 16,
        bottom: 50,
    },
    loginLink: {
        color: '#1a48d0',
        fontWeight: 'bold',
    }
});

export default SignupClient;
