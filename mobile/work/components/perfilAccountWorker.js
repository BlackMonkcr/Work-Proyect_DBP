import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity,TextInput } from 'react-native';

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

  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(userProfile.description);
  const [editedSkills, setEditedSkills] = useState(userProfile.skills.join(', '));

  const handleSaveChanges = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en la descripción y habilidades
    console.log('Guardando cambios...');
    setIsEditing(false);
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
          {isEditing ? (
            <TextInput
              style={styles.editableText}
              value={editedDescription}
              onChangeText={setEditedDescription}
              multiline={true}
              numberOfLines={4}
            />
          ) : (
            <Text style={styles.bodyInfo}>{userProfile.description}</Text>
          )}
        </View>

        <View style={styles.attribute}>
          <Text style={styles.headerInfo}>Skills: </Text>
          {isEditing ? (
            <TextInput
              style={styles.editableText}
              value={editedSkills}
              onChangeText={setEditedSkills}
              multiline={true}
              numberOfLines={4}
            />
          ) : (
            <Text style={styles.bodyInfo}>{userProfile.skills.join(', ')}</Text>
          )}
        </View>

        {isEditing && (
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        )}

        {!isEditing && (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(true)}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}
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
  editableText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    marginBottom: 10,
    width: 350,
    height: 200,
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

export default ProfileScreen;
