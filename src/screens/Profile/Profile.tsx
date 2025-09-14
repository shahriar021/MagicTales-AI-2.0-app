import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Dimensions,
  ImageSourcePropType,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { useAppSelector } from "src/redux/hooks";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { setToken } from "src/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

const { width } = Dimensions.get("window");



const isTablet = width > 768;

export default function YourComponent() {
  const dispatch=useDispatch()

  const navigation = useNavigation();

  const { width, height } = useWindowDimensions()

  const handleLogout=()=>{
    dispatch(setToken(null))
  }

  return (
    <LinearGradient colors={["#FFF3E4", "#E4F0FF"]} style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 p-3">

        <View className="flex-row justify-between mb-4">
          <View className="flex-row items-center gap-2">
            <View style={{ width: 56, height: 56 }} className="rounded-full overflow-hidden">
              <Image source={require("../../../assets/magic/shahriar.jpeg")} style={{ width: "100%", height: "100%" }} />
            </View>
            <View>
              <Text className="text-[#1F2937] font-interBold text-xl">Sarah joshns</Text>
              <Text className="text-[#4B5563] font-interRegular">sarah.j@email.com</Text>
            </View>
          </View>

          <TouchableOpacity className="bg-white p-1 rounded-full overflow-hidden w-[40] h-[40] items-center justify-center">
            <MaterialIcons name="notifications-active" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="justify-between flex-1 mt-3 mb-3 p-3">
          <View>

            <TouchableOpacity className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" onPress={()=>navigation.navigate("Account Settings")}>
              <View className="flex-row items-center gap-2">
                <Image source={require("../../../assets/magic/account.png")} style={{width:48,height:48}}/>
                <View>
                  <Text className="text-[#1F2937] font-interMedium text-lg">Account Settings</Text>
                  <Text className="text-sm text-[#6B7280]">Manage your profile</Text>
                </View>
              </View>
              <AntDesign name="right" size={24} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" onPress={()=>navigation.navigate("Subscriptions")}>
              <View className="flex-row items-center gap-2">
                <Image source={require("../../../assets/magic/subscrip.png")} style={{width:48,height:48}}/>
                <View>
                  <Text className="text-[#1F2937] font-interMedium text-lg">Subscription & Billing</Text>
                  <Text className="text-sm text-[#6B7280]">Manage payments</Text>
                </View>
              </View>
              <AntDesign name="right" size={24} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" onPress={()=>navigation.navigate("Language")}>
              <View className="flex-row items-center gap-2">
                <Image source={require("../../../assets/magic/langu.png")} style={{width:48,height:48}}/>
                <View>
                  <Text className="text-[#1F2937] font-interMedium text-lg">Language</Text>
                  <Text className="text-sm text-[#6B7280]">English (US)</Text>
                </View>
              </View>
              <AntDesign name="right" size={24} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" onPress={()=>navigation.navigate("Help & Support")}>
              <View className="flex-row items-center gap-2">
                <Image source={require("../../../assets/magic/help.png")} style={{width:48,height:48}}/>
                <View>
                  <Text className="text-[#1F2937] font-interMedium text-lg">Help & Support</Text>
                  <Text className="text-sm text-[#6B7280]">Get assistance</Text>
                </View>
              </View>
              <AntDesign name="right" size={24} color="#9CA3AF" />
            </TouchableOpacity>

          </View>

          <TouchableOpacity onPress={handleLogout}>
            <Text className="text-[#EF4444] font-interMedium text-xl text-center">Log Out</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );


}


