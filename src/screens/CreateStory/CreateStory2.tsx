import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Progress from "react-native-progress";
import { LinearGradient } from 'expo-linear-gradient';
import CustomPrompt from './CustomPrompt';
import { useAppSelector } from 'src/redux/hooks';
import { useDispatch } from 'react-redux';
import { setTheme } from 'src/redux/features/storyPromt/storyPromtSlice';
import {  CatStaticData } from './demo';
import { useGetGenerateOptQuery } from 'src/redux/features/generateOptions/generateOptApi';

const CreateStory2 = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [showModal, setShowModal] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null);
    const token = useAppSelector((state)=>state.auth.token)
    console.log(token)
    const {data:genarateOptions,isLoading}=useGetGenerateOptQuery(token)



    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#fff",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitle: "New Story",
            headerTitleAlign: "center",
            headerTintColor: "black",
            headerLeft: () => (
                <TouchableOpacity className='flex-row gap-2 items-center p-3' onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left-circle" size={24} color="black" />
                </TouchableOpacity>
            )
        });
    }, [navigation])

    const handleModal = () => {
        setShowModal(true)
    }
    const handleCategorySelect = (categoryId: any) => {
        setSelectedCategory(categoryId);
        // Perform any other logic, e.g., navigate or update the state elsewhere
    };

    const handleNext = () => {
        dispatch(setTheme(selectedCategory))
        navigation.navigate("create story 3")
    }

    return (
        <View className='p-3 flex-1'>

            <Progress.Bar progress={.2} width={null} height={10} color='#667EEA' unfilledColor='white' borderColor='lightgray' />
            <Text className='text-center mt-2 mb-2 text-gray-500'>Step 2 of 6</Text>

            <ScrollView contentContainerStyle={{ alignItems: "center" }}>

                <Text className='mt-2 mb-3 text-[#475569]'>Choose your magical story theme</Text>
               
                {isLoading?<ActivityIndicator size={"large"} color={"green"}/>:<View className="w-full flex-row flex-wrap items-center justify-center gap-2">
                    {genarateOptions?.data?.themes?.map((category:any) => {
                        const catProps=CatStaticData[category?.id as keyof typeof CatStaticData ] || {};
                        const {image,color}=catProps
                        return (<TouchableOpacity
                            key={category.id}
                            className={`w-[47%] items-center justify-center rounded-xl overflow-hidden gap-2 ${selectedCategory==category.id?"border-4 border-red-400":""}`}
                            onPress={() => handleCategorySelect(category.id)}
                        >
                            <LinearGradient
                                colors={color}
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 15,
                                    borderRadius: 10,
                                    gap: 5,
                                    width: '100%',
                                }}
                            >
                                <Image source={image} style={{ width: 56, height: 56 }} />
                                <Text className="text-white text-center font-bold text-lg">{category.name}</Text>
                                <Text className="text-white text-center">{category.description}</Text>
                            </LinearGradient>
                        </TouchableOpacity>)
                    })}
                </View>}

                <TouchableOpacity className='bg-[#f9f4f4] border border-gray-300 mt-4 mb-3 p-3 w-full flex-row items-center rounded-lg shadow-gray-700 justify-center gap-4' onPress={handleModal}>
                    <Image source={require("../../../assets/magic/cr-2.png")} style={{ width: 40, height: 40 }} />
                    <Text>Custom Prompt</Text>
                </TouchableOpacity>
            </ScrollView>


            <View className='flex-row gap-3 mt-4 mb-10'>
                <TouchableOpacity className='flex-1 items-center bg-white border p-3 rounded-lg border-purple-300'><Text className='text-black'>Back</Text></TouchableOpacity>
                <TouchableOpacity className='flex-1 items-center bg-[#8B5CF6] p-3 border border-purple-300 rounded-lg' onPress={handleNext}><Text className='text-white'>Next</Text></TouchableOpacity>
            </View>
            <CustomPrompt visible={showModal} onClose={() => setShowModal(false)} />


        </View>
    )
}

export default CreateStory2