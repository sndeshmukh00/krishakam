import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../theme/colors'

const index = () => {
  return (
    <>
        <View
            style={{
                flexDirection: "row",
                marginBottom:10,
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center"
            }}
        >
            <View style={{width: "50%"}}>
                <Text 
                    style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: colors.textPrimary
                    }}
                >
                    Cure Your Crop
                </Text>
            </View>
        </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({})