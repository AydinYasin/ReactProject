import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, ActivityIndicator } from 'react-native';

export default Info = (props) => {

const [adres, setDetails] = useState([]);
const [loading, setLoading] = useState(false);

const loadDetails = async() => {
    try{
        setLoading(true);
        let response = await fetch('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek6/MapServer/643/query?where=1%3D1&outFields=*&outSR=4326&f=json');
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

const AdresView = (props) => {
    for (let index = 0; index < adres.length; index++) {
    
    return (
    <View style={styles.infoAdres}>
    <Text key={props.adres.id} style={styles.infoAdres}>{props.adres.naam}</Text>    
    <Text key={props.adres.id + index}>{props.adres.straat} {props.adres.huisnummer}</Text>
    </View>
);
}
}

return(
<View style={styles.infoContainer}>
    <ActivityIndicator color="black" animating={loading}/>
<ScrollView>
        {adres.map((a) => <AdresView adres={a.attributes}/>)}
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