import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity,TextInput } from 'react-native';

const ProfileScreen = ({ name, email, phone, occupation, hourPrice, description, keyProfilePicture}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description || '');
  const [editedHourPrice, setEditedHourPrice] = useState(hourPrice);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://work.up.railway.app/api/v1/worker?email=${email}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: editedDescription.toString(),
          hourPrice: parseFloat(editedHourPrice),
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      // Puedes manejar la respuesta aquí si es necesario
    } catch (error) {
      console.error(error);
      // Puedes lanzar el error nuevamente para que sea manejado en el código que llama a fetchData
      throw error;
    }
  };

  useEffect(() => {
    setEditedDescription(description);
    setEditedHourPrice(hourPrice);
  }, [description, hourPrice]);
  

  const handleSaveChanges = () => {
    fetchData();
    console.log('Guardando cambios...');
    setIsEditing(false);
  };

  return (
  <ScrollView style={styles.container}>
      <View style={styles.header}>
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
          <Text style={styles.headerInfo}>Phone Number: </Text>
          <Text style={styles.bodyInfo}>{phone}</Text>
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
            <Text style={styles.bodyInfo}>{editedDescription}</Text>
          )}
        </View>

        <View style={styles.attribute}>
          <Text style={styles.headerInfo}>Hour Price: </Text>
          {isEditing ? (
            <TextInput
              style={styles.editablePrice}
              value={editedHourPrice}
              onChangeText={setEditedHourPrice}
              keyboardType="numeric"
            />
          ) : (
            <Text style={styles.bodyInfo}>{editedHourPrice}</Text>
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

export default ProfileScreen;
