import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons,FontAwesome, Feather} from '@expo/vector-icons';
import PerfilAccountWorkerView from '../components/perfilAccountWorkerView.js';

var ColorGlobal = '#2f43dd';

const WorkerCardForWorker = ({ id, name, occupation, description, color, keyProfilePicture }) => {
    const [showVerMas, setShowVerMas] = useState(false);
    const [workerDataView, setWorkerDataView] = useState({});
    ColorGlobal=color;
    if (description.length > 40) {
        description = description.substring(0, 40) + '...';
    }

    const stylestemp = StyleSheet.create({
        containercolor: {
            backgroundColor: showVerMas ? '#ededed' : color,
        }
    });

    const fetchData = async () => {
        try {
          const response = await fetch(`https://work.up.railway.app/api/v1/worker/perfilById?id=${id}`, {
            method: 'GET',
          });
          const data = await response.json();
          setWorkerDataView(data);
          setShowVerMas(true);
        } catch (error) {
          console.error(error);
        }
    };

    const verMas = () => {
        fetchData();
    }

    const handleVerMasClose = () => {
        setShowVerMas(false);
    }

    return (
        <View style={[styles.container, stylestemp.containercolor]}>
            <View style={[styles.info]}>
                <View style={styles.infoData}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={styles.attributes}>
                        <Text style={[styles.locationText, styles.ratingText]}>{occupation}</Text>
                        <MaterialCommunityIcons name="briefcase-variant" size={14} color="#ededed" />
                    </View>
                    <View>
                        <Text style={styles.descriptionText}>{description}</Text>
                    </View>
                </View>
                <View>
                    <Image src={`https://unavatar.io/${keyProfilePicture}`} style={styles.photoPerfil}/>
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={verMas}
            >
                <Text style={styles.buttonText}>Ver mas...</Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={showVerMas}
                onRequestClose={() => setShowVerMas(false)}
            >
                <TouchableOpacity
                    style={styles.popup}
                    onPress={handleVerMasClose}
                >
                    <Text style={styles.buttonTextSalir}>Salir</Text>
                    <Feather name="x" size={32} color="#666" style={styles.buttonTextSalir} />
                </TouchableOpacity>
                <PerfilAccountWorkerView
                    name={workerDataView.name}
                    email={workerDataView.email}
                    occupation={workerDataView.occupation}
                    hourPrice={(workerDataView.hourPrice == 0)? 'Price not specified' : workerDataView.hourPrice}
                    description={(workerDataView.description == null || workerDataView.description == '') ? 'No description' : workerDataView.description}
                    keyProfilePicture={workerDataView.keyProfilePicture}
                    color = {color}
                    onClose={handleVerMasClose}
                />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    popup: {
        backgroundColor: '#ededed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        marginRight: 10,
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
        fontSize: 14,
        fontWeight: '600',
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
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonTextSalir: {
        color: '#666',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 50,
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
        width: '50%',
        gap: 5,
    },
    photoPerfil: {
        width: '40%',
        margin: 20,
        marginRight: 50,
        width: 120,
        height: 120,
        borderRadius: 100,
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

export default WorkerCardForWorker;