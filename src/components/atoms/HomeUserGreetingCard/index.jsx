import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react';
import { windowHeight } from '../../../utils';

const HomeUserGreetingCard = () => {
  return (
    <>
        <ImageBackground
            source={require("../../../assets/images/2.jpg")}
            style={styles.bgImg}
            imageStyle={styles.bgImgStyle}
        >
            <View style={styles.greetingContainer} >
                <Text style={styles.greeting}>Hello,</Text>
                {/* TODO: Integrate User Name */}
                <Text style={styles.userName}>Krishak</Text>
            </View>
        </ImageBackground>
    </>
  )
}

export default HomeUserGreetingCard;

const styles = StyleSheet.create({
    bgImg: {
        transform: [
            { scaleX: -1 }
        ],
        height: 0.3 * windowHeight,
    },
    bgImgStyle: {
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingHorizontal: 20,
    },
    greetingContainer: {
        transform: [
            { scaleX: -1 }
        ],
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        marginTop: '20%',
        alignItems: 'flex-start',
    },
    greeting: {
        fontSize: 20
    },
    userName: {
        fontSize: 50,
        fontWeight: 'bold',
    }
})