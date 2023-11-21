import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PerfilAccountWorker from '../../components/perfilAccountWorker';

const AccountWorker = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);

    return (
      <PerfilAccountWorker/>
    );
};

export default AccountWorker;

