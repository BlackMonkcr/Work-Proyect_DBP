import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    servicesContracted: ['Service A', 'Service B', 'Service C'],
    favoriteServices: ['Service X', 'Service Y', 'Service Z'],
    profileImage: 'https://placekitten.com/200/200', // URL de la imagen de perfil
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: userProfile.profileImage }} style={styles.profileImage} />
        <Text style={styles.name}>{userProfile.name}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.attribute}>
          <Text style={styles.headerInfo}>Email: </Text>
          <Text style={styles.bodyInfo}>{userProfile.email}</Text>
        </View>
        <View style={styles.attribute}>
          <Text style={styles.headerInfo}>Phone Number: </Text>
          <Text style={styles.bodyInfo}>{userProfile.phoneNumber}</Text>
        </View>
        <View style={styles.attribute}>
          <Text style={styles.headerInfo}>Services Contracted: </Text>
          <View style={styles.skillsContainer}>
            {userProfile.servicesContracted.map((service, index) => (
              <Text key={index} style={styles.skill}>
                {service}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.attribute}>
          <Text style={styles.headerInfo}>Favorite Services: </Text>
          <View style={styles.skillsContainer}>
            {userProfile.favoriteServices.map((service, index) => (
              <Text key={index} style={styles.skill}>
                {service}
              </Text>
            ))}
          </View>
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
    backgroundColor: '#3672F5',
    borderRadius: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: '20%',
    marginBottom: 10,
  },
  name: {
    fontSize: 27,
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
  skillsContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  skill: {
    color: '#555',
    fontSize: 18,
    paddingHorizontal: 5,
    margin: 2,
  },
});

export default ProfileScreen;
