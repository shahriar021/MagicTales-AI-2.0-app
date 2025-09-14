import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, FontAwesome, Fontisto, Foundation } from '@expo/vector-icons'

const HelpAndSupport = () => {
    const navigation = useNavigation()
    return (
        <LinearGradient colors={["#FFF3E4", "#E4F0FF"]} style={{ flex: 1 }}>
            <SafeAreaView className="flex-1 p-3">

                <View className='flex-row items-center justify-between w-full mt-2 mb-5'>
                    <TouchableOpacity className='bg-white w-[40] h-[40] overflow-hidden rounded-full items-center justify-center' onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className='font-interSemiBold text-lg flex-1 text-center'>Help & Support</Text>
                    <View className='w-[40] h-[40]' /> 
                </View>


                <ScrollView>

                    <View className="flex-row items-center justify-between mt-2 mb-2  rounded-xl gap-2" >
                       
                       <View className='flex-col gap-2 items-center bg-[#fff] p-5 rounded-lg flex-1'>
                        <View className='w-[48] h-[48] bg-[#DBEAFE] rounded-full items-center justify-center'>
                            <FontAwesome name="question" size={24} color="#2563EB" />
                       </View>
                       <Text>FAQ</Text>
                       </View>
                       <View className='flex-col gap-2 items-center bg-[#fff] p-5 rounded-lg flex-1'>
                        <View className='w-[48] h-[48] bg-[#DCFCE7] rounded-full items-center justify-center'>
                            <Foundation name="mail" size={24} color="#16A34A" />
                       </View>
                       <Text>Contact Us</Text>
                       </View>
                       <View className='flex-col gap-2 items-center bg-[#fff] p-5 rounded-lg flex-1'>
                        <View className='w-[48] h-[48] bg-[#FEE2E2] rounded-full items-center justify-center'>
                            <FontAwesome name="exclamation-triangle" size={24} color="#DC2626" />
                       </View>
                       <Text>Report</Text>
                       </View>
                       
                    </View>

                    <Text className='text-[#1F2937] mt-2 mb-2 font-interSemiBold font-lg'>Common Help Topics</Text>

                    <View className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl shadow-slate-400 " >
                        <Text className='font-interRegular text-[#374151]'>Getting Started with MagicTales</Text>
                        <TouchableOpacity>
                            <AntDesign name="down" size={24} color="#9CA3AF" />
                        </TouchableOpacity>
                    </View>

                     <View className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl shadow-slate-400 " >
                        <Text className='font-interRegular text-[#374151]'>Subscription & Billing</Text>
                        <TouchableOpacity>
                            <AntDesign name="down" size={24} color="#9CA3AF" />
                        </TouchableOpacity>
                    </View>

                     <View className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl shadow-slate-400 " >
                        <Text className='font-interRegular text-[#374151]'>Parental Controls</Text>
                        <TouchableOpacity>
                            <AntDesign name="down" size={24} color="#9CA3AF" />
                        </TouchableOpacity>
                    </View>

                     <View className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl shadow-slate-400" >
                        <Text className='font-interRegular text-[#374151]'>Technical Issues</Text>
                        <TouchableOpacity>
                            <AntDesign name="down" size={24} color="#9CA3AF" />
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <View className='w-full flex-1 flex-row  items-center'>
                    <TouchableOpacity className=' items-center p-4 rounded-lg flex-1'>
                        <Text className='font-interRegular text-[#2563EB]'>View Privacy Policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='items-center p-4 flex-1'>
                        <Text className='text-[#2563EB] font-interRegular'>Terms of Service</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </LinearGradient>
    )
}

export default HelpAndSupport