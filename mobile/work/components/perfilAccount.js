import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const perfilAccount = ({name, email, phoneNumber, occupation, description}) => {
    if (description.length > 200) {
        description = description.substring(0, 197) + '...';
    }
    
    return (
        <View style={styles.accountInfo}>
          <View style={styles.header}>
            <Image src={"https://unavatar.io/sam"} style={styles.photoPerfil}/>
          </View>
          <View style={styles.body}>
            <View style={styles.attributtes}>
                <Text style={styles.headerInfo}>Name: </Text>
                <Text style={styles.bodyInfo}>{name}</Text>
            </View>
            <View style={styles.attributtes}>
                <Text style={styles.headerInfo}>Email: </Text>
                <Text style={styles.bodyInfo}>{email}</Text>
            </View>
            <View style={styles.attributtes}>
                <Text style={styles.headerInfo}>Phone Number: </Text>
                <Text style={styles.bodyInfo}>{phoneNumber}</Text>
            </View>
            <View style={styles.attributtes}>
                <Text style={styles.headerInfo}>Occupation: </Text>
                <Text style={styles.bodyInfo}>{occupation}</Text>
            </View>
            <View style={[styles.attributtes, styles.description]}>
                <Text style={styles.headerInfo}>Description: </Text>
                <Text style={[styles.bodyInfo, styles.bodyInfoDescription]}>{description}</Text>
            </View>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    accountInfo: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ededed',
    },
    header: {
        width: '100%',
        height: '30%',
        backgroundColor: '#3672F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: '#333',  // Color del borde desenfocado
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 50,
    },
    photoPerfil: {
        marginTop: 20,
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: '#ededed',
        borderWidth: 3,
    },
    attributtes: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
    },
    headerInfo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#555',
    },
    bodyInfo: {
        fontSize: 20,
        color: '#555',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    bodyInfoDescription: {
        fontSize: 18,
        color: '#ededed',
        backgroundColor: '#3672F5',
        borderRadius: 10,
        padding: 20,
        height: '50%',
        width: '95%',
    },

});

export default perfilAccount;
