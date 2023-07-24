import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../theme/colors'

const YourCropActionBox = ({SvgComponent, name, bgColor}) => {
  return (
    <>
      <View style={styles.responsiveDiv}>
        <View style={{borderRadius: 50, borderColor: colors.black, borderWidth: 0.1, padding: 6, backgroundColor: bgColor}}>
          <SvgComponent height={24} width={24} />
        </View>
        <Text style={{fontWeight: 'bold'}}>{name}</Text>
      </View>
    </>
  )
}

export default YourCropActionBox

const styles = StyleSheet.create({
  responsiveDiv: {
    height: 100,
    width: '32%',
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.5,
    shadowRadius: 3,
    elevation: 4,
  },
})