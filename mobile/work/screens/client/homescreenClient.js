import React from 'react';
import { View, Text, StyleSheetProperties, StyleSheet, Button } from 'react-native';

const WorkerCard = ({ name, rating, location, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <View style={styles.location}>
        <Text style={styles.locationText}>{location}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="Ver más" />
        <Button title="Solicitar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#FFF',
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 16,
    color: '#999',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: '#999',
    maxLines: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default WorkerCard;


// const HomeScreenClient = () => {
//     return (
//         <View>
//             <Text>Welcome to the Home Screen for Clients!</Text>
//         </View>
//     );
// };

// export default HomeScreenClient;
