import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import colors from '../../theme/colors.js';
import { StatusBar } from 'expo-status-bar';


const Community = () => {
  return (
    <View style={styles.container}>
      <Text>Community</Text>
      <StatusBar />
    </View>
  )
}

export default Community

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
})