import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ContactCard = ({ name, rating, location, occupation, phoneNumber }) => {
    
    const openWhatsApp = () => {
        // Reemplaza '1234567890' con el número de teléfono al que deseas enviar el mensaje
        Linking.openURL(`https://wa.me/989606008`);
      };

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.infoData}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={styles.attributes}>
                        <Text style={[styles.locationText, styles.ratingText]}>{location}, {rating}</Text>
                        <MaterialCommunityIcons name="star" size={14} color="#FDE52F" />
                    </View>
                    <View>
                        <Text style={styles.occupationText}>{occupation}</Text>
                    </View>
                    <View >
                        <Text style={styles.ratingText}>Contacto: {phoneNumber}</Text>
                    </View>
                </View>
                <View style={styles.photoPerfil}>
                    <TouchableOpacity onPress={openWhatsApp}>
                        <MaterialCommunityIcons name="whatsapp" size={80} color="#ededed" />
                    </TouchableOpacity>            
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 160,
        borderRadius: 10,
        backgroundColor: '#36AAB5',
        margin: 20,
        padding: 20,
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowOffset: { width: 5, height: 5 },
        elevation: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ededed',
    },
    ratingText: {
        fontSize: 14,
        color: '#ededed',
    },
    locationText: {
        fontSize: 16,
        color: '#ededed',
    },
    occupationText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ededed',
        overflow: 'hidden',
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        gap: 5,
    },
    infoData: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        gap: 5,
    },
    photoPerfil: {
        width: '40%',
        margin: 20,
    },
    attributes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
});

export default ContactCard;