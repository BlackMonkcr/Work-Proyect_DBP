import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    occupation: 'Developer',
    skills: ['React Native', 'JavaScript', 'Node.js', 'HTML', 'CSS'],
    description:
      'Soy un apasionado desarrollador de software con más de 5 años de experiencia en el diseño, desarrollo y mantenimiento de aplicaciones web y móviles. Mi enfoque se centra en proporcionar soluciones eficientes y escalables utilizando las últimas tecnologías y mejores prácticas de desarrollo.',
    profileImage: 'https://placekitten.com/200/200', // URL de la imagen de perfil
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: userProfile.profileImage }} style={styles.profileImage} />
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.occupation}>{userProfile.occupation}</Text>
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
          <Text style={styles.headerInfo}>Description: </Text>
          <Text style={styles.bodyInfo}>{userProfile.description}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.headerInfo}>Skills: </Text>
            <View style={styles.skillsContainer}>
              {userProfile.skills.map((skill, index) => (
                <Text key={index} style={styles.skill}>
                  {skill}
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
    backgroundColor: '#afeae28d',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#3672F5',
    borderRadius:30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop:'20%',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  occupation: {
    fontSize: 18,
    color: '#fff',
  },
  body: {
    padding: 20,
    height:'100%',
  },
  attribute: {
    flexDirection: 'column',
    alignItems: 'left',
    marginTop: 20,
  },
  headerInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bodyInfo: {
    fontSize: 16,
    color: '#555',
    marginLeft: 5,
  },
  skillsContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  skill: {
    color: '#555',
    fontSize:16,
    paddingHorizontal: 5,
    margin: 2,
  },
});

export default ProfileScreen;

