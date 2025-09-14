import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Language = () => {
    const navigation = useNavigation();
    const [languageList] = useState(Array.from({ length: 15 }, (_, a) => a + 1))
    return (
        <LinearGradient colors={["#FFF3E4", "#E4F0FF"]} style={{ flex: 1 }}>
            <SafeAreaView className="flex-1 p-3">

                <View className='flex-row items-center justify-between w-full mt-2 mb-5'>
                    <TouchableOpacity className='bg-white w-[40] h-[40] overflow-hidden rounded-full items-center justify-center' onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className='font-interSemiBold text-lg flex-1 text-center'>Language Settings</Text>
                    <View className='w-[40] h-[40]' /> 
                </View>

                <View className='bg-[#fff] items-center flex-row p-2 rounded-lg'>
                    <Ionicons name="search-outline" size={24} color="#9CA3AF" />
                    <TextInput className='flex-1 ' />
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    {languageList?.map(item => <View key={item} className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" >
                        <View className="flex-row items-center gap-2">

                            <View className="rounded-full ">
                                {item == 1 ? <MaterialCommunityIcons name="record-circle" size={24} color="black" /> : <MaterialCommunityIcons name="record-circle-outline" size={24} color="black" />}
                            </View>

                            <View>
                                <Text className="text-[#1F2937] font-interMedium text-lg">English</Text>
                                <Text className="text-sm text-[#6B7280]">{item == 1 ? "default" : "language"}</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Text className='text-[#2563EB] ] p-3 rounded-lg'>🏴󠁧󠁢󠁥󠁮󠁧󠁿</Text>
                        </TouchableOpacity>
                    </View>)}

                </ScrollView>

                <View className='w-full'>
                    <TouchableOpacity className='bg-[#2563EB] items-center p-4 rounded-lg'>
                        <Text className='font-interSemiBold text-white'>Save</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        </LinearGradient>
    )
}

export default Language