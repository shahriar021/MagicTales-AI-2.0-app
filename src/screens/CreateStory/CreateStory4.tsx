import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Progress from "react-native-progress";
import { Rating } from 'react-native-ratings'

const CreateStory4 = () => {
    const navigation = useNavigation()
    const [islangMode, setIsLanMode] = useState(false);
    const [voiceItems]=useState(Array.from({length:10},(_,x)=>x+1));

    useLayoutEffect(()=>{
        navigation.setOptions({
        headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTitle: "Language & Voice",
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

            <Progress.Bar progress={.6} width={null} height={10} color='#667EEA' unfilledColor='white' borderColor='lightgray' />
            <Text className='text-center mt-2 mb-2 text-gray-500'>Step 4 of 6</Text>

            <ScrollView contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}>

                <Text className='text-[#111827] text-2xl font-poppins'>Choose Language</Text>
                <Text className='text-gray-500 text-xl font-interMedium mt-2 mb-2'>Select your preferred language for stories</Text>

                <View>

                    <View className='flex-row justify-between w-full items-center border border-gray-200 p-3 rounded-lg mt-2 mb-2'>

                        <Text>🇬🇧 {" "} English</Text>
                        <AntDesign name="down" size={24} color="black" />
                    </View>

                    <View className='flex-row justify-between w-full items-center border border-gray-200 p-3 rounded-lg mt-2 mb-2 bg-[#E0E7FF]'>

                        <View className='flex-col gap-1'>
                            <Text className='text-[#1F2937] font-interMedium text-xl'>Bilingual Mode</Text>
                            <Text className='font-interRegular text-[#4B5563]'>Mix languages in stories</Text>
                        </View>

                        <View>

                            <TouchableOpacity onPress={() => setIsLanMode(!islangMode)}>
                                {islangMode ? <MaterialCommunityIcons name="toggle-switch" size={44} color="black" /> : <MaterialCommunityIcons name="toggle-switch-off" size={44} color="black" />}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className='flex-row items-center gap-3'>
                        <Image source={require("../../../assets/magic/mic.png")} style={{ width: 16, height: 16 }} resizeMode='contain' />
                        <Text className='text-[#1F2937] font-interSemiBold text-xl'>Select Voice</Text>
                    </View>
                    <Text className='text-[#4B5563] mt-2'>Choose who will tell your stories</Text>

                    <View>
                        {voiceItems.map(item=><View key={item} className='flex-row justify-between border border-[#E5E7EB] p-3 mt-2 mb-2 rounded-xl items-center'>
                            <View className='flex-row gap-3'>
                                <Image source={require("../../../assets/magic/shahriar.jpeg")} style={{width:48,height:48,borderRadius:50}}/>
                                <View>
                                    <Text className='font-interMedium text-xl'>Emma</Text>
                                    <Text className='font-interRegular mt-1'>Warm & gentle</Text>
                                   <View className='flex-row items-center gap-2 mt-1'>
                                     <Rating
                                        type="custom"
                                        ratingColor="#FFBA49"
                                        ratingBackgroundColor="#333"
                                        tintColor="#fff"

                                        imageSize={20}
                                        startingValue={4}
                                        style={{ backgroundColor: 'transparent' }}
                                    />
                                    <Text>4.9</Text>
                                   </View>

                                </View>
                            </View>
                            <View className='w-[34px] h-[48px] bg-[#EEF2FF] items-center justify-center rounded-xl overflow-hidden'>
                                <AntDesign name="caretright" size={20} color="#4F46E5" />
                            </View>
                        </View>)}
                    </View>

                </View>

            </ScrollView>


            <View className='flex-row gap-3 mt-4 mb-10'>
                <TouchableOpacity className='flex-1 items-center bg-white border p-3 rounded-lg border-purple-300'><Text className='text-black'>Back</Text></TouchableOpacity>
                <TouchableOpacity className='flex-1 items-center bg-[#8B5CF6] p-3 border border-purple-300 rounded-lg' onPress={() => navigation.navigate("create story 5")}><Text className='text-white'>Next</Text></TouchableOpacity>
            </View>


        </View>
    )
}

export default CreateStory4