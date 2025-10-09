import { AntDesign, Feather, Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import React, { useLayoutEffect, useState } from "react"
import { ActivityIndicator, Alert, Image, ScrollView, Text, TextInput, TextInputBase, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { scale, verticalScale } from "react-native-size-matters"
import { useForgetPassMutation } from "src/redux/features/auth/authApi"

const ForgetPassword = () => {

  const navigation = useNavigation()
  const [forgetPass]=useForgetPassMutation()
  const [loading,setLoading]=useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [email,setEmail]=useState('');

  const handleForget=async()=>{
    if(!email){
      Alert.alert("Put the email.");
      return;
    }
    setLoading(true)
    try{
      const info={
        email:email
      }
      const res = await forgetPass(info).unwrap();
      if(res.success==true){
        setLoading(false)
        navigation.navigate("Success page",{Email:email})
      }
    }catch(err){
      console.log(err)
    }

    
  }

  return (
    <LinearGradient colors={['#E9D5FF', '#FFFFFF']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* header */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="justify-between flex-1 p-3">
            <View className="flex-row justify-between items-center ">
              {/* Left section: Back Icon */}
              <TouchableOpacity className="flex-1" style={{ alignItems: 'flex-start' }} onPress={()=>navigation.goBack()}>
                <Image
                  source={require("../../../assets/magic/backmagic.png")}
                  style={{ width: 50, height: 50 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              {/* Center section: Logo and Title */}
              <View className="flex-row items-center flex-2 justify-center">
                <View style={{ width: scale(50), height: verticalScale(50) }}>
                  <Image
                    source={require("../../../assets/magic/siginIcon.png")}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                  />
                </View>
                <Text className="font-interSemiBold text-xl text-[#1F2937] mb-2 ml-2">MagicTales AI</Text>
              </View>

              {/* Right section: Empty or additional content */}
              <View className="flex-1">
                {/* You can add something here if you need */}
              </View>
            </View>

            <View className=" items-center ">
              <View style={{ width: scale(80), height: verticalScale(80) }}>
                <Image source={require("../../../assets/magic/forgetimg.png")} style={{ width: "100%", height: "100%" }} />
              </View>
              <Text className="text-[#1F2937] font-interBold text-4xl mb-3">Forgot Password?</Text>
              <Text className="text-[#4B5563] font-interRegular text-center mt-2 mb-2">Don't worry! Enter your email and we'll send you a magical link to reset your password.</Text>
              <View className="w-full">
                <Text className="font-interMedium text-[#374151] text-left">Email Address</Text>
              </View>
              <View className="flex-row justify-between items-center mt-2 mb-2 border-2  rounded-2xl border-[#E9D5FF] bg-white w-full px-2" >
                <TextInput placeholder="Enter your email" placeholderTextColor={"#ADAEBC"} style={{flex:1,color:"black",height:50}}   onChangeText={setEmail}/>
                <Image source={require("../../../assets/magic/svg.png")} />
              </View>

              <View className="w-full ">
                <TouchableOpacity
                  className="mt-5 mb-2 w-full items-center overflow-hidden rounded-2xl "
                  onPress={handleForget}
                >
                  <LinearGradient
                    colors={["#A855F7", "#EC4899", "#FB923C"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                      flexDirection: 'row',  // Ensuring flex-direction is row
                      alignItems: 'center',  // Aligning items in the center
                      padding: 3,            // Padding for better touch area
                      gap: 8,                // Gap between the children, adjust as needed
                      width: '100%',         // Ensure it takes full width
                      justifyContent: 'center',  // Centering content horizontally
                      paddingVertical: 15
                    }}
                  >
                    <Image source={require("../../../assets/magic/send.png")} />
                    <Text className="text-white text-lg font-interSemiBold text-center">
                     {loading? <ActivityIndicator color={"blue"} size={"small"}/>:"Send Reset Link"}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <TouchableOpacity className="flex-row items-center gap-2 mt-5" onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} color="#9333EA" />
                <Text className="text-[#9333EA] font-interMedium">Back to Sign In</Text>
              </TouchableOpacity>
            </View>

            <View style={{ width: "100%",  alignSelf: "center" }} className="bg-white m-3 rounded-xl p-10 flex-row gap-4 shadow-md">
              <Image source={require("../../../assets/magic/help.png")} style={{ width: scale(32), height: verticalScale(32) }} resizeMode="contain" />
              <View className="flex-1">
                <Text className="text-[#1F2937] font-interSemiBold text-xl mb-2">Need Help?</Text>
                <Text className="text-[#4B5563] mb-2" numberOfLines={4}>If you're having trouble, contact our support team and we'll help you get back to creating magical stories.</Text>
                <Text className="text-[#3B82F6] font-interMedium">Contact Support</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default ForgetPassword