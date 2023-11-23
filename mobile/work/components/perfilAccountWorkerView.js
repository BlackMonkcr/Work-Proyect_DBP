import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ProfileScreenView = ({ name, email, occupation, hourPrice, description, keyProfilePicture, color}) => {
    
    const stylesTemp = StyleSheet.create({
        headerColor: { 
            backgroundColor: color
        },
    });

    return (
    <ScrollView style={styles.container}>
        <View style={[styles.header, stylesTemp.headerColor]}>
            <Image source={{ uri: `https://unavatar.io/${keyProfilePicture}` }} style={styles.profileImage} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.occupation}>{occupation}</Text>
        </View>
        <View style={styles.body}>
            <View style={styles.attribute}>
            <Text style={styles.headerInfo}>Email: </Text>
            <Text style={styles.bodyInfo}>{email}</Text>
            </View>
            <View style={styles.attribute}>
                <Text style={styles.headerInfo}>Description: </Text>
                <Text style={styles.bodyInfo}>{description}</Text>
            </View>

            <View style={styles.attribute}>
                <Text style={styles.headerInfo}>Hour Price: </Text>
                <Text style={styles.bodyInfo}>{hourPrice}</Text>
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#3672F5',
    borderRadius: 30,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: '20%',
    marginBottom: 10,
    borderWidth: 5,
    borderColor: '#ededed',
  },
  name: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#fff',
  },
  occupation:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  body: {
    padding: 30,
    height: '100%',
  },
  attribute: {
    flexDirection: 'column',
    alignItems: 'left',
    marginTop: 20,
  },
  headerInfo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0fb088',
  },
  bodyInfo: {
    marginTop:8,
    fontSize: 18,
    color: '#555',
    marginLeft: 5,
  },
  editableText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    width: 340,
    height: 200,
  },
  editablePrice: {
    fontSize: 16,
    color: '#555',
    marginLeft: 5,
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#ddd',
    padding: 5,
    marginBottom: 10,
    width: 340,
    height: 50,
  },
  saveButton: {
    backgroundColor: '#3672F5',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    fontWeight: 'bold',
    fontSize:18,
    color: '#fff',
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#3672F5',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  editButtonText: {
    fontWeight: 'bold',
    fontSize:18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ProfileScreenView;
