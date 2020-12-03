import React from 'react';
import MapView from'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default MapContainer = (props) => {
    return(
    <View style={styles.mapContainer}>
        <MapView style={styles.mapStyle} initialRegion={{latitude: 51.219448,longitude: 4.402464,latitudeDelta: 0.0992,longitudeDelta: 0.0421,}}/>
    </View>
    )
};

const styles = StyleSheet.create({
mapContainer: {
    flex: 1,
    justifyContent: 'center',
},
mapStyle: {
    flex: 1
}
});