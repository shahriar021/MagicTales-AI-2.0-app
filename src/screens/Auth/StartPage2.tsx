import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Video from 'react-native-video'
import { scale, verticalScale } from 'react-native-size-matters'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Octicons } from '@expo/vector-icons'

const StartPage2 = () => {

    const navigation = useNavigation()

    return (
        <ImageBackground source={require("../../../assets/magic/Carousel 2.png")}
            style={{ flex: 1, width: "100%", height: "100%" }}
            resizeMode="cover"
        >
            <SafeAreaView className='flex-1 items-center justify-between'>
                <View style={{ width: scale(224), height: verticalScale(224) }} className='bg-white px-2 rounded-xl mt-24'>
                    {/* <Video
                        source={require("../../../assets/video/Carousel 2.mp4")} 
                        style={{ width: "100%", height: "100%" }}
                        // controls={true}
                        resizeMode="contain"
                        repeat={true}
                    /> */}
                </View>

                <View className='w-full p-3'>
                    
                    <Text className='text-center mt-3 mb-3 text-[#475569] font-interRegular'>Watch their personal library grow with every story they create.</Text>
                </View>

                <View className='mt-4 flex-row gap-2'>
                    <Octicons name="dot-fill" size={24} color="#FDE68A" />
                    <Octicons name="dot-fill" size={24} color="#F97316" />
                    <Octicons name="dot-fill" size={24} color="#FDE68A" />
                </View>

                <View className='w-full p-5 '>
                    <TouchableOpacity className="mt-5 mb-2  w-full items-center overflow-hidden rounded-lg" onPress={() => navigation.navigate("Start Page 3")}>
                        <LinearGradient colors={["#F97316", "#F59E0B"]} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }} style={{width:"100%",padding:15}} className="w-full items-center p-3">
                            <Text className="text-white text-lg font-interSemiBold text-center">Next</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </ImageBackground>
    )
}

export default StartPage2