import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform, Text, useWindowDimensions, View } from "react-native";

const BottomTabs = createBottomTabNavigator();

import { TouchableOpacity } from 'react-native';
import { HomeScreen, Profile } from "src/screens";
import Gallery from "src/screens/Gallery/Gallery";
import Library from "src/screens/Library/Library";

const CustomTabBarButton = ({ children, onPress, accessibilityState }: any) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      }}
    >
      {children}
    </TouchableOpacity>
  );
};


export const BottomNavigation = () => {


  const { width } = useWindowDimensions();

  return (
    <View className="bg-transparent flex-1">
      <BottomTabs.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {

            marginHorizontal: 7,
            marginBottom: Platform.OS === "android" ? 10 : 16,
            paddingBottom: 7,
            height: 72,
            backgroundColor: "#fff",
            overflow: "hidden"
          },
          tabBarLabelStyle: {
            fontSize: width > 450 ? 14 : 10,
            width: "100%",
          },
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#C5BAFF",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Black",

          },
          tabBarLabelPosition: "below-icon",
          headerTintColor: "#5b21b6",
        }}
      >


        <BottomTabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerTitle: () => null,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center",gap:1 }} className="">
                {focused?<Image source={require("../../assets/magic/homemagicion.png")} style={{ width: 30, height: 30 }} />:
                <Image source={require("../../assets/magic/home-inactive.png")} style={{ width: 45, height: 45 }} />}
                {focused && <Text className="text-center w-[50]" style={{ color: "#9333EA", fontSize: 10 }}>Home</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />


        <BottomTabs.Screen
          name="Library"
          component={Library}
          options={{
            headerShown:false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                {focused?<Image source={require("../../assets/magic/library-active.png")} style={{ width: 30, height: 30 }} />:
                <Image source={require("../../assets/magic/library-inactive.png")} style={{ width: 45, height: 45 }} />}
                {focused && <Text className="text-center w-[50]" style={{ color: "#9333EA", fontSize: 10 }}>Library</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />

        <BottomTabs.Screen
          name="Gallery"
          component={Gallery}
          options={{
            headerShown:false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center",gap:1 }}>
               
                {focused ? <Image source={require("../../assets/magic/gallery.png")} style={{ width: 30, height: 30 }} />:
                 <Image source={require("../../assets/magic/gallery-inactive.png")} style={{ width: 45, height: 45 }} />}
                {focused && <Text className="text-center w-[50]" style={{ color: "#9333EA", fontSize: 10 }}>Gallery</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <BottomTabs.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown:false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center",gap:1 }}>

               { focused?<Image source={require("../../assets/magic/profile.png")} style={{ width: 30, height: 30 }} />:
                <Image source={require("../../assets/magic/profile-inactive.png")} style={{ width: 45, height: 45 }} />}
                {focused && <Text className="text-center w-[50]" style={{ color: "#9333EA", fontSize: 10 }}>Profile</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />



      </BottomTabs.Navigator>
    </View>
  );
};
