import React, {useEffect} from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import PerfilAccountClient from '../../components/perfilAccountClient';

const AccountClient = ({username}) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [clientData, setClientData] = React.useState([]);

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
      <PerfilAccountClient
        name={clientData.name}
        email={clientData.email}
        keyProfilePicture={clientData.keyProfilePicture}
      />
    );
};

export default AccountClient;
