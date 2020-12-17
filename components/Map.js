import MapView, { Callout, Marker } from'react-native-maps';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, ActivityIndicator, Text } from 'react-native';

export default MapContainer = (props) => {

    const [adresses,setAdresses] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadingStatus = (props) => {
        return (
        <View>
        <ActivityIndicator color="black" animating={loading}/>
        </View>
    );
    }

    const loadDetails = async() => {
        try{
            setLoading(true);
            let response = await fetch('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek6/MapServer/643/query?where=1%3D1&outFields=*&outSR=4326&f=json')
            .then((res => res.json()));
            setAdresses(response.features);
            setLoading(false);
        }
        catch (error){
            Alert.alert('Cannot load map, contact admin!');
            setLoading(false);
        }
    };
    useEffect(() => {
        loadDetails();
    }, []);


    return(
    <View style={styles.mapContainer}>
        {adresses === undefined ? <loadDetails/> : false}
        <MapView style={styles.mapStyle} 
        initialRegion={{latitude: 51.219448,longitude: 4.402464,latitudeDelta: 0.0992,longitudeDelta: 0.0421}}>  
            {adresses.map((a) =>
            <Marker style={styles.markerStyle}
                key={a.attributes.OBJECTID}
                coordinate={{latitude: a.geometry.y,longitude: a.geometry.x}}
            >
                <Callout tooltip>
                    <View>
                        <View style={styles.bubble}>
                            <Text>{a.attributes.naam}</Text>
                        </View>
                    </View>
                </Callout>
            </Marker>)}
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
},
bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 10,
    width: 150
}
});