import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#FFF7ED", "#FDF2F8", "#F3E8FF"]} start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 justify-around ">
          {/* header */}
          <View className="items-center mt-10">
            <Text className="text-[#7E22CE] font-fredokaRegular text-4xl mt-5 ">Hi there!</Text>
            <Text className="text-[#A855F7] font-fredokaRegular mt-2">💗 Ready for a magical story? 💗</Text>
          </View>

          <View className="flex-1 items-center p-5 justify-center ">
            <View style={{ width: scale(256), height: verticalScale(192) }}>
              <Image source={require("../../../assets/magic/homeimg.png")} style={{ width: "100%", height: "100%" }} />
            </View>

            <View className="w-full ">
              <TouchableOpacity className=' bg-black rounded-2xl overflow-hidden' style={{ width: "100%" }} onPress={()=>navigation.navigate("create story 1")}>
              <LinearGradient
                colors={["#9333EA", "#DB2777"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  padding: 3,            
                  gap: 8,                
                  width: '100%',         
                  justifyContent: 'center',  
                  paddingVertical: 15
                }}
              >
                <Image source={require("../../../assets/magic/crtry.png")} />
                <Text className="text-white text-lg font-interSemiBold text-center">
                  Create a Story
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity className=' bg-white rounded-2xl overflow-hidden mt-4 flex-row items-center justify-center gap-3 p-5' style={{ width: "100%" }} onPress={()=>navigation.navigate("BottomScreen",{screen:"Library"})}>

              <Image source={require("../../../assets/magic/mylibra.png")} />
              <Text className="text-[#9333EA] text-lg font-interSemiBold text-center">
                My Library
              </Text>

            </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>

    </LinearGradient>
  );
};

export default HomeScreen;
