import React, { useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import RequestClient from '../../components/RequestClient';

const Requests = ({username}) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
  
    const [clientData, setClientData] = React.useState([]);
    const [history, setHistory] = React.useState([]);
    const [loading, setLoading] = React.useState(true); // Nuevo estado para indicar carga
  
    const colors = ['#3837F5', '#3672F5', '#36AAB5', '#7436F5'];
  
    const fetchData = async () => {
      try {
        setLoading(true); // Establecer carga a true cuando se inicia la solicitud
        const response = await fetch(`https://work.up.railway.app/api/v1/worker/perfil?email=${username}`, {
          method: 'GET',
        });
  
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
  
        const data = await response.json();
        setClientData(data);
        setLoading(false); // Establecer carga a false cuando los datos se han cargado
      } catch (error) {
        console.error(error);
      }
    };
  
    const fetchHistory = async () => {  
      try {
        const response = await fetch(`https://work.up.railway.app/api/v1/worker/history_clients/all?id=${clientData.id}`, {
          method: 'GET',
        });
  
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
  
        const data = await response.json();
        setHistory(data.historys);
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      if (isFocused) {
        fetchData();
      }
    }, [isFocused]);
  
    useEffect(() => {
      if (!loading) {
        fetchHistory();
      }
    }, [loading]);
  
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View>
          <View style={styles.header}>
              <Text style={styles.title}>Request</Text>
          </View>
          {history.map((client, index) => (
            <RequestClient
              key={client.id}
              id={client.id}
              name={client.name}
              email={client.email}
              color={colors[index % colors.length]}
              keyProfilePicture={client.keyProfilePicture}
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
        paddingBottom: 20,
        backgroundColor: '#afeae28d',
        height:'100%' // Espaciado en la parte inferior para que no haya un espacio adicional al final
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

export default Requests;
