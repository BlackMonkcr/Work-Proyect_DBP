import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ContactCard from '../../components/contactCard';


const History = () => {
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
            <Text style={styles.title}>Mensajes</Text>
        </View>
        <ContactCard
          name={'Juanito Perez'}
          rating={'5.0'}
          location={'Calle 123'}
          occupation={'Plomero, electricista'}
          phoneNumber={'1234567890'}
        />
        <ContactCard
          name={'Juanito Perez'}
          rating={'5.0'}
          location={'Calle 123'}
          occupation={'Plomero, electricista'}
          phoneNumber={'1234567890'}
        />
        <ContactCard
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
      paddingBottom: 20,
      backgroundColor: '#afeae28d',
      height:'100%'  // Espaciado en la parte inferior para que no haya un espacio adicional al final
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

export default History;
