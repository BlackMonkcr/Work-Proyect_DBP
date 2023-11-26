import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity,TextInput } from 'react-native';


const ProfileScreen = ({ name, email, phone, occupation, hourPrice, description, keyProfilePicture, plan}) => {
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
    } catch (error) {
      console.error(error);
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
          <Text style={styles.headerInfo}>Plan Actual: </Text>
          <Text style={styles.bodyInfo}>{plan}</Text>
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
              value={(editedHourPrice == null)? 0.0 : editedHourPrice.toString()}
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
    borderRadius: 30,
    backgroundColor: '#4433E0',
      height: '35%',
      shadowColor: '#2F43DD',  // Color del borde desenfocado
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
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
    backgroundColor: '#4433E0',
    marginBottom:20,
    paddingTop:8,
    margin: 8,
    borderRadius: 10,
    elevation: 20 ,
    height: '4%',
    shadowColor: '#2F43DD',  // Color del borde desenfocado
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  saveButtonText: {
    fontWeight: 'bold',
    fontSize:18,
    color: '#fff',
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#4433E0',
    marginBottom:20,
    paddingTop:8,
    margin: 8,
    borderRadius: 10,
    elevation: 20 ,
    height: '5%',
    shadowColor: '#2F43DD',  // Color del borde desenfocado
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  editButtonText: {
    fontWeight: 'bold',
    fontSize:18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ProfileScreen;
