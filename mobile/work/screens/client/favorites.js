import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import WorkerCardFavorites from '../../components/workerCard-favorites';


const Favorites = () => {
  const navigation = useNavigation();

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
        <WorkerCardFavorites
          name={'Juanito Perez'}
          rating={'5.0'}
          location={'Calle 123'}
          occupation={'Plomero, electricista'}
          phoneNumber={'1234567890'}
        />
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
      height:'100%',
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
