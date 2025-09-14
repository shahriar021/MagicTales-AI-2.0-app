import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Progress from "react-native-progress";
import Slider from '@react-native-community/slider';

const CreateStory5 = () => {

    const navigation = useNavigation()
    const [islangMode, setIsLanMode] = useState(false);
    const [voiceItems] = useState(Array.from({ length: 10 }, (_, x) => x + 1));


    useLayoutEffect(()=>{
        navigation.setOptions({
        headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTitle: "Story Options",
        headerTitleAlign:"center",
        headerTintColor: "black",
        headerLeft: () => (
            <TouchableOpacity className='flex-row gap-2 items-center p-3' onPress={() => navigation.goBack()}>
                <Feather name="arrow-left-circle" size={24} color="black" />
            </TouchableOpacity>
        )
    });
    },[navigation])

    return (
        <View className='p-3 flex-1 bg-[#fff]'>

            <Progress.Bar progress={.8} width={null} height={10} color='#667EEA' unfilledColor='white' borderColor='lightgray' />
            <Text className='text-center mt-2 mb-2 text-gray-500'>Step 5 of 6</Text>

            <ScrollView contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}>

                <Text className='text-[#111827] text-2xl font-poppins'>Story Length</Text>
                <Text className='text-gray-500 text-xl font-interMedium mt-2 mb-2'>Choose how long your story should be</Text>

                <View className='w-full'>

                    <TouchableOpacity className='border flex-row justify-between items-center p-3 rounded-xl border-[#C084FC] mb-2'>
                        <View>
                            <View>
                                <Text className='font-interMedium text-xl'>Short</Text>
                                <Text className='font-interRegular mt-1 text-[#4B5563]'>6 pages • ~3 minutes</Text>


                            </View>
                        </View>

                        <MaterialCommunityIcons name="record-circle" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className='border flex-row justify-between items-center p-3 rounded-xl border-[#E5E7EB] mb-2'>
                        <View>
                            <View>
                                <Text className='font-interMedium text-xl'>Medium</Text>
                                <Text className='font-interRegular mt-1 text-[#4B5563]'>10 pages • ~5 minutes</Text>


                            </View>
                        </View>

                        <MaterialCommunityIcons name="record-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className='border flex-row justify-between items-center p-3 rounded-xl border-[#E5E7EB] mb-2'>
                        <View>
                            <View>
                                <Text className='font-interMedium text-xl'>Long</Text>
                                <Text className='font-interRegular mt-1 text-[#4B5563]'>14 pages • ~8 minutes</Text>


                            </View>
                        </View>

                        <MaterialCommunityIcons name="record-circle-outline" size={24} color="black" />
                    </TouchableOpacity>

                </View>

                <View className='flex-row gap-2 w-full mt-2 mb-2  items-center'>
                    <Image source={require("../../../assets/magic/age.png")} style={{ width: 12, height: 20 }} />
                    <Text className='font-interSemiBold text-xl'>Age Difficulty</Text>
                </View>
                <Text className='w-full mb-2 text-[#4B5563]'>Adjust complexity for your child</Text>
                <Slider
                    style={{ width: "100%", height: 40 }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#0075FF"
                    maximumTrackTintColor="#B7B5B5"
                />

            </ScrollView>


            <View className='flex-row gap-3 mt-4 mb-10'>
                <TouchableOpacity className='flex-1 items-center bg-white border p-3 rounded-lg border-purple-300'><Text className='text-black'>Back</Text></TouchableOpacity>
                <TouchableOpacity className='flex-1 items-center bg-[#8B5CF6] p-3 border border-purple-300 rounded-lg' onPress={() => navigation.navigate("create story 6")}><Text className='text-white'>Next</Text></TouchableOpacity>
            </View>


        </View>
    )
}

export default CreateStory5