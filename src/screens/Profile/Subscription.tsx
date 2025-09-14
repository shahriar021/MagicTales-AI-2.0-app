import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Subscription = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={["#FFF3E4", "#E4F0FF"]} style={{ flex: 1 }}>
            <SafeAreaView className="flex-1 p-3">

                <View className='flex-row items-center justify-between w-full mt-2 mb-5'>
                    <TouchableOpacity className='bg-white w-[40] h-[40] overflow-hidden rounded-full items-center justify-center' onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className='font-interSemiBold text-lg flex-1 text-center'>Subscription & Billing</Text>
                    <View className='w-[40] h-[40]' />
                </View>

                <ScrollView>
                    <View className='bg-white rounded-lg p-3'>
                        <View className='flex-row items-center justify-between mb-3'>
                            <View className='flex-col gap-1'>
                                <Text className='text-[#1F2937] text-xl font-interSemiBold'>Premium Plan</Text>
                                <Text className='text-[#6B7280] font-interRegular'>Unlimited stories & features</Text>
                            </View>
                            <Text className='text-[#15803D] bg-[#DCFCE7] p-3 rounded-xl'>Active</Text>
                        </View>
                        <View className='flex-row justify-between mb-1'>
                            <Text className='font-interRegular text-[#4B5563]'>Monthly subscription</Text>
                            <Text className='text-[#1F2937] font-interSemiBold text-xl'>$9.99/month</Text>
                        </View>
                        <View className='flex-row justify-between '>
                            <Text className='font-interRegular text-[#4B5563]'>Next renewal</Text>
                            <Text className='text-[#1F2937] font-interSemiBold'>January 15, 2025</Text>
                        </View>

                    </View>

                    <TouchableOpacity className='bg-[#2563EB] items-center p-3 rounded-xl mt-4'><Text className='text-white font-interSemiBold'>Upgrade Plan</Text></TouchableOpacity>
                    <TouchableOpacity className='bg-[#fff] items-center p-3 rounded-xl mt-2'><Text className='text-[#374151] font-interSemiBold'>Change Payment Method</Text></TouchableOpacity>
                    <TouchableOpacity className='bg-[#fff] items-center p-3 rounded-xl mt-2'><Text className='text-[#374151] font-interSemiBold'>View Invoices</Text></TouchableOpacity>
                    <Text className='mt-4 font-interSemiBold text-[#374151]'>Payment Method</Text>
                    <View className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" >
                        <View className="flex-row items-center gap-2">

                            <View style={{ width: 56, height: 56 }} className="rounded-full ">
                                <Image source={require("../../../assets/magic/visa.png")} style={{ width: 56, height: 56, borderRadius: 10 }} />

                            </View>

                            <View>
                                <Text className="text-[#1F2937] font-interMedium text-lg">•••• •••• •••• 4242</Text>
                                <Text className="text-sm text-[#6B7280]">Expires 12/27</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Text className='text-[#2563EB] bg-[#EFF6FF] p-3 rounded-lg'>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <Text className='mt-4 font-interSemiBold text-[#374151]'>Recent Billing</Text>
                    <View className='bg-white rounded-lg p-3 mt-2'>
                        <View className='flex-row items-center justify-between mb-3'>
                            <View className='flex-col gap-1'>
                                <Text className='text-[#1F2937] text-xl font-interSemiBold'>Premium Plan</Text>
                                <Text className='text-[#6B7280] font-interRegular'>Dec 15, 2024</Text>
                            </View>
                            <View className='items-center justify-center gap-1'>
                                <Text className='text-[#1F2937] text-xl font-interSemiBold'>$9.99</Text>
                            <Text className='text-[#15803D]  p-3 rounded-xl'>Paid</Text>
                            </View>
                        </View>
                        <View className='w-full border border-[#F3F4F6]'/>
                        <View className='flex-row items-center justify-between mb-3 mt-2'>
                            <View className='flex-col gap-1'>
                                <Text className='text-[#1F2937] text-xl font-interSemiBold'>Premium Plan</Text>
                                <Text className='text-[#6B7280] font-interRegular'>Dec 15, 2024</Text>
                            </View>
                            <View className='items-center justify-center gap-1'>
                                <Text className='text-[#1F2937] text-xl font-interSemiBold'>$9.99</Text>
                            <Text className='text-[#15803D]  p-3 rounded-xl'>Paid</Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>
                <View className='w-full'>
                    <TouchableOpacity className=' items-center p-4 rounded-lg'>
                        <Text className='font-interSemiBold text-[#EF4444] underline '>Cancel Subscription</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Subscription