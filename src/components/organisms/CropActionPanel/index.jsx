import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../../theme/colors';
import YourCropActionBox from '../../atoms/YourCropActionBox';
import Fertilizer from '../../../assets/svgs/fertilizer.svg'
import Pest from '../../../assets/svgs/pest.svg'
import Cultivation from '../../../assets/svgs/cultivation.svg'

const CropActionPanel = ({ selectedCrop }) => {
  const actionBoxes = [
    {index: 1, name: 'Cultivation Guide', SvgComponent: Cultivation},
    {index: 2, name: 'Pest & Disease', SvgComponent: Pest},
    {index: 3, name: 'Fertilizer Planner', SvgComponent: Fertilizer}
  ];

  return (
    <View style={[styles.cropActionBox, {backgroundColor: selectedCrop.bgColor}]}>
        <Text style={styles.selectedCropName}>{selectedCrop.name}</Text>
        <View style={styles.cropActionBoxChild}>
            {actionBoxes.map((action) => (
                <YourCropActionBox key={action.index} SvgComponent={action.SvgComponent} name={action.name} bgColor={selectedCrop.bgColor}/>
            ))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cropActionBox: {
    marginTop: -10,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    padding: 10,
    flexDirection: 'column',
  },
  cropActionBoxChild: {
    marginTop: -10,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  responsiveDiv: {
    height: 100,
    width: '32%',
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  selectedCropName: {
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.text,
  }
});

export default CropActionPanel;
