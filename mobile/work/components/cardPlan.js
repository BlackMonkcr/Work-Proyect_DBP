import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import { MaterialCommunityIcons,FontAwesome5, MaterialIcons } from '@expo/vector-icons';

var ColorGlobal = '#2f43dd';

const CardPlan = ({ id, name, price, description, color, worker_email }) => {
    ColorGlobal=color;
    let dataWorker = {};

    const stylestemp = StyleSheet.create({
        containercolor: {
            backgroundColor: color,
        }
    });

    const fetchWorker = async () => {
        try {
            const response = await fetch(`https://work.up.railway.app/api/v1/worker/perfil?email=${worker_email}`, {
                method: 'GET',
            });

            dataWorker = await response.json();
        } catch (error) {
            console.error(error);
        }

    };

    const fetchSubscription = async () => {
        try {
            const response = await fetch(`https://work.up.railway.app/api/v1/subscription?plan_id=${id}&worker_id=${dataWorker.id}`, {
                method: 'POST',
            });

            const data = await response.json();
        } catch (error) {}
    };

    const fetchChangePlan = async () => {
        try {
            const response = await fetch(`https://work.up.railway.app/api/v1/subscription?plan_id=${id}&worker_id=${dataWorker.id}`, {
                method: 'PUT',
            });

            const data = await response.json();
        } catch (error) {}
    };

    const subscribe = async () => {
        await fetchWorker();
        if (dataWorker.plan == "Free") {
            await fetchSubscription();
            Alert.alert('Felicitaciones!', 'Te has suscrito al plan!');
        } else {
            await fetchChangePlan();
            Alert.alert('Felicitaciones!', 'Has cambiado de plan!');
        }
    };

    return (
        <View style={[styles.container, stylestemp.containercolor]}>
            <View style={[styles.info]}>
                <View style={styles.infoData}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={styles.attributes}>
                        <Text style={[styles.locationText, styles.ratingText]}>S/. {price}  </Text>
                        <FontAwesome5 name="money-bill-alt" size={14} color="#ededed" />
                    </View>
                    <View>
                        <Text style={styles.descriptionText}>{description}</Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../assets/logo-plan.png')} style={styles.photoPerfil} />
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={subscribe}
            >
                <Text style={styles.buttonText}>Subscribe!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    popup: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    container: {
        width: '90%',
        height: 195,
        borderRadius: 10,
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
    descriptionText: {
        fontSize: 10,
        fontWeight: '400',
        color: '#ededed',
        overflow: 'hidden',
    },
    secondaryButton: {
        backgroundColor: '#2F43DD',
        borderWidth: 1,
        borderColor: '#ededed',
    },
    button: {
        width: '30%',
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#ededed',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ededed',
    },
    buttonText: {
        color: '#5271FF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '65%',
        gap: 5,
    },
    infoData: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        gap: 5,
    },
    photoPerfil: {
        marginTop: 50,
        marginRight: 10,
        width: 60,
        height: 60,
    },
    attributes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
});

export default CardPlan;