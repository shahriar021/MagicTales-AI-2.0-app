import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';

const Gallery = () => {
    const navigation = useNavigation();
    const [galleryList]=useState(Array.from({length:16},(_,a)=>a+1))

    const galleryColors={
        1:["#34D399", "#14B8A6"],
        2:["#F472B6", "#F43F5E"],
        3:["#60A5FA", "#06B6D4"],
        4:["#818CF8", "#A855F7"],
        5:["#FB923C", "#EF4444"],
        6:["#34D399", "#14B8A6"],
        7:["#34D399", "#14B8A6"],
        8:["#34D399", "#14B8A6"],
        9:["#34D399", "#14B8A6"],
        10:["#34D399", "#14B8A6"],
        11:["#34D399", "#14B8A6"],
        12:["#34D399", "#14B8A6"],
        13:["#34D399", "#14B8A6"],
        14:["#34D399", "#14B8A6"],
        15:["#34D399", "#14B8A6"],
        16:["#34D399", "#14B8A6"],
    }

    return (
        <LinearGradient colors={["#F3E8FF", "#FCE7F3", "#DBEAFE"]} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }} style={{ flex: 1 }}>
            <SafeAreaView className=' flex-1 p-3'>
                <View className='flex-row items-center justify-between w-full mt-2 mb-5'>
                    <TouchableOpacity className='bg-white w-[40] h-[40] overflow-hidden rounded-full items-center justify-center' onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className='font-interSemiBold text-lg flex-1 text-center'>Gallery</Text>
                    <View className='w-[40] h-[40]' ><TouchableOpacity className='bg-white w-[40] h-[40] overflow-hidden rounded-full items-center justify-center' onPress={() => navigation.goBack()}>
                        <Ionicons name="search" size={24} color="black" />
                    </TouchableOpacity></View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ height: verticalScale(188) }} className='rounded-xl items-center overflow-hidden border-4 border-white justify-center'>
                        <Image source={require("../../../assets/magic/gallerybg.png")} style={{ width: "100%", height: "100%", }} resizeMode='cover' />
                    </View>
                    <Text className='text-[#7E22CE] text-center mt-4 mb-4'>Coming Soon — Explore adventures from creators worldwide</Text>

                    <View className='flex-row flex-wrap w-full  items-center justify-center mt-2 mb-4 gap-2'>
                        {galleryList?.map(item=><View key={item} style={{ width: "49%" }} >
                        <LinearGradient colors={galleryColors[item] as any} start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }} style={{ width: "100%", height: 200, alignItems: "center", justifyContent: "center", borderRadius: 10, borderColor: "white", borderWidth: 3 }}>
                                <View className='mb-2'><FontAwesome5 name="lock" size={24} color="white" /></View>
                            <Text className='text-white font-interSemiBold'>Story Cover</Text>
                        </LinearGradient>
                        <Text className='mt-1 mb-1 font-interSemiBold text-[#6B21A8]'>Adventure</Text>
                        <Text className='font-interRegular mb-2 text-[#9333EA]'>By Creature</Text>
                    </View>)}
                    </View>

                    <LinearGradient colors={["#9333EA", "#DB2777", "#A024AF", "#7E22CE"]} style={{ borderRadius: 10 }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
                        <TouchableOpacity className='p-4'>
                            <Text className='text-white font-interSemiBold text-lg text-center'>Sign up for Premium to be first to explore</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Gallery