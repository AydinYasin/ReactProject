import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default TitleBar = (props) => {
    return(
       <View style={styles.titleBar}>
          <Text>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    titleBar: {
      height: 70,
      backgroundColor: 'white',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
  });
  