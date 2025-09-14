import { View, Text, Modal, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Foundation } from '@expo/vector-icons'

const MakeChoiceModal = ({ visible, onClose }: any) => {
    const insets = useSafeAreaInsets();
    return (
        <Modal visible={visible} onRequestClose={onClose}>
            <LinearGradient colors={["#667EEA", "#764BA2"]} style={{ flex: 1 }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} >
                <SafeAreaView style={{ flex: 1 }}>
                    <Text className='text-white font-interSemiBold text-center text-2xl' style={{ marginTop: insets.top + 10 }}>What would Emma do?</Text>
                    <Text className='text-white font-interSemiBold text-center text-xl mt-3 mb-2' >Choose your adventure!</Text>
                    <View className='flex-1 bg-white'>
                        <ScrollView>

                            <TouchableOpacity className='flex-row gap-2 p-5 m-5 border border-gray-300 rounded-lg mt-6 mb-2' onPress={onClose}>
                                <Image source={require("../../../assets/magic/mc1.png")} style={{ width: 80, height: 80 }} />
                                <View className='gap-2 flex-1'>
                                    <Text className='font-interBold text-2xl'>Enter the magical castle</Text>
                                    <Text className='font-interRegular text-xl text-[#4B5563]'>Explore mysterious rooms and meet the friendly dragon guardian</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className='flex-row gap-2 p-5 m-5 border border-gray-300 rounded-lg mt-2 mb-2' onPress={onClose}>
                                <Image source={require("../../../assets/magic/mc1.png")} style={{ width: 80, height: 80 }} />
                                <View className='gap-2 flex-1'>
                                    <Text className='font-interBold text-2xl'>Follow the forest path</Text>
                                    <Text className='font-interRegular text-xl text-[#4B5563]'>Explore mysterious rooms and meet the friendly dragon guardian</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className='flex-row gap-2 p-5 m-5 border border-gray-300 rounded-lg mt-2 mb-2' onPress={onClose}>
                                <Image source={require("../../../assets/magic/mc1.png")} style={{ width: 80, height: 80 }} />
                                <View className='gap-2 flex-1'>
                                    <Text className='font-interBold text-2xl'>Cross the sparkling river</Text>
                                    <Text className='font-interRegular text-xl text-[#4B5563]'>Explore mysterious rooms and meet the friendly dragon guardian</Text>
                                </View>
                            </TouchableOpacity>

                            <View className='bg-[#FFFBEB] border border-[#FDE68A] mt-6 mb-2 m-5 p-4 rounded-lg  flex-row justify-center items-center gap-2'>
                                <Foundation name="lightbulb" size={24} color="#F59E0B" />
                                <Text className='text-[#B45309]'>Choices change the adventure</Text>
                            </View>

                        </ScrollView>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </Modal>
    )
}

export default MakeChoiceModal








