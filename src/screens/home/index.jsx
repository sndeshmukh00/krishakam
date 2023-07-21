import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions, ScrollView, TextInput, FlatList, Pressable } from 'react-native'
import React, {useState} from 'react';
import colors from '../../theme/colors.js';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Rice from '../../assets/pngs/rice.png'
import Wheat from '../../assets/pngs/wheat.png'
import Tomato from '../../assets/pngs/tomato.png'
import Banana from '../../assets/pngs/banana.png'
import Brinjal from '../../assets/pngs/brinjal.png'
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import {MaterialCommunityIcons} from '@expo/vector-icons'

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const Home = ({navigation}) => {
  const [selectedCrop, setSelectedCrop] = useState(null);

  // Sample crop data
  const crops = [
    { id: 1, name: 'Rice', details: 'Details of Crop 1', imageUrl: Rice },
    { id: 2, name: 'Wheat', details: 'Details of Crop 2', imageUrl: Wheat },
    { id: 3, name: 'Tomato', details: 'Details of Crop 3', imageUrl: Tomato },
    { id: 4, name: 'Banana', details: 'Details of Crop 4', imageUrl: Banana },
    { id: 5, name: 'Brinjal', details: 'Details of Crop 5', imageUrl: Brinjal },
    // Add more crops as needed
  ];

  const tabs = [
    {
      name: 'Home',
      activeIcon: <MaterialCommunityIcons name="view-dashboard" color="#fff" size={25} />,
      inactiveIcon: <MaterialCommunityIcons name="view-dashboard-outline" color="#4d4d4d" size={25} />
    },
    {
      name: 'list',
      activeIcon: <MaterialCommunityIcons name="view-dashboard" color="#fff" size={25} />,
      inactiveIcon: <MaterialCommunityIcons name="view-dashboard-outline" color="#4d4d4d" size={25} />
    },
    {
      name: 'camera',
      activeIcon: <MaterialCommunityIcons name="view-dashboard" color="#fff" size={25} />,
      inactiveIcon: <MaterialCommunityIcons name="view-dashboard-outline" color="#4d4d4d" size={25} />
    }
  ];

  const handleCropClick = (crop) => {
    setSelectedCrop(crop);
  };
  const renderCrops = ({ item, index }) => (
    <View style={{ padding: 10, width: 100, height: 100}}>
    {/* <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={180}
          height={100}
          fill="none"
          // {...props}
        >
          <Path fill="transparent" d="M0 0h108v79H0z" />
          <Path
            width='100'
            fill="red"
            d="M0 79h108c-10.845 0-19.636-9.345-19.636-20.87V37.523C88.364 17.352 72.978 1 54 1 35.022 1 19.636 17.352 19.636 37.524v20.605C19.636 69.657 10.846 79 0 79z"
          />
      
        </Svg> */}
        <Tabbar
          tabs={tabs}
          tabBarContainerBackground='#6699ff'
          tabBarBackground='#fff'
          activeTabBackground='#6699ff'
          labelStyle={{ color: '#4d4d4d', fontWeight: '600', fontSize: 11 }}
          onTabChange={() => console.log('Tab changed')}
        />
        <Pressable
        onPress={() => handleCropClick(item)}
        style={({ pressed }) => [
          {
            zIndex: 1,
            top: -110,
            height: 80,
            width: 80,
            elevation: 2,
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 100,
            marginBottom: 10,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: selectedCrop === item ? colors.gray : colors.white,
          },
          pressed && { opacity: 0.5 }, // Adjust the opacity when pressed if desired
        ]}
      >
          <Image
            source={item.imageUrl}
            style={{ width: 60, height: 60}}
            resizeMode="contain"
          />
      </Pressable>
      <Text style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
        {item.name}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>

      {/* Top Image with greeting Section Starts Here */}
      <ImageBackground
        source={require("../../assets/images/2.jpg")}
        style={{
          transform: [
            { scaleX: -1 }
          ],
          height: 0.3 * windowHeight,
        }}
        imageStyle={{
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          paddingHorizontal: 20
        }}
      >
        <View style={{
          transform: [
            { scaleX: -1 }
          ],
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingHorizontal: 20,
          marginTop: '20%',
          alignItems: 'flex-start'
        }} >
          <Text style={{fontSize: 20}}>Hello,</Text>
          {/* TODO: Integrate User Name */}
          <Text style={{fontSize: 50, fontWeight: 'bold'}}>Krishak</Text>
        </View>
      </ImageBackground>
      {/* Top Image with greeting Section Ends Here */}

      {/* Search Bar with shadow Section Starts Here */}
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
          <Image source={require('../../assets/icons/home.png')}  style={{width:20, height:20}}/>
        </View>

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
            <Text style={{
              fontWeight: "bold",
              fontSize: 20,
              color: colors.textPrimary
            }}>Your Plants</Text>
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

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{height: 88}}
        data={crops}
        renderItem={renderCrops}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ marginTop: 0, borderColor: 'red', borderWidth: 1, backgroundColor: selectedCrop ? 'red' : 'green' }}
        // style={[styles.selectedCropDetails, {  }]}
      >
        {selectedCrop ? (
          <Text>{selectedCrop.details}</Text>
        ) : (
          <Text>Please select a crop</Text>
        )}
      </View>

      </View>
      {/* Search Bar with shadow Section Ends Here */}


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})