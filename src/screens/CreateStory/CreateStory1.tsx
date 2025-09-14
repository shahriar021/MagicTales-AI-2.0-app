import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather } from '@expo/vector-icons';
import * as Progress from "react-native-progress";
import InputSelectPicker from 'src/components/ui/homepage/InputSelectPicker';

const CreateStory1 = () => {
    const navigation = useNavigation()
    const [selectPronoun, isSelectPronoun] = useState("she/her");
    const [fovourite, isFovourite] = useState("Cat");
    const [fovouriteColor, isFovouriteColor] = useState("They/them");

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


    return (
        <View className='p-3 flex-1'>

            <Progress.Bar progress={.1} width={null} height={10} color='#667EEA' unfilledColor='white' borderColor='lightgray' />
            <Text className='text-center mt-2 mb-2 text-gray-500'>Step 1 of 6</Text>

            <ScrollView contentContainerStyle={{ alignItems: "center" }}>

                <Text className='text-[#111827] text-2xl font-poppins'>Meet Your Hero!⭐</Text>
                <Text className='text-gray-500 text-xl font-interMedium mt-2 mb-2'>Tell us about the star of your story</Text>

                <View className='w-full'>
                    <Text className='font-interMedium mt-2 mb-2'>Childs Name</Text>
                    <TextInput className='border p-3 rounded-lg border-gray-400' placeholder='Enter Name' />
                </View>
                <View className='w-full mt-2 mb-2'>
                    <Text className='font-interMedium mt-2 mb-2'>Age</Text>

                    <TextInput className='border p-3 rounded-lg border-gray-400' placeholder='Enter Age' />


                </View>

                <View className='w-full'>
                    <Text className='font-interMedium text-[#374151] mt-2 mb-2'>Pronouns</Text>
                </View>
                <View className='w-full flex-row gap-2'>
                    <TouchableOpacity className={`${selectPronoun == "she/her" ? "bg-[#8B5CF6]" : "bg-white"} p-3 rounded-xl flex-1 items-center border border-gray-300`} onPress={() => isSelectPronoun("she/her")}>
                        <Text className={`${selectPronoun == "she/her" ? "text-white" : "text-black"}`}>She/He</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`${selectPronoun == "He/Him" ? "bg-[#8B5CF6]" : "bg-white"} p-3 rounded-xl flex-1 items-center border border-gray-300`} onPress={() => isSelectPronoun("He/Him")}>
                        <Text className={`${selectPronoun == "He/Him" ? "text-white" : "text-black"}`}>He/Him</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`${selectPronoun == "They/Them" ? "bg-[#8B5CF6]" : "bg-white"} p-3 rounded-xl flex-1 items-center border border-gray-300`} onPress={() => isSelectPronoun("They/Them")}>
                        <Text className={`${selectPronoun == "They/Them" ? "text-white" : "text-black"}`}>They/Them</Text>
                    </TouchableOpacity>
                </View>

                <View className='w-full'>
                    <Text className='font-interMedium text-[#374151] mt-2 mb-2'>Favorite Animal</Text>
                </View>
                <View className='w-full flex-row gap-2 flex-wrap items-center justify-center'>
                    <TouchableOpacity className={`${fovourite == "Cat" ? "bg-[#EC4899]" : "bg-white"} p-5 rounded-xl w-[31%] items-center border border-gray-300 gap-2`} onPress={() => isFovourite("Cat")}>
                        <Image source={require("../../../assets/magic/cat.png")} style={{ width: 24, height: 32 }} />
                        <Text className={`${fovourite == "Cat" ? "text-white" : "text-black"}`}>Cat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`${fovourite == "Dog" ? "bg-[#EC4899]" : "bg-white"} p-5 rounded-xl w-[31%] items-center border border-gray-300 gap-2`} onPress={() => isFovourite("Dog")}>
                        <Image source={require("../../../assets/magic/dog.png")} style={{ width: 24, height: 32 }} />
                        <Text className={`${fovourite == "Dog" ? "text-white" : "text-black"}`}>Dog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`${fovourite == "Dragon" ? "bg-[#EC4899]" : "bg-white"} p-5 rounded-xl w-[31%] items-center border border-gray-300 gap-2`} onPress={() => isFovourite("Dragon")}>
                        <Image source={require("../../../assets/magic/dragon.png")} style={{ width: 24, height: 32 }} />
                        <Text className={`${fovourite == "Dragon" ? "text-white" : "text-black"}`}>Dragon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`${fovourite == "Horse" ? "bg-[#EC4899]" : "bg-white"} p-5 rounded-xl w-[31%] items-center border border-gray-300 gap-2`} onPress={() => isFovourite("Horse")}>
                        <Image source={require("../../../assets/magic/horse.png")} style={{ width: 24, height: 32 }} />
                        <Text className={`${fovourite == "Horse" ? "text-white" : "text-black"}`}>Horse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`${fovourite == "Bird" ? "bg-[#EC4899]" : "bg-white"} p-5 rounded-xl w-[31%] items-center border border-gray-300 gap-2`} onPress={() => isFovourite("Bird")}>
                        <Image source={require("../../../assets/magic/bird.png")} style={{ width: 24, height: 32 }} />
                        <Text className={`${fovourite == "Bird" ? "text-white" : "text-black"}`}>Bird</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`${fovourite == "Fish" ? "bg-[#EC4899]" : "bg-white"} p-5 rounded-xl w-[31%] items-center border border-gray-300 gap-2`} onPress={() => isFovourite("Fish")}>
                        <Image source={require("../../../assets/magic/fish.png")} style={{ width: 24, height: 32 }} />
                        <Text className={`${fovourite == "Fish" ? "text-white" : "text-black"}`}>Fish</Text>
                    </TouchableOpacity>
                </View>

                <View className='w-full'>
                    <Text className='font-interMedium text-[#374151] mt-2 mb-2'>Favorite Color</Text>
                </View>

                <View className='w-full flex-row gap-2 flex-wrap items-center justify-between mt-2 mb-2'>
                    <TouchableOpacity className={`${fovouriteColor == "8B5CF6" ? "border-8" : ""} bg-[#8B5CF6] p-5 w-[48px] h-[48px] rounded-full  items-center border border-gray-300 gap-2`} onPress={() => isFovouriteColor("8B5CF6")}>

                    </TouchableOpacity>
                    <TouchableOpacity className={`${fovouriteColor == "EC4899" ? "border-8" : ""} bg-[#EC4899] p-5 rounded-full  w-[48px] h-[48px] items-center border border-gray-300 gap-2`} onPress={() => isFovouriteColor("EC4899")}>

                    </TouchableOpacity>
                    <TouchableOpacity className={`${fovouriteColor == "3B82F6" ? "border-8" : ""} bg-[#3B82F6] p-5 rounded-full  w-[48px] h-[48px] items-center border border-gray-300 gap-2`} onPress={() => isFovouriteColor("3B82F6")}>

                    </TouchableOpacity>
                    <TouchableOpacity className={`${fovouriteColor == "10B981" ? "border-8" : ""} bg-[#10B981] p-5 rounded-full  w-[48px] h-[48px] items-center border border-gray-300 gap-2`} onPress={() => isFovouriteColor("10B981")}>

                    </TouchableOpacity>
                    <TouchableOpacity className={`${fovouriteColor == "F59E0B" ? "border-8" : ""}  bg-[#F59E0B] p-5 rounded-full  w-[48px] h-[48px] items-center border border-gray-300 gap-2`} onPress={() => isFovouriteColor("F59E0B")}>

                    </TouchableOpacity>
                    <TouchableOpacity className={`${fovouriteColor == "EF4444" ? "border-8" : ""} bg-[#EF4444] p-5 rounded-full  w-[48px] h-[48px] items-center border border-gray-300 gap-2`} onPress={() => isFovouriteColor("EF4444")}>

                    </TouchableOpacity>
                </View>

            </ScrollView>

            <View className='flex-row gap-3 mt-4 mb-10'>
                <TouchableOpacity className='flex-1 items-center bg-white border p-3 rounded-lg border-purple-300'><Text className='text-black'>Back</Text></TouchableOpacity>
                <TouchableOpacity className='flex-1 items-center bg-[#8B5CF6] p-3 border border-purple-300 rounded-lg' onPress={() => navigation.navigate("create story 2")}><Text className='text-white'>Next</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default CreateStory1