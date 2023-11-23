import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const RequestClient = ({id, name, email, keyProfilePicture, color}) => {

  const stylestemp = StyleSheet.create({
    containercolor: {
      backgroundColor: color,
    }
  });

  return (
    <View style={[styles.container, stylestemp.containercolor]}>
    <View style={[styles.info]}>
        <View style={styles.infoData}>
            <View>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.attributes}>
                <Text style={[styles.locationText, styles.ratingText]}>{email}</Text>
            </View>
            <View style={styles.attributes}>
                <Text style={[styles.locationText, styles.ratingText]}>El usuario solicito tus servicios! pronto se comunicara contigo via Whatsapp</Text>
            </View>
        </View>
        <View>
            <Image src={`https://unavatar.io/${keyProfilePicture}`} style={styles.photoPerfil} />
        </View>
    </View>
</View>
  );
};

const styles = StyleSheet.create({
  popup: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
  },
  container: {
      width: '90%',
      height: 195,
      borderRadius: 10,
      margin: 20,
      padding: 20,
      shadowColor: 'black',
      shadowOpacity: 0.6,
      shadowOffset: { width: 5, height: 5 },
      elevation: 20,
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  name: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#ededed',
  },
  ratingText: {
      fontSize: 14,
      color: '#ededed',
  },
  locationText: {
      fontSize: 16,
      color: '#ededed',
  },
  descriptionText: {
      fontSize: 10,
      fontWeight: '400',
      color: '#ededed',
      overflow: 'hidden',
  },
  secondaryButton: {
      backgroundColor: '#2F43DD',
      borderWidth: 1,
      borderColor: '#ededed',
  },
  button: {
      width: '30%',
      marginTop: 10,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#ededed',
      borderRadius: 7,
      borderWidth: 1,
      borderColor: '#ededed',
  },
  buttonText: {
      color: '#5271FF',
      textAlign: 'center',
      fontWeight: 'bold',
  },
  info: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height: '65%',
      gap: 5,
  },
  infoData: {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      gap: 8,
  },
  photoPerfil: {
      marginTop: 30,
      marginRight: 20,
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: '#ededed',
      borderWidth: 3,
  },
  attributes: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
  },
});

export default RequestClient;
