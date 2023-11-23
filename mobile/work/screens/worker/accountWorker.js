import React from 'react';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import PerfilAccountWorker from '../../components/perfilAccountWorker';

const AccountWorker = ({username}) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [workerData, setWorkerData] = React.useState([]);
    
    const fetchData = async () => {
      try {
        const response = await fetch(`https://work.up.railway.app/api/v1/worker/perfil?email=${username}`, {
          method: 'GET',
        });
        const data = await response.json();
        setWorkerData(data);
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
      <PerfilAccountWorker
        name={workerData.name}
        email={workerData.email}
        phone={workerData.phone}
        occupation={workerData.occupation}
        hourPrice={workerData.hourPrice}
        description={workerData.description}
        keyProfilePicture={workerData.keyProfilePicture}
        plan={workerData.plan}
      />
    );
};

export default AccountWorker;

