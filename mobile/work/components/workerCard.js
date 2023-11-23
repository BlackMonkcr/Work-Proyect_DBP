import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';



var ColorGlobal = '#2f43dd';

const WorkerCard = ({ key, name, rating, description, color }) => {

    const [starPressed, setStarPressed] = useState(false);

    ColorGlobal=color;
    if (description.length > 40) {
        description = description.substring(0, 40) + '...';
    }

    const stylestemp = StyleSheet.create({
        containercolor: {
            backgroundColor:color
        }
    });

    const addFavorite = () => {
        setStarPressed(!starPressed);
        
    }

  return (
    <View style={[styles.container, stylestemp.containercolor]}>
        <View style={styles.info}>
            <View style={styles.infoData}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.attributes}>
                    <Text style={[styles.locationText, styles.ratingText]}>{rating}</Text>
                    <MaterialCommunityIcons name="star" size={14} color="#FDE52F" />
                </View>
                <View>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
            </View>
            <View>
                <Image src={"https://unavatar.io/elon"} style={styles.photoPerfil}/>
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
          onPress={addFavorite}
        >
          <FontAwesome name="star" size={24} color={starPressed ? 'yellow' : '#ededed'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
        backgroundColor: '#2F43DD',
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

export default WorkerCard;