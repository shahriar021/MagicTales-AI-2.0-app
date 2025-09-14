import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { scale, verticalScale } from 'react-native-size-matters'

const ConfirmPlan = () => {
    const navigation = useNavigation()
    return (
        <LinearGradient colors={["#9333EA", "#EC4899", "#FB923C"]} style={{ flex: 1 }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
            <SafeAreaView style={{ flex: 1, alignItems: "center", width: "100%" }}>
                <View className='flex-row items-center justify-between w-full p-2'>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <Text className='text-white font-interSemiBold text-xl'>Magictales AI</Text>
                    <View></View>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1, width: "100%", alignItems: "center", padding: 25 }}>
                    <View style={{ width: 80, height: 80 }}>
                        <Image source={require("../../../assets/magic/storyCreator.png")} style={{ width: "100%", height: "100%" }} />
                    </View>
                    <Text style={{ color: 'white', fontSize: 24 }} className='font-interBold mt-2 mb-2'>Start Your 14-Day Free Trial</Text>
                    <Text style={{ color: 'white', fontSize: 14 }} className='text-[#FEF9C3] mt-1 mb-2 text-center'>You won't be charged until after your free trial ends on Jan 26, 2025</Text>
                    <Text style={{ color: 'white', fontSize: 12 }}>
                        Cancel anytime
                    </Text>

                    <View
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent white background (frosted glass effect)
                            width: scale(300),
                            borderRadius: 16,
                            padding: 12,

                            alignItems: 'center',
                            borderColor: '#FFFFFF', // Light border for more defined edges (optional)
                            borderWidth: 1, // Optional: Adds a thin border for a "glass" look
                            marginTop: 10
                        }}
                    >
                        <View className='flex-row justify-between items-center w-full'><Text style={{ fontFamily: 'Inter-Bold', color: 'white', fontSize: 18 }}>Premium Plan</Text>
                            <Text style={{ fontFamily: 'Inter-Bold', color: 'white', fontSize: 18 }}>$9.99</Text></View>
                        <View className='flex-row gap-2 mt-2  p-2 rounded-xl items-center '>
                            <Image source={require("../../../assets/magic/i1b.png")} style={{ width: 18, height: 18 }} />
                            <Text style={{ flexWrap: 'wrap', flex: 1 }} className='text-white font-interSemiBold'>Unlimited short & medium stories</Text>
                        </View>
                        <View className='flex-row gap-2 mt-2  p-2 rounded-xl items-center '>
                            <Image source={require("../../../assets/magic/i1b.png")} style={{ width: 18, height: 18 }} />
                            <Text style={{ flexWrap: 'wrap', flex: 1 }} className='text-white font-interSemiBold'>Unlimited short & medium stories</Text>
                        </View>
                        <View className='flex-row gap-2 mt-2  p-2 rounded-xl items-center '>
                            <Image source={require("../../../assets/magic/i1b.png")} style={{ width: 18, height: 18 }} />
                            <Text style={{ flexWrap: 'wrap', flex: 1 }} className='text-white font-interSemiBold'>Unlimited short & medium stories</Text>
                        </View>
                        <View className='flex-row gap-2 mt-2  p-2 rounded-xl items-center '>
                            <Image source={require("../../../assets/magic/i1b.png")} style={{ width: 18, height: 18 }} />
                            <Text style={{ flexWrap: 'wrap', flex: 1 }} className='text-white font-interSemiBold'>Unlimited short & medium stories</Text>
                        </View>
                    </View>

                    
                        <LinearGradient colors={["#10B981","#06B6D4", "#3B82F6"]} style={{ width: "100%", borderRadius: 15, overflow: "hidden", marginTop: 15 }} start={{x:0,y:1}} end={{x:1,y:1}}>
                        <TouchableOpacity className='p-5 items-center'>
                            <Text className='font-interMedium text-xl text-white'>Start Free Trial</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                   

                    <Text className='mt-3 mb-4 text-[#FDE047] font-interBold text-xl underline'>Change Plan</Text>

                    <Text className='mt-2 mb-3 text-white text-center p-4 rounded-xl' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>After your free trial, your subscription will
                        automatically renew at $9.99/month unless
                        canceled. You can cancel anytime in your account
                        settings or through the App Store.</Text>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default ConfirmPlan