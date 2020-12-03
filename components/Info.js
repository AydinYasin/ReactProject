import React from 'react';
import MapView from'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

export default Info = (props) => {
    return(
    <View style={styles.infoContainer}>
        <Text>Here wil be some information later!</Text>
    </View>
    )
};

const styles = StyleSheet.create({
infoContainer: {
    flex: 1,
    justifyContent: 'center',
}
});