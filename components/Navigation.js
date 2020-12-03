import React from 'react';
import { StyleSheet,View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Main from './Map';
import Info from './Info';

const bottom = createMaterialBottomTabNavigator();

export default Navigation = (props) => {
    return(
      <View style={styles.footer}>
        <NavigationContainer>
          <bottom.Navigator>
            <bottom.Screen name="Home" component={Main}/>
            <bottom.Screen name="Info" component={Info}/>
          </bottom.Navigator>
        </NavigationContainer>
      </View>
    )
  }

  const styles = StyleSheet.create({
    footer: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'stretch',
    }
  });