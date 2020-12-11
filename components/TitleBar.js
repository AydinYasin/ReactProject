import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default TitleBar = (props) => {
    return(
       <View style={styles.titleBar}>
          <Text style={styles.titleTekst}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    titleBar: {
      height: 60,
      backgroundColor: '#d0e8f2',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    titleTekst: {
      fontSize: 22,
      textAlign: 'center',
      fontFamily: 'monospace',
      textTransform: 'capitalize'
    }
  });
  