import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, verticalScale } from 'react-native-size-matters'
// import Video from "react-native-video";
import { Octicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const StartPage1 = () => {

    const navigation = useNavigation();

    return (

        <ImageBackground source={require("../../../assets/magic/Carousel 1.png")}
            style={{ flex: 1, width: "100%", height: "100%" }}
            resizeMode="cover"
        >
            <SafeAreaView className='flex-1 items-center '>

                <View style={{ width: scale(224), height: verticalScale(224) }} className='bg-white px-2 rounded-xl mt-24'>
                    {/* <Video
                        source={require("../../../assets/video/Carousel 1.mp4")} // local mp4
                        style={{ width: "100%", height: "100%" }}
                        // controls={true}
                        resizeMode="contain"
                        repeat={true}
                    /> */}
                </View>
                <Text className='mt-4 text-xl font-poppins text-white'>From Imagination to</Text>
                <Text className='mt-1 text-xl font-poppins text-[#F59E0B]'>Page in Seconds</Text>
                <Text className='mt-1  font-interRegular text-white'>Your child dreams it, we bring it to life</Text>

                <View className='mt-5 flex-row justify-center gap-10 w-full'>
                    <Image source={require("../../../assets/magic/cr1.png")} />
                    <Image source={require("../../../assets/magic/cr-2.png")} />
                    <Image source={require("../../../assets/magic/cr-3.png")} />
                </View>

                <View className='mt-4 flex-row gap-2'>
                    <Octicons name="dot-fill" size={24} color="#667EEA" />
                    <Octicons name="dot-fill" size={24} color="#E5E7EB" />
                    <Octicons name="dot-fill" size={24} color="#E5E7EB" />
                </View>

                <View className='w-full p-5'>
                    <TouchableOpacity className="mt-5 mb-2  w-full items-center overflow-hidden rounded-lg" onPress={() => navigation.navigate("Start Page 2")}>
                        <LinearGradient colors={["#667EEA", "#764BA2"]} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }} style={{width:"100%",padding:15}} className="w-full items-center p-3">
                            <Text className="text-white text-lg font-interSemiBold text-center">Next</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View className='mt-5 flex-row justify-center gap-4 w-full'>
                    <View className='flex-row items-center gap-2'>
                        <Image source={require("../../../assets/magic/crbadge.png")} style={{ width: 12, height: 16 }} />
                        <Text className='text-[#FFFFFF] font-poppins'>safe</Text>
                    </View>
                    <View className='flex-row items-center gap-2'>
                        <Image source={require("../../../assets/magic/crclock.png")} style={{ width: 12, height: 16 }} />
                        <Text className='text-[#E5E7EB] font-poppins'>2 min</Text>
                    </View>
                    <View className='flex-row items-center gap-2'>
                        <Image source={require("../../../assets/magic/crpen.png")} style={{ width: 12, height: 16 }} />
                        <Text className='text-[#E5E7EB] font-poppins'>AI Powered</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>

    )
}

export default StartPage1