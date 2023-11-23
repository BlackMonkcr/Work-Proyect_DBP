import React,{useState, useEffect} from 'react';
import WorkerCard from '../../components/WorkerCard_Worker';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HomeScreenWorker = ({username}) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [workerData, setWorkerData] = useState([]);
    const colors = ['#3837F5', '#3672F5', '#36AAB5', '#7436F5'];

    const fetchData = async () => {
      try {
        const response = await fetch('https://work.up.railway.app/api/v1/worker/homeCards?limit=10', {
          method: 'GET',
        });
        const data = await response.json();
        setWorkerData(data.workers);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      if (isFocused) {
        fetchData();
      }
    }, [isFocused]);

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
              id = {worker.id}
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

export default HomeScreenWorker;
