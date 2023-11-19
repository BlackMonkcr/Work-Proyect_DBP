import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput, Platform, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OctionIcons from 'react-native-vector-icons/Octicons';
import { FontAwesome, MaterialCommunityIcons,MaterialIcons,Fontisto} from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation} from '@react-navigation/native';

const SignupWorker = () => {
  const navigation = useNavigation();

  const getBack = () => {
    navigation.navigate('Login');
  }

    const handleSubmit = () => {
      //fetch
      Alert.alert(
        '¡Felicidades!',
        'Ya puedes empezar. Tu cuenta ha sido registrada exitosamente.',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
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
                <TextInput style={styles.input} placeholder="Full Name" />
              </View>
              <View style={styles.inputContainer}>
                <FontAwesome name="id-card-o" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="DNI" />
              </View>
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="cake-variant-outline" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Age" />
              </View>
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="gender-male-female" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Gender" />
              </View>
              <View style={styles.inputContainer}>
                <MaterialIcons name="work-outline" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Profession" />
              </View>
              <View style={styles.inputContainer}>
                <MaterialIcons name="phone-iphone" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Phone Number" />
              </View>
              <View style={styles.inputContainer}>
                <Fontisto name="email" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Email" />
              </View>
              <View style={styles.inputContainer}>
                <MaterialIcons name="lock-outline" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Password" />
              </View>
              <View style={styles.inputContainer}>
                <MaterialIcons name="lock-outline" size={20} color={'#12229D'} />
                <TextInput style={styles.input} placeholder="Confirm Password" />
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
      borderWidth: 1,
      borderRadius: 10,
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
