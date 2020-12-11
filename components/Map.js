import MapView, { Marker } from'react-native-maps';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

export default MapContainer = (props) => {

    const [adres,setDetails] = useState([]);
    //const [loading, setLoading] = useState(false);

    const loadDetails = async() => {
        try{
            //setLoading(true);
            let response = await fetch('https://opendata.arcgis.com/datasets/c6152054d1d140bfa02ee5bdbf2d8e1b_585.geojson');
            let json = await response.json();
        
            setDetails(json.features);
            //setLoading(false);
        }
        catch (error){
            Alert.alert('Cannot load map, contact admin!');
            //setLoading(false);
        }
    };
    useEffect(() => {
        loadDetails();
        console.log('data fetched corrctly!');
    }, []);


    return(
    <View style={styles.mapContainer}>
        <MapView style={styles.mapStyle} 
        initialRegion={{latitude: 51.219448,longitude: 4.402464,latitudeDelta: 0.0992,longitudeDelta: 0.0421}}>  
            {adres.map((a) => 
            <Marker
            coordinate={{latitude: a.geometry.coordinates[0],longitude: a.geometry.coordinates[1]}}
            />)}
        </MapView>
    </View>

    );  

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