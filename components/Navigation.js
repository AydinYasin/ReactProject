import React from 'react';
import { StyleSheet,View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Main from './Map';
import Info from './Info';
import Favorieten from './Favorieten';

const bottom = createMaterialBottomTabNavigator();

export default Navigation = (props) => {
    return(
      <View style={styles.footer}>
        <NavigationContainer>
          <bottom.Navigator barStyle={{ backgroundColor: '#d0e8f2'}} activeColor="#30475e"inactiveColor="#3e2465" >
            <bottom.Screen name="Main"
              component={Main}
              options={{
              tabBarLabel: 'main',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="home" color="grey" size={26} />
              ),
            }}/>
            <bottom.Screen name="List"
              component={Info}
              options={{
              tabBarLabel: 'list',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="apps" color="grey" size={26} />
              ),
            }}/>
            <bottom.Screen name="Favorieten"
              component={Favorieten}
              options={{
              tabBarLabel: 'Favorieten',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="heart" color="grey" size={26} />
              ),
            }}/>
          </bottom.Navigator>
        </NavigationContainer>
      </View>
    )
  }

  const styles = StyleSheet.create({
    footer: {
      flex: 1,
      alignItems: 'stretch',
    },
    Navigatie: {
      backgroundColor: 'red',
    }
  });