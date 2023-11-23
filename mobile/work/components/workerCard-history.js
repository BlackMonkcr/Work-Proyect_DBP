import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WorkerCardHistory = ({ id, name, occupation, phone, color, keyProfilePicture }) => {
    
    const stylestemp = StyleSheet.create({
        containercolor: {
            backgroundColor: color,
        }
    });

    return (
        <View style={[styles.container, stylestemp.backgroundColor]}>
            <View style={styles.info}>
                <View style={styles.infoData}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={styles.attributes}>
                        <Text style={[styles.locationText, styles.ratingText]}>occupation</Text>
                        <MaterialCommunityIcons name="briefcase-variant" size={14} color="#ededed" />
                    </View>
                    <View>
                        <Text style={styles.occupationText}>{occupation}</Text>
                    </View>
                    <View >
                        <Text style={styles.ratingText}>Contacto: {phone}</Text>
                    </View>
                </View>
                <View>
                    <Image src={`https://unavatar.io/${keyProfilePicture}`} style={styles.photoPerfil}/>
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
        backgroundColor: '#532FDE',
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
        width: 70,
        height: 70,
        borderRadius: 50,
        borderColor: '#ededed',
        borderWidth: 3,
    },
    attributes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
});

export default WorkerCardHistory;