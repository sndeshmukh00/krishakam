import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import colors from '../../theme/colors.js';
import { StatusBar } from 'expo-status-bar';


const Shop = () => {
  return (
    <View style={styles.container}>
      <Text>Shop</Text>
      <StatusBar />
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
})