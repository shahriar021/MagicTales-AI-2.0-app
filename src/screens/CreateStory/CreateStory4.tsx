import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Progress from "react-native-progress";
import { Rating } from 'react-native-ratings'
import { languages } from './demo';
import { useDispatch } from 'react-redux';
import { setLanguage,setVoice } from 'src/redux/features/storyPromt/storyPromtSlice';
import { useAppSelector } from 'src/redux/hooks';
import { useGetGenerateOptQuery } from 'src/redux/features/generateOptions/generateOptApi';

const CreateStory4 = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [islangMode, setIsLanMode] = useState(false);
    const [voiceItems] = useState(Array.from({ length: 10 }, (_, x) => x + 1));
    const [isSelectLan, setIsSelectLan] = useState(false)
    const [selectedLan,setSelectedLan]=useState('English')
    const [selectedVoice,setSelectedVoice]=useState()
     const token = useAppSelector((state) => state.auth.token)
      const { data: genarateOptions, isLoading } = useGetGenerateOptQuery(token)
      console.log(genarateOptions?.data?.narrator_voices,"4")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#fff",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitle: "Language & Voice",
            headerTitleAlign: "center",
            headerTintColor: "black",
            headerLeft: () => (
                <TouchableOpacity className='flex-row gap-2 items-center p-3' onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left-circle" size={24} color="black" />
                </TouchableOpacity>
            )
        });
    }, [navigation])

    const handleSelectLan=(item:any)=>{
        setSelectedLan(item)
        setIsSelectLan(false)
    }

    const handleVoice=(item:any)=>{
        setSelectedVoice(item)
    }

    const handleNext = () => {

        dispatch(setLanguage(selectedLan))
        dispatch(setVoice(selectedVoice))

        navigation.navigate("create story 5")
    }

    return (
        <View className='p-3 flex-1 bg-[#fff]'>

            <Progress.Bar progress={.6} width={null} height={10} color='#667EEA' unfilledColor='white' borderColor='lightgray' />
            <Text className='text-center mt-2 mb-2 text-gray-500'>Step 4 of 6</Text>

            <ScrollView contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}>

                <Text className='text-[#111827] text-2xl font-poppins'>Choose Language</Text>
                <Text className='text-gray-500 text-xl font-interMedium mt-2 mb-2'>Select your preferred language for stories</Text>

                <View className=''>

                    {<TouchableOpacity className='flex-row justify-between w-full items-center border border-gray-200 p-3 rounded-lg mt-2 mb-2' onPress={() => setIsSelectLan(!isSelectLan)}>

                        <Text>🇬🇧 {" "} {selectedLan}</Text>
                        <AntDesign name="down" size={24} color="black" />
                    </TouchableOpacity>}

                    {isSelectLan && <View className='bg-blue-50'>
                        <View>
                            {languages?.map(item=><TouchableOpacity key={item.name} className='bg-white m-4 p-3 rounded-xl' onPress={()=>handleSelectLan(item.name)}><Text>{item.name}</Text></TouchableOpacity>)}
                        </View>
                    </View>}

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
                        {genarateOptions?.data?.narrator_voices?.map((item:any) => <TouchableOpacity key={item.id} className='flex-row justify-between border border-[#E5E7EB] p-3 mt-2 mb-2 rounded-xl items-center' onPress={()=>handleVoice(item?.id)}>
                            <View className='flex-row gap-3'>
                                <Image source={require("../../../assets/magic/shahriar.jpeg")} style={{ width: 48, height: 48, borderRadius: 50 }} />
                                <View>
                                    <Text className='font-interMedium text-xl'>{item?.name}</Text>
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
                            <View className='w-[34px] h-[48px]  items-center justify-center rounded-xl overflow-hidden'>
                                {/* <AntDesign name="caretright" size={20} color="#4F46E5" /> */}
                                {selectedVoice==item.id?<FontAwesome name="circle" size={24} color="black" />
                                :<FontAwesome name="circle" size={24} color="#c66fcd" />}
                            </View>
                        </TouchableOpacity>)}
                    </View>

                </View>

            </ScrollView>


            <View className='flex-row gap-3 mt-4 mb-10'>
                <TouchableOpacity className='flex-1 items-center bg-white border p-3 rounded-lg border-purple-300'><Text className='text-black'>Back</Text></TouchableOpacity>
                <TouchableOpacity className='flex-1 items-center bg-[#8B5CF6] p-3 border border-purple-300 rounded-lg' onPress={handleNext}><Text className='text-white'>Next</Text></TouchableOpacity>
            </View>


        </View>
    )
}

export default CreateStory4