import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PerfilAccountWorkerView from '../components/perfilAccountWorkerView.js';

var ColorGlobal = '#2f43dd';

const WorkerCardFavorites = ({ id, name, occupation, description, color, keyProfilePicture}) => {
    const [showVerMas, setShowVerMas] = useState(false);
    const [workerDataView, setWorkerDataView] = useState({});
    ColorGlobal=color;
    if (description.length > 40) {
        description = description.substring(0, 40) + '...';
    }

    const stylestemp = StyleSheet.create({
        containercolor: {
            backgroundColor: color,
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
        <View style={styles.info}>
            <View style={styles.infoData}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.attributes}>
                    <Text style={[styles.locationText, styles.ratingText]}>{occupation}</Text>
                    <MaterialCommunityIcons name="briefcase-variant" size={14} color="#ededed" />
                </View>
                <View >
                    <Text style={styles.ratingText}>Description: {description}</Text>
                </View>
            </View>
            <View>
                <Image src={`https://unavatar.io/${keyProfilePicture}`} style={styles.photoPerfil}/>
            </View>
        </View>

      <View style={styles.buttons}>
        <TouchableOpacity
            style={styles.button}
        >
            <Text style={styles.buttonText}>Solicitar</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={verMas}
        >
            <Text style={styles.buttonTextSecondary}>Ver más...</Text>
        </TouchableOpacity>

        <Modal
            transparent={true}
            visible={showVerMas}
            onRequestClose={() => setShowVerMas(false)}
        >
            <PerfilAccountWorkerView
                name={workerDataView.name}
                email={workerDataView.email}
                phone={workerDataView.phone}
                occupation={workerDataView.occupation}
                hourPrice={(workerDataView.hourPrice == 0)? 'Price not specified' : workerDataView.hourPrice}
                description={(workerDataView.description == null || workerDataView.description == '') ? 'No description' : workerDataView.description}
                keyProfilePicture={workerDataView.keyProfilePicture}
                color = {color}
                onClose={handleVerMasClose}
            />
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 195,
        borderRadius: 10,
        backgroundColor: '#532FDE',
        margin: 20,
        padding: 20,
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowOffset: { width: 5, height: 5 },
        elevation: 20,
    },
    occupationText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ededed',
        overflow: 'hidden',
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    secondaryButton: {
        backgroundColor: '#532FDE',
        borderWidth: 1,
        borderColor: '#ededed',
    },
    button: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ededed',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ededed',
    },
    buttonText: {
        color: '#555',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonTextSecondary: {
        color: '#ededed',
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

export default WorkerCardFavorites;