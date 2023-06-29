import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import colors from '../../theme/colors.js';
import { StatusBar } from 'expo-status-bar';


const home = () => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
      <StatusBar />
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
})