import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default Info = (props) => {


return(
<View style={styles.infoContainer}>
    <Text>Here will be your favo</Text>
</View>
)
};

const styles = StyleSheet.create({
infoContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
}
});