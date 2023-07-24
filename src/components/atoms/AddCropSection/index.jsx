import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../theme/colors'

const index = () => {
  return (
    <>
        <View
            style={{
                flexDirection: "row",
                marginTop:20,
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
                    Your Plants
                </Text>
            </View>
            <View 
                style={{
                width:"50%",
                alignItems:"flex-end"
                }}
            >
                <View 
                    style={{
                        backgroundColor: colors.primary,
                        paddingHorizontal: 20,
                        paddingVertical:5,
                        borderRadius:25
                    }}
                >
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: colors.white,
                        justifyContent: "space-between"
                    }}>
                        Add New
                    </Text>
                </View>
            </View>
        </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({})