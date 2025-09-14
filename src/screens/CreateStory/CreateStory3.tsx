import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Progress from "react-native-progress";
import { scale, verticalScale } from 'react-native-size-matters';
import { storyCards } from './demo';

const CreateStory3 = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#f2f2f2",
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTitle: "New Story",
      headerTitleAlign:"center",
      headerTintColor: "black",
      headerLeft: () => (
        <TouchableOpacity className='flex-row gap-2 items-center p-3' onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={24} color="black" />
        </TouchableOpacity>
      )
    });
  }, [navigation])

  return (
    <View className='p-3 flex-1 bg-[#f2f2f2]'>

      <Progress.Bar progress={.4} width={null} height={10} color='#667EEA' unfilledColor='white' borderColor='lightgray' />
      <Text className='text-center mt-2 mb-2 text-gray-500'>Step 3 of 6</Text>

      <ScrollView contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}>

        <Text className='text-[#111827] text-2xl font-poppins'>Choose Art Style</Text>
        <Text className='text-gray-500 text-xl font-interMedium mt-2 mb-2'>Select the visual style for your magical story</Text>

        <View>

          {storyCards.map(item => <View key={item.title} className='bg-[#fff] p-3 items-center rounded-xl overflow-hidden gap-2 mt-2 mb-2' style={{ width: scale(300) }}>
            <Image source={item.image} />

            <Text className='text-[#1F2937] font-interSemiBold text-xl '>{item.title}</Text>
            <Text className='text-[#6B7280] font-interMedium'>{item.detail}</Text>
          </View>)}

        </View>

      </ScrollView>


      <View className='flex-row gap-3 mt-4 mb-10'>
        <TouchableOpacity className='flex-1 items-center bg-white border p-3 rounded-lg border-purple-300'><Text className='text-black'>Back</Text></TouchableOpacity>
        <TouchableOpacity className='flex-1 items-center bg-[#8B5CF6] p-3 border border-purple-300 rounded-lg' onPress={() => navigation.navigate("create story 4")}><Text className='text-white'>Next</Text></TouchableOpacity>
      </View>


    </View>
  )
}

export default CreateStory3