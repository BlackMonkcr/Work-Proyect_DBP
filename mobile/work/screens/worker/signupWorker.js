import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput, Platform, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OctionIcons from 'react-native-vector-icons/Octicons';
import { Ionicons,FontAwesome, MaterialCommunityIcons,MaterialIcons,Fontisto} from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation} from '@react-navigation/native';

const SignupWorker = () => {

  const [name, setName] = useState('');
  const [dni,setDni] = useState('');
  const [age,setAge] = useState('');
  const [gender,setGender] = useState('');
  const [phone,setPhone] = useState('');
  const [ocupation,setOcupation] = useState('');
  const[email,setEmail] = useState('');
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

  const navigation = useNavigation();

  const getBack = () => {
    navigation.navigate('Login');
  }

    const handleSubmit = async (e) => {
      if (!name || !dni|| !age||!gender|| !phone|| !ocupation||!email || !password || !confirmpassword) {
        Alert.alert('Validation Error', 'Please fill in all fields.');
        return;
      }

      if (password !== confirmpassword) {
        Alert.alert('Validation Error', 'Passwords do not match.');
        return;
      }

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
        const response = await fetch('https://work.up.railway.app/api/v1/auth/signupWorker', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            phoneNumber: phone,
            occupation: ocupation
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
          Alert.alert('No pudo registrar', 'El email o numero de telefono ya pertence a una cuenta existente');
        }
      } catch (error) {
        Alert.alert('Error en el servidor', 'No se pudo registrar');
      }
    };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

    return (
      <View>
        <KeyboardAwareScrollView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          contentContainerStyle={styles.container}
          automaticallyAdjustContentInsets={false}
          extraHeight={135}
          enabledOnAndroid={true}
          keyboardShouldPersistTaps='handled'
          scrollEnabled={true}
          extraScrollHeight={70}
        >
          <ScrollView contentContainerStyle={styles.inner}>
            <View style={styles.header}>
              <Image
                source={require('../../assets/circles.png')}
                style={styles.imagen}
              />
              <TouchableOpacity onPress={getBack} style={styles.back}>
                <Icon name="angle-left" size={35} color={'#12229D'} />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
              <Text style={styles.title}> Sign Up </Text>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <OctionIcons name='person' size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Full Name"
                  value={name}
                  onChangeText={setName}
                />

              </View>
              <View style={styles.inputContainer}>
                <FontAwesome name="id-card-o" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="DNI"
                  value={dni}
                  onChangeText={setDni}
                />
              </View>
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="cake-variant-outline" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Age"
                  value={age}
                  onChangeText={setAge}
                />
              </View>
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="gender-male-female" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Gender"
                value={gender}
                onChangeText={setGender}
                />
              </View>
              <View style={styles.inputContainer}>
                <MaterialIcons name="work-outline" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Profession"
                value={ocupation}
                onChangeText={setOcupation}
                />
              </View>
              <View style={styles.inputContainer}>
                <MaterialIcons name="phone-iphone" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                />
              </View>
              <View style={styles.inputContainer}>
                <Fontisto name="email" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.passwordContainer}>
                <MaterialIcons name="lock-outline" size={20} color={'#12229D'} />
                <TextInput style={styles.password} placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Ionicons name={isPasswordVisible ? 'ios-eye-off-outline' : 'ios-eye-outline'} size={24} color="#000000" />
                </TouchableOpacity>
              </View>
              <View style={styles.confirmpasswordContainer}>
                <MaterialIcons name="lock-outline" size={20} color={'#12229D'} />
                <TextInput style={styles.confirmpassword} placeholder="Confirm Password"
                  value={confirmpassword}
                  onChangeText={setConfirmpassword}
                  secureTextEntry={!isConfirmPasswordVisible}
                />
                 <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                  <Ionicons name={isConfirmPasswordVisible ? 'ios-eye-off-outline' : 'ios-eye-outline'} size={24} color="#000000" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.submitText}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={navigateToLogin}>
                    <Text style={styles.loginText}>
                    Already have an account ?{' '}
                      <Text style={styles.loginLink}>Sign In</Text>
                    </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F7F7F7',
      height: '100%',
    },
    inner: {
      flexGrow: 1,
      justifyContent: 'space-between',
      zIndex: 1
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
    header: {
      flexGrow: 1,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: '13%',
      paddingLeft: '2%',
      zIndex: 1
    },
    back: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '2%',
      height: '24%',
      alignSelf: 'flex-start',
      top:10,
    },
    backText: {
      color: "#12229D" ,
      fontWeight: 'bold',
      marginLeft: '1%',
      fontSize:25,
      top:3,
    },
    title: {
      top:15,
      fontSize: 30,
      fontWeight: 'bold',
      color: "#12229D" ,
      marginLeft: '35%',
    },
    form: {
      flexGrow: 1,
      zIndex: 2,
      height: '100%',
    },
    formContainer: {
      zIndex: 3,
      marginTop: '10%',
      alignItems: 'center',
      height: '87%',
      paddingBottom: '5%'
    },
    inputContainer: {
      flexDirection: 'row',
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: 'white',
      borderColor: '#9AB4FF',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '7%',
      marginBottom: '2.5%',
      paddingLeft: '2%',
      width: '90%'
    },
    input: {
      color: 'gray',
      marginLeft: '3%',
      width: '100%',
      fontSize: 15,
    },
    passwordContainer: {
      flexDirection: 'row',
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: 'white',
      borderColor: '#9AB4FF',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '7%',
      paddingHorizontal: 15,
      marginBottom: '2.5%',
      paddingLeft: '2%',
      width: '90%'
  },
  password: {
      flex: 1,
      height: '100%',
      marginLeft: '3%',
      width: '100%',
      fontSize: 15,
  },
  confirmpasswordContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#9AB4FF',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '7%',
    marginBottom: '2.5%',
    paddingHorizontal: 15,
    paddingLeft: '2%',
    width: '90%'
  },
  confirmpassword: {
    flex: 1,
    height: '100%',
    marginLeft: '3%',
    width: '100%',
    fontSize: 15,
  },
  button: {
      backgroundColor: "#9AB4FF",
      borderRadius: 10,
      height: '7%',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
    },
  submitText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  loginText: {
      marginTop: 10,
      color: '#12229D',
      fontSize: 16,
      bottom: -20,
  },
  loginLink: {
    color: '#1a48d0',
    fontWeight: 'bold',
  }
  });

export default SignupWorker;
