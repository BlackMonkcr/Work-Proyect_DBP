import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import WorkerCard from '../../components/workerCard';

const HomeScreenClient = () => {
  const navigation = useNavigation();
  const [workerData, setWorkerData] = useState([]);
  const colors = ['#3837F5', '#3672F5', '#36AAB5', '#7436F5'];

  useEffect(() => {
    fetch('https://work.up.railway.app/worker/homeCards?limit=10', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setWorkerData(data))
      .catch((error) => console.error(error));
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Home</Text>
        </View>
        {workerData.map((worker, index) => (
          <WorkerCard
            key={worker.id}
            name={worker.name}
            rating={worker.rating}
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
    backgroundColor: '#ededed',
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

