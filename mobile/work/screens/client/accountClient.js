import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PerfilAccount from '../../components/perfilAccount';

const AccountClient = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);

    return (
      <PerfilAccount 
        name="Samuel"
        email="samuel@gmail.com"
        phoneNumber="123456789"
        occupation="Plomero"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam ultricies, nisl nisl tincidunt nunc, vitae aliquam nisl nisl sit amet nunc.
        Lorem ipsum dolor sit amet"
      />
    );
};

export default AccountClient;
