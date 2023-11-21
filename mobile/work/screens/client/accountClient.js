import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PerfilAccountClient from '../../components/perfilAccountClient';

const AccountClient = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);

    return (
      <PerfilAccountClient/>
    );
};

export default AccountClient;
