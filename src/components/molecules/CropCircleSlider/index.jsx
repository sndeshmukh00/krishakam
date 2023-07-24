import React, { useState } from 'react';
import { View, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import colors from '../../../theme/colors';
import CropActionPanel from '../../organisms/CropActionPanel'
import { Svg, Path } from 'react-native-svg';

const CropCircleSlider = ({ crops }) => {
  const [selectedCrop, setSelectedCrop] = useState(crops[0].id);

  const handleCropClick = (cropId) => {
    setSelectedCrop(cropId);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cropContainer}>
      <Pressable
        style={[
          styles.cropItem,
          selectedCrop === item.id ? styles.selectedCrop : null,
        ]}
        onPress={() => handleCropClick(item.id)}
      >
        {selectedCrop === item.id && (
          <Svg
            width={130}
            height={90}
            fill="none"
            style={styles.selectedSvg}
          >
            <Path
              fill={item.bgColor}
              d="M20 45C20 20.147 40.147 0 65 0s45 20.147 45 45v25.025C110.014 81.059 118.963 90 130 90H20V45zM0 90h20V70c0 11.046-8.954 20-20 20z"
            />
          </Svg>
        )}
        <Image source={item.imageUrl} style={[styles.cropImage, selectedCrop === item.id ? {borderWidth: 0, borderColor: 'transparent'} : null]} resizeMode="contain" />
      </Pressable>
    </View>
  );

  return (
    <View style={{paddingVertical: 20}}>
      <FlatList
        data={crops}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        height={100}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabBarContainer}
      />
      {selectedCrop !== null && (
        <CropActionPanel selectedCrop={crops[selectedCrop - 1]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    height: 90,
    paddingVertical: 0,
    marginVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Customize the background color of the tab-bar
  },
  cropContainer: {
    position: 'relative', // To position the SVG and Image components
  },
  cropItem: {
    borderColor: 'transparent', // Default border color for unselected crops
    overflow: 'hidden',
    borderRadius: 50,
    borderWidth: 10,
    justifyContent: 'center',
    padding: 0,
    marginHorizontal: 0,
    width: 90, // Adjust the width of the crop item
    height: 90, 
  },
  selectedCrop: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    height: 110,
    width: 150,
    marginHorizontal: -30, 
    // paddingHorizontal: -100,
  },
  selectedSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cropImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderColor: colors.textGrey,
    borderWidth: 0.3,
    shadowColor: colors.primary,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.5,
    shadowRadius: 3,
    // elevation: 10,
  },
});

export default CropCircleSlider;
