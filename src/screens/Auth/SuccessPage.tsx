import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale } from 'react-native-size-matters';

const SuccessPage = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const handleVerify = () => {
    navigation.navigate("Login Screen" as never);
  };


  const circleSize = scale(82)
  return (
    <ImageBackground source={require("../../../assets/magic/Email Verification.png")} style={{ width: "100%", height: "100%" }} resizeMode='cover'>
      <SafeAreaView className='flex-1  '>
        <View className='justify-between  p-5  flex-1'>
          {/* header section: Logo and Title */}
          <View className=" items-center ">
            <View className="flex-row items-center flex-2 justify-center">
              <View style={{ width: scale(50), height: verticalScale(50) }}>
                <Image
                  source={require("../../../assets/magic/magicai.png")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                />
              </View>
              <Text className="font-interSemiBold text-xl text-[#ffffff] mb-2 ml-2">MagicTales AI</Text>
            </View>

          </View>

          <View className='items-center  ' >
            <View style={{ width: scale(165), height: verticalScale(132) }}>
              <Image source={require("../../../assets/magic/emailsuccess.png")} style={{ width: "100%", height: "100%" }} />
            </View>

            <Text className='font-interBold text-white text-2xl text-center mb-3'>Check Your Email</Text>
            <Text className='font-interMedium text-white  text-center mb-3 '>Please check your inbox to verify your account and start creating magical stories.</Text>

            <TouchableOpacity className=' bg-black rounded-xl overflow-hidden' style={{ width: "100%" }}>
              <LinearGradient
                colors={["#F97316", "#F15867", "#EC4899"]}
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
                <Image source={require("../../../assets/magic/emailapp.png")} />
                <Text className="text-white text-lg font-interSemiBold text-center">
                  Open Email App
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity className=' bg-gray-500 rounded-xl overflow-hidden mt-4 flex-row items-center justify-center gap-3 p-5' style={{ width: "100%" }}>

              <Image source={require("../../../assets/magic/recl.png")} />
              <Text className="text-white text-lg font-interSemiBold text-center">
                Resend Link
              </Text>

            </TouchableOpacity>

            <Text className='font-interMedium mt-5 text-white underline'>Need to change your email address?</Text>
          </View>

          <View>
            <Text className='text-white text-center'>Didn't receive the email? Check your spam folder</Text>
            <View className='flex-row justify-center gap-3 mt-3 px-5'>
              <Text className='text-white underline'>Terms of Service</Text>
              <Text className='text-white underline'>Privacy Policy</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>

    </ImageBackground>
  );
};

export default SuccessPage;




