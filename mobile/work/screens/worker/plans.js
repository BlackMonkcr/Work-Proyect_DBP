import React,{useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CardPlan from '../../components/cardPlan';

const PlansWorker = ({username}) => {
    const navigation = useNavigation();
    const [planData, setPlanData] = useState([]);
    const colors = ['#3837F5', '#3672F5', '#36AAB5', '#7436F5'];

    const fetchData = async () => {
        try {
          const response = await fetch('https://work.up.railway.app/api/v1/plan/all', {
            method: 'GET',
          });
          const data = await response.json();
          setPlanData(data.plans);
        } catch (error) {
          console.error(error);
        }
      };
  
      useEffect(() => {
        fetchData();
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
                <Text style={styles.title}>Planes</Text>
            </View>
            {planData.map((plan, index) => (
                <CardPlan
                    key={plan.plan_id}
                    id = {plan.plan_id}
                    name={plan.name}
                    price={plan.price}
                    description={(plan.description == null || plan.description == '') ? 'No description' : plan.description}
                    color={colors[index % colors.length]}
                    worker_email={username}
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


export default PlansWorker;