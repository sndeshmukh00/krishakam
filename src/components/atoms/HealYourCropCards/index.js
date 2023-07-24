import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../theme/colors'
import Click from '../../../assets/svgs/click.svg'
import Diagnose from '../../../assets/svgs/diagnose.svg'
import Pesticide from '../../../assets/svgs/pesticide.svg'
import { Svg, Path } from 'react-native-svg';

const HealYourCropCards = () => {
  return (
    <>
      <View style={styles.responsiveDiv}>
        <View>
          <Click height={40} width={40} />
        </View>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Click a Picture</Text>
      </View>

        <View style={styles.arrowContainer}>
            {/* Replace the "d" attribute below with your desired SVG path data */}
            <Svg width={28} height={28} fill={colors.primary} viewBox="0 0 24 24">
            <Path d="M0 0h24v24H0z" fill="none" />
            <Path d="M8.59 16.34L13.17 12 8.59 7.66 10 6.25l6 6-6 6z" />
            </Svg>
        </View>

      <View style={styles.responsiveDiv}>
        <View>
          <Diagnose height={40} width={40} />
        </View>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Diagnose Disease</Text>
      </View>

      <View style={styles.arrowContainer}>
            {/* Replace the "d" attribute below with your desired SVG path data */}
            <Svg width={28} height={28} fill={colors.primary} viewBox="0 0 24 24">
            <Path d="M0 0h24v24H0z" fill="none" />
            <Path d="M8.59 16.34L13.17 12 8.59 7.66 10 6.25l6 6-6 6z" />
            </Svg>
        </View>

      <View style={styles.responsiveDiv}>
        <View>
          <Pesticide height={40} width={40} />
        </View>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Get Medicines</Text>
      </View>
    </>
  )
}

export default HealYourCropCards

const styles = StyleSheet.create({
  responsiveDiv: {
    height: 100,
    width: '26%',
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    // shadowColor: colors.black,
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity:  0.5,
    // shadowRadius: 3,
    // elevation: 4,
  },
})