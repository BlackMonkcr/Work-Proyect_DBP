import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import WorkerCard from '../../components/workerCard';

const HomeScreenClient = () => {
  const navigation = useNavigation();
  colors = ['#3837F5','#3672F5', '#36AAB5', '#7436F5'];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);


  const workerData = [
    {
      name: 'Juanito Perez',
      rating: '5.0',
      location: 'Calle 123',
      description: 'Plomero con más años de experiencia que tu tío de la esquina y más barato...',
    },
    {
      name: 'Juan Perez',
      rating: '5.0',
      location: 'Calle 123',
      description: 'Plomero con más años de experiencia que tu tío de la esquina y más barato...',
    },
    {
      name: 'Juanito Perez',
      rating: '5.0',
      location: 'Calle 123',
      description: 'Plomero con más años de experiencia que tu tío de la esquina y más barato...',
    },
    {
      name: 'Juan Perez',
      rating: '5.0',
      location: 'Calle 123',
      description: 'Plomero con más años de experiencia que tu tío de la esquina y más barato...',
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View>
        <View style={styles.header}>
            <Text style={styles.title}>Home Client</Text>
        </View>
        {workerData.map((worker, index) => (
          <WorkerCard
            key={index}
            name={worker.name}
            rating={worker.rating}
            location={worker.location}
            description={worker.description}
            color={colors[index % colors.length]}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    marginTop: 5,
},
scrollViewContent: {
    backgroundColor: '#afeae28d',
    paddingBottom: 20,
},
header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 50,
    gap: 15,
},
});

export default HomeScreenClient;