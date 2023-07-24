import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import colors from '../../theme/colors.js';
import { StatusBar } from 'expo-status-bar';


const CapturePhoto = () => {
  return (
    <View style={styles.container}>
      <Text>CapturePhoto</Text>
      <StatusBar />
    </View>
  )
}

export default CapturePhoto;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
})