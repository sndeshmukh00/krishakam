import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, {useState} from 'react';
import colors from '../../theme/colors.js';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import crops from '../../data/index.js'
import HomeUserGreetingCardWithSearch from '../../components/molecules/HomeUserGreetingCardWithSearch'
import YourCropSection from '../../components/organisms/YourCropSection/index.jsx'
import HealYourCropSection from '../../components/organisms/HealYourCropSection/index.jsx'
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>

      {/* Top Image with greeting Section and SearchBar */}
      <HomeUserGreetingCardWithSearch />

      {/* Your Crop Section */}
      <YourCropSection crops={crops} />

      <HealYourCropSection />


    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
})