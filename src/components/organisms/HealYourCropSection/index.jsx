import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import HealYourCropCards from '../../atoms/HealYourCropCards';
import HealYourCropHeading from '../../atoms/HealYourCropHeading';
import colors from '../../../theme/colors';

const ElevationShadow = (elevation) => {
  return {
    elevation,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  };
};

const YourComponent = () => {
  return (
    <View style={styles.container}>
      <HealYourCropHeading />
      <View style={[styles.card, ElevationShadow(4)]}>
        <View style={styles.rowContainer}>
          <HealYourCropCards />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Take a Picture</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  card: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginBottom: 20
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepText: {
    marginLeft: 8,
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default YourComponent;
