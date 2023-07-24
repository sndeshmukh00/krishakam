import { StyleSheet, Image, View, TouchableHighlight, Animated, Pressable } from 'react-native'
import React from 'react'
import colors from '../../../theme/colors'


const buttonSize = new Animated.Value(1);
const mode = new Animated.Value(0);
const handlePress = () => {
    // Animated.sequence([
    //     Animated.timing(buttonSize, {
    //         toValue: 0.95,
    //         duration: 200,
    //         useNativeDriver: false
    //     }),
    //     Animated.timing(buttonSize, {
    //         toValue: 1,
    //         useNativeDriver: false
    //     }),
    //     Animated.timing(mode, {
    //         toValue: mode._value === 0 ? 1 : 0,
    //         useNativeDriver: false
    //     })
    // ]).start();
}

const CaptureButton = () => {
    
    // const sizeStyle = {
    //     transform: [{scale: buttonSize}]
    // };
    // const rotation = mode.interpolate({
    //     inputRange: [0,1],
    //     outputRange: ["0deg", "45deg"]
    // });

    // const cameraX = mode.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [-24, -70]
    // });
    // const cameraY = mode.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [-50, -120]
    // });
    
    // const galleryX = mode.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [-24, 25]
    // });
    // const galleryY = mode.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [-50, -120]
    // });

  return (
    <View style={{position: 'absolute', alignItems: 'center'}}>
        {/* <Animated.View style={{position: 'absolute', left: cameraX, top: cameraY}}>
            <View style={styles.secondaryButton}>
                <Image 
                    source={require("../../../assets/icons/camera.png")}
                    style={{height: 24, width: 24}}
                />
            </View>
        </Animated.View>
        <Animated.View style={{position: 'absolute', left: galleryX, top: galleryY}}>
            <View style={styles.secondaryButton}>
                <Image 
                    source={require("../../../assets/icons/gallery.png")}
                    style={{height: 24, width: 24}}
                />
            </View>
        </Animated.View> */}
        {/* <Animated.View style={[styles.button, sizeStyle]}>
            <TouchableHighlight onPress={handlePress} underlayColor={colors.primary} >
                <Animated.View style={{transform: [{rotate: rotation}]}}>
                    <Image 
                        source={require("../../../assets/icons/capture.png")}
                        style={{height: 24, width: 24}}
                    />
                </Animated.View>
            </TouchableHighlight>
        </Animated.View> */}
        <View style={[styles.button]}>
            <Pressable underlayColor={colors.primary} >
                <View>
                    <Image 
                        source={require("../../../assets/icons/capture.png")}
                        style={{height: 24, width: 24}}
                    />
                </View>
            </Pressable>
        </View>
    </View>
  )
}

export default CaptureButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: 68,
        height: 68,
        borderRadius: 36,
        position: 'absolute',
        top: -60,
        shadowColor: colors.black,
        shadowOffset: {height: 10},
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: colors.white
    },
    secondaryButton: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: colors.primary,
    }
})