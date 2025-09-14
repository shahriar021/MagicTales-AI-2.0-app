import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Progress from "react-native-progress";
import { scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const GeneratingPage = () => {
    const navigation = useNavigation()
    return (
        <LinearGradient colors={["#667EEA", "#764BA2"]} style={{ flex: 1 }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>

            <SafeAreaView className='flex-1 p-3'>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View className='p-2 rounded-lg flex-row items-center gap-2 mt-1 mb-2' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
                    <Image source={require("../../../assets/magic/okGenerate.png")} style={{ width: 48, height: 48 }} />
                    <View>
                        <Text className='text-white font-bold'>Writing</Text>
                        <Text className='text-white'>Story complete ✨</Text>
                    </View>
                </View>

                <View className='p-2 rounded-lg flex-row items-center gap-2 mt-1 mb-2' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
                    <Image source={require("../../../assets/magic/okGenerate.png")} style={{ width: 48, height: 48 }} />
                    <View>
                        <Text className='text-white font-bold'>Illustrating</Text>
                        <Text className='text-white'>Painting stars and magical forests... ✨🎨</Text>
                    </View>
                </View>

                <View className='p-2 rounded-lg flex-row items-center gap-2 mt-1 mb-2' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
                    <Image source={require("../../../assets/magic/okGenerate.png")} style={{ width: 48, height: 48 }} />
                    <View>
                        <Text className='text-white font-bold'>Narration</Text>
                        <Text className='text-white'>Adding voice magic... 🎙️</Text>
                    </View>
                </View>

                <View className='p-4 rounded-lg  items-center gap-4 mt-1 mb-2  w-full ' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
                    <Progress.Bar progress={0.6} width={null} height={10} color='#A855F7' unfilledColor='#E4E6EA' borderColor='lightgray' style={{ width: "100%" }} />
                    <View className=' w-full items-center gap-2'>
                        <Text className='text-white font-bold'>65% Complete</Text>
                        <Text className='text-white'>Almost ready for bedtime! 🌙</Text>
                    </View>
                </View>

                <View className='items-center mt-2 mb-2'>
                    <View style={{ width: scale(80), height: verticalScale(80) }}>
                        <Image source={require("../../../assets/magic/almost.png")} style={{ width: "100%", height: "100%" }} />
                    </View>
                    <Text className='text-white font-interBold text-2xl text-center'>Almost There!</Text>
                    <Text className='text-white font-interRegular text-xl text-center mt-1 mb-2'>Your magical story is taking shape ✨</Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }} className='p-3 rounded-lg gap-4 mt-2 mb-4' onPress={()=>navigation.navigate("View Libray")}>
                    <Text className='font-interSemiBold text-white'>Story Preview</Text>
                    <View style={{height:verticalScale(220)}}>
                        <Image source={require("../../../assets/magic/shimmer.png")} style={{width:"100%",height:"100%"}}/>
                    </View>
                </TouchableOpacity>

                <View className='p-4 rounded-lg  items-center gap-4 mt-1 mb-2  w-full ' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
                    <Text className='text-white font-interBold text-xl'>Keep Your Phone Awake</Text>
                    <Text className='text-white font-interRegular text-lg'>This helps us create your story faster! 📱</Text>
                </View>
                </ScrollView>

                <TouchableOpacity className='bg-[#fff] border items-center mt-2 mb-4 p-4 rounded-lg border-gray-400' onPress={()=>navigation.navigate("create story 1")}>
                    <Text className='text-black font-interMedium '>Cancel Creation</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </LinearGradient>
    )
}

export default GeneratingPage