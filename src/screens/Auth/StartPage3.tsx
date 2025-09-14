import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Video from 'react-native-video'
import { scale, verticalScale } from 'react-native-size-matters'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Octicons } from '@expo/vector-icons'

const StartPage3 = () => {

    const gradientColors = {
        "1":["#FCA5A5", "#EF4444"],
        "2":["#93C5FD", "#3B82F6"],
        "3":["#F9A8D4", "#EC4899"],
        "4":["#86EFAC", "#22C55E"],
        "5":["#D8B4FE", "#A855F7"],
        "6":["#FDBA74", "#F97316"]
    };


    const [librayList] = useState(Array.from({ length: 6 }, (_, i) => i + 1))
    const navigation = useNavigation()

    console.log(librayList.map(item=>item), "libraryqq")

    const screenWidth = Dimensions.get('window').width;
    const boxWidth = (screenWidth - 40 - 16) / 3;

    return (
        <ImageBackground source={require("../../../assets/magic/Carousel 3.png")}
            style={{ flex: 1, width: "100%", height: "100%" }}
            resizeMode="cover"
        >
            <SafeAreaView className='flex-1 items-center justify-between'>
                <View style={{ width: scale(224), height: verticalScale(224) }} className='bg-white px-2 rounded-xl mt-24'>
                    {/* <Video
                        source={require("../../../assets/video/Carousel 3.mp4")} // local mp4
                        style={{ width: "100%", height: "100%" }}
                        // controls={true}
                        resizeMode="contain"
                        repeat={true}
                    /> */}
                </View>

                <View className='w-full p-3'>
                    <View className='bg-white border-black border-4 rounded-xl mx-5 p-2'>
                        <Text className='font-interSemiBold text-black'>
                            My Library
                        </Text>

                        <View className='flex-row flex-wrap mt-2 gap-2 items-center justify-center'>
                            {librayList.map((item, index) => <View key={item} className='w-[30%] overflow-hidden rounded-lg' >
                                <LinearGradient
                                    colors={gradientColors[item.toString()]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    
                                    style={{padding:10}}
                                    
                                >
                                   <Text>{""}</Text>
                                </LinearGradient>
                            </View>)}
                        </View>


                        
                    </View>

                    <Text className='text-center mt-3 mb-3 text-white font-interBold text-xl'>
                        A New Adventure Every Day
                    </Text>
                    <Text className='text-center mt-3 mb-3 text-[#000] font-interRegular'>
                        Narration, sound effects, and gentle learning moments.
                    </Text>
                </View>

                <View className='mt-4 flex-row gap-2'>
                    <Octicons name="dot-fill" size={24} color="#FDE68A" />
                    <Octicons name="dot-fill" size={24} color="#FDE68A" />
                    <Octicons name="dot-fill" size={24} color="#F97316" />
                </View>

                <View className='w-full p-5 '>
                    <TouchableOpacity className="mt-5 mb-2  w-full items-center overflow-hidden rounded-lg" onPress={() => navigation.navigate("Sign Up")}>
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

export default StartPage3




