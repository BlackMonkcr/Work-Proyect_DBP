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
            {/* <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#333" width={30} height={30}>
                <Path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </Svg> */}
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
        paddingBottom: 20, // Espaciado en la parte inferior para que no haya un espacio adicional al final
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
