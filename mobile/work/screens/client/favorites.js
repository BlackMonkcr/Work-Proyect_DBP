import React, { useEffect, useState } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import WorkerCardFavorites from '../../components/workerCard-favorites';

const Favorites = ({ username }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [clientData, setClientData] = useState({});
  const [favorites, setFavorites] = useState([]);
  const colors = ['#3837F5', '#3672F5', '#36AAB5', '#7436F5'];

  const fetchData = async () => {
    try {
      const response = await fetch(`https://work.up.railway.app/api/v1/client/perfil?email=${username}`, {
        method: 'GET',
      });
      const data = await response.json();
      setClientData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await fetch(`https://work.up.railway.app/api/v1/client/favorite_workers/all?id=${clientData.id}`, {
        method: 'GET',
      });
      const data = await response.json();
      setFavorites(data.workers);
    } catch (error) {
      console.error(error);
    }
  };

  const waitFetch = async () => {
    await fetchData();
    await fetchFavorites();
  };

  useEffect(() => {
    if (isFocused) {
      waitFetch();
    }
  }, [isFocused]);

  useEffect(() => {}, [favorites]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Favorites</Text>
        </View>
        {favorites.map((worker, index) => (
          <WorkerCardFavorites
            key={worker.id}
            id={worker.id}
            name={worker.name}
            occupation={worker.occupation}
            description={(worker.description == null || worker.description == '') ? 'No description' : worker.description}
            color={colors[index % colors.length]}
            keyProfilePicture={worker.keyProfilePicture}
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
    paddingBottom: 20, // Espaciado en la parte inferior para que no haya un espacio adicional al final
    height: '100%',
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

export default Favorites;
