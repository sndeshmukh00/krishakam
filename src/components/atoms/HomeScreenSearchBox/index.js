import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import colors from '../../../theme/colors'

const HomeScreenSearchBox = () => {
  return (
    <>
        <View
            style={{
            marginTop: -45
            }}
        >
            <View
                style={{
                    backgroundColor: colors.white,
                    borderWidth: 0.1,
                    borderColor:colors.primary,
                    paddingVertical:8,
                    paddingHorizontal: 20,
                    marginHorizontal: 20,
                    borderRadius:25,
                    marginTop: 25,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'space-between',
                    shadowColor: colors.primary,
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity:  0.5,
                    shadowRadius: 3,
                    elevation: 10,
                }}
            >
                <TextInput 
                    placeholder="Search..."
                    placeholderTextColor={colors.primary}
                    style={{
                    fontWeight:"bold",
                    fontSize: 18,
                    width: "90%"
                    }}
                />
                <Image source={require('../../../assets/icons/home.png')}  style={{width:20, height:20}}/>
            </View>
        </View>
    </>
  )
}

export default HomeScreenSearchBox

const styles = StyleSheet.create({})