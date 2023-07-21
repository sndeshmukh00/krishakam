import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import colors from '../../theme/colors.js';
import { StatusBar } from 'expo-status-bar';


const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <StatusBar />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
})