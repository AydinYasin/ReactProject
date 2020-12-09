import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, ActivityIndicator } from 'react-native';



export default Info = (props) => {

const AdresView = (props) => {
    return (
    <View style={styles.infoAdres}>
    <Text>{props.adres.ADRES}</Text>
    </View>
);
}

const [adres, setDetails] = useState([]);
const [loading, setLoading] = useState(false);

const loadDetails = async() => {
    try{
        setLoading(true);
        let response = await fetch('https://opendata.arcgis.com/datasets/c6152054d1d140bfa02ee5bdbf2d8e1b_585.geojson');
        let json = await response.json();
    
        setDetails(json.features);
        setLoading(false);
    }
    catch (error){
        Alert.alert('Cannot load details, contact admin!');
        setLoading(false);
    }
};

useEffect(() => {
    loadDetails();
}, []);

return(
<View style={styles.infoContainer}>
    <ActivityIndicator color="black" animating={loading}/>
<ScrollView>
        {adres.map((a) => <AdresView adres={a.properties}/>)}
</ScrollView>

</View>
)
};

const styles = StyleSheet.create({
infoContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
},
infoAdres: {
    padding: 5,
}
});