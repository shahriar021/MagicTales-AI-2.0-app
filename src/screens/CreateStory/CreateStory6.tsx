import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather, Octicons } from '@expo/vector-icons';
import * as Progress from "react-native-progress";
import { LinearGradient } from 'expo-linear-gradient';
import { useAppSelector } from 'src/redux/hooks';
import { useCreateStoryMutation } from 'src/redux/features/storyPromt/storyPromtApi';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/types/navigationPage';

type Props={
  navigation:StackNavigationProp<RootStackParamList,"create story 6">
}

const CreateStory6 = ({navigation}:Props) => {
    const [islangMode, setIsLanMode] = useState(false);
    const [voiceItems] = useState(Array.from({ length: 10 }, (_, x) => x + 1));
    const [loading,setLoading]=useState(false)

    const [createStory] = useCreateStoryMutation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#fff",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitle: "Review & Generate",
            headerTitleAlign: "center",
            headerTintColor: "black",
            headerLeft: () => (
                <TouchableOpacity className='flex-row gap-2 items-center p-3' onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left-circle" size={24} color="black" />
                </TouchableOpacity>
            )
        });
    }, [navigation])

    const hero = useAppSelector((state) => state.storyPromt.hero);
    const theme = useAppSelector((state) => state.storyPromt.theme)
    const art_style = useAppSelector((state) => state.storyPromt.art_style)
    const language = useAppSelector((state) => state.storyPromt.language)
    const voice = useAppSelector((state) => state.storyPromt.voice)
    const lenght = useAppSelector((state) => state.storyPromt.length)
    const token = useAppSelector((state) => state.auth.token);


    const handleGenerate = async () => {
        setLoading(true)
        const info = {
            hero: {
                child_name: hero.child_name,
                age: hero.age,
                pronouns: hero.pronouns,
                favorite_animal: hero.favorite_animal,
                favorite_color: hero.favorite_color
            },
            theme: theme,
            art_style: art_style,
            language: language,
            voice:voice,
            length: lenght
        }
        try {
            const res = await createStory({info,token}).unwrap();
            // console.log(res,"response")
            if(res?.success==true){
                setLoading(false)
                navigation.navigate("Generate")
            }
            
        } catch (err) {
            console.log(err)
        }
        // navigation.navigate("Generate")
    }

    return (
        <View className=' flex-1 '>
            <LinearGradient colors={["#F3E8FF", "#fff", "#F3E8FF"]} style={{ flex: 1, padding: 10 }}>

                <Progress.Bar progress={1} width={null} height={10} color='#667EEA' unfilledColor='white' borderColor='lightgray' />
                <Text className='text-center mt-2 mb-2 text-gray-500'>Step 6 of 6</Text>

                <ScrollView contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}>

                    <Image source={require("../../../assets/magic/onBoards.png")} style={{ width: 64, height: 64 }} />
                    <Text className='text-gray-500 text-xl font-interMedium mt-2 mb-2 text-center'>Review your magical story settings before we create your personalized adventure</Text>

                    <View className='w-full mt-2 border border-[#E5E7EB] p-3 rounded-xl bg-[#fff]'>

                        <View className='flex-row justify-between mb-2'>
                            <Text className='text-[#1F2937] font-interBold'>Hero Character</Text>
                            <TouchableOpacity><Text className='text-[#9333EA] font-interMedium'>Edit</Text></TouchableOpacity>
                        </View>
                        <View className='flex-row items-center gap-2'>
                            <Image source={require("../../../assets/magic/chrctr.png")} />
                            <View>
                                <Text className='text-[#1F2937] font-interBold mb-1'>Emma, Age 6</Text>
                                <Text className='text-[#9333EA]'>Brave & curious</Text>
                            </View>
                        </View>

                    </View>

                    <View className='w-full mt-2 border border-[#E5E7EB] p-3 rounded-xl bg-[#fff]'>

                        <View className='flex-row justify-between mb-2'>
                            <Text className='text-[#1F2937] font-interBold'>Story Theme</Text>
                            <TouchableOpacity><Text className='text-[#9333EA] font-interMedium'>Edit</Text></TouchableOpacity>
                        </View>
                        <View className='flex-row items-center gap-2'>
                            <Image source={require("../../../assets/magic/sthme.png")} />
                            <View>
                                <Text className='text-[#1F2937] font-interBold mb-1'>Space Adventure</Text>
                                <Text className='text-[#2563EB]'>Educational & fun</Text>
                            </View>
                        </View>

                    </View>

                    <View className='w-full mt-2 border border-[#E5E7EB] p-3 rounded-xl bg-[#fff]'>

                        <View className='flex-row justify-between mb-2'>
                            <Text className='text-[#1F2937] font-interBold'>Story Style</Text>
                            <TouchableOpacity><Text className='text-[#9333EA] font-interMedium'>Edit</Text></TouchableOpacity>
                        </View>
                        <View className='flex-row items-center gap-2'>
                            <Image source={require("../../../assets/magic/story.png")} />
                            <View>
                                <Text className='text-[#1F2937] font-interBold mb-1'>Interactive Adventure</Text>
                                <Text className='text-[#16A34A]'>10-15 minutes</Text>
                            </View>
                        </View>

                    </View>

                    <View className='w-full mt-2 border border-[#E5E7EB] p-3 rounded-xl bg-[#fff]'>

                        <View className='flex-row justify-between mb-2'>
                            <Text className='text-[#1F2937] font-interBold'>Language & Voice</Text>
                            <TouchableOpacity><Text className='text-[#9333EA] font-interMedium'>Edit</Text></TouchableOpacity>
                        </View>
                        <View className='flex-row items-center gap-2'>
                            <Image source={require("../../../assets/magic/voice.png")} />
                            <View>
                                <Text className='text-[#1F2937] font-interBold mb-1'>English - Oliver</Text>
                                <Text className='text-[#EA580C]'>Playful & energetic</Text>
                            </View>
                        </View>

                    </View>

                    <View className='w-full mt-2 border border-[#E5E7EB] p-3 rounded-xl bg-[#fff]'>

                        <View className='flex-row justify-between mb-2'>
                            <Text className='text-[#1F2937] font-interBold'>Story Options</Text>
                            <TouchableOpacity><Text className='text-[#9333EA] font-interMedium'>Edit</Text></TouchableOpacity>
                        </View>
                        <View className='flex-row items-center gap-2 justify-between mb-1'>
                            <Text>Illustrations</Text>
                            <Text className='text-[#16A34A] bg-[#F0FDF4] p-1 rounded-xl'>Enabled</Text>
                        </View>
                        <View className='flex-row items-center gap-2 justify-between mb-1'>
                            <Text>Sound effects</Text>
                            <Text className='text-[#16A34A] bg-[#F0FDF4] p-1 rounded-xl'>Enabled</Text>
                        </View>
                        <View className='flex-row items-center gap-2 justify-between mb-1'>
                            <Text>Interactive choices</Text>
                            <Text className='text-[#2563EB] bg-[#F0FDF4] p-1 rounded-xl'>3-4 choices</Text>
                        </View>

                    </View>

                    <View className='w-full mt-2 mb-3 bg-[#E9D5FF] border-[#E5E7EB] rounded-xl p-3 flex-row  items-center justify-center gap-2'>
                        <Octicons name="clock" size={24} color="#7E22CE" />
                        <Text>Estimated Time</Text>
                    </View>


                </ScrollView>


                <View className='flex-row gap-3 mt-4 mb-10'>
                    <TouchableOpacity className='flex-1 items-center bg-white border p-3 rounded-lg border-purple-300'><Text className='text-black'>Back</Text></TouchableOpacity>
                    <TouchableOpacity className='flex-1 items-center bg-[#8B5CF6] p-3 border border-purple-300 rounded-lg' onPress={handleGenerate}><Text className='text-white'>{loading?<ActivityIndicator color={"white"}/>:"Generate Story"}</Text></TouchableOpacity>
                </View>

            </LinearGradient>
        </View>
    )
}

export default CreateStory6