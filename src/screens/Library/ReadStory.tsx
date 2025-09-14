import { View, Text, TouchableOpacity, ScrollView, Image, useWindowDimensions, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { verticalScale } from 'react-native-size-matters';
import Slider from '@react-native-community/slider';
import MakeChoiceModal from './MakeChoiceModal';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: screenWidth } = Dimensions.get('window');

const ReadStory = () => {
    const { width } = useWindowDimensions()
    const navigation = useNavigation();
    const [showModal,setShowModal]=useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({

            headerStyle: {
                backgroundColor: "#fff",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitle: () => null,
            headerLeft: () => (
                <TouchableOpacity className='flex-row gap-2 items-center bg-[#F3E8FF] rounded-full justify-center' onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left-circle" size={24} color="#9333EA" />

                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity>
                    <Text className='text-[#7E22CE] font-interMedium'>Emotion Mode</Text>
                </TouchableOpacity>
            )

        })
    }, [navigation])

    const handleModal=()=>{
        setShowModal(true);
    }

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className='flex-row justify-between p-2'>
                <TouchableOpacity className='flex-row gap-2 items-center bg-[#F3E8FF] rounded-full justify-center' onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left-circle" size={24} color="#9333EA" />

                </TouchableOpacity>
            
            
                <TouchableOpacity>
                    <Text className='text-[#7E22CE] font-interMedium'>Emotion Mode</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={{ height: verticalScale(280) }} className='items-center justify-center'>
                    <Image source={require("../../../assets/magic/viewLib.png")} style={{ width: "100%", height: "100%" }} />
                </View>

                <View className='p-3'>
                    <View className='flex-row   gap-3'>
                        <View className='w-[56px] h-[56px] bg-[#667EEA] rounded-full items-center justify-center'><FontAwesome name="play" size={24} color="white" /></View>
                        <View className='flex-row items-center gap-2 flex-1'>
                            <Feather name="volume-1" size={24} color="black" />
                            <View className='flex-1'>
                                <Slider
                                    style={{ width: "100%", height: 40 }}
                                    minimumValue={0}
                                    maximumValue={1}
                                    minimumTrackTintColor="#0075FF"
                                    maximumTrackTintColor="#B7B5B5"
                                />
                            </View>
                            <Feather name="volume-2" size={24} color="black" />
                        </View>
                    </View>

                    <View className='flex-row mt-2 mb-2 items-center justify-between'>
                        <Text className='text-[#9333EA] font-interMedium'>2.23</Text>
                        <Text className='text-[#9333EA] font-interMedium'>5.23</Text>
                    </View>
                    <Slider
                        style={{ width: "100%", height: 40 }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#0075FF"
                        maximumTrackTintColor="#B7B5B5"
                    />

                    <Text className='text-[#1F2937] mt-2 mb-2 text-xl'>Once upon a time, in a magical forest filled with towering trees and sparkling streams, there lived a little dragon named Spark. Unlike other dragons, Spark was no bigger than a house cat and had the most beautiful emerald green scales that shimmered in the sunlight.
                        Every morning, Spark would wake up in his cozy cave and wonder what adventures the day would bring. Today felt different though - there was magic in the air...</Text>
                </View>
            </ScrollView>
            <View className='flex-row justify-between p-3 mt-2 mb-2 px-5 mx-5 gap-4' >
                <TouchableOpacity className='border border-[#E9D5FF] p-4 rounded-lg items-center flex-1 justify-center'><Text className='text-[#7E22CE]'>Back</Text></TouchableOpacity>
                <TouchableOpacity className='border border-[#E9D5FF] p-4 rounded-lg items-center bg-[#667EEA] flex-1 justify-center' onPress={handleModal}><Text className='text-white'>Make a Choice</Text></TouchableOpacity>
                <TouchableOpacity className='border border-[#E9D5FF] p-4 rounded-lg items-center flex-1 justify-center' onPress={()=>navigation.navigate("Story Complete View")}><Text className='text-[#7E22CE]'>Next</Text></TouchableOpacity>
            </View>
            <MakeChoiceModal visible={showModal} onClose={()=>setShowModal(false)}/>
        </SafeAreaView>
    )
}

export default ReadStory