import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo, Feather, FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { scale, verticalScale } from 'react-native-size-matters'
import { useSaveToLibraryMutation } from 'src/redux/features/storyCompletetion/storyComplete'
import { useAppSelector } from 'src/redux/hooks'

const StoryCompleteView = () => {
  const navigation = useNavigation()

  const [saveToLib] = useSaveToLibraryMutation();

  const allInfo = useAppSelector((state) => state.storyPromt.info)

  const ID = allInfo?.id
  const token = useAppSelector((state) => state.auth.token);


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
        <TouchableOpacity className='flex-row gap-2 items-center  rounded-full justify-center p-3' onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={24} color="#9333EA" />
        </TouchableOpacity>
      )

    })
  }, [navigation])

  const handleSaveToLib = async () => {
    try {

      const res = await saveToLib({ storyId: ID, token }).unwrap();
      if (res.code == 200) {
        Alert.alert("Story successfully saved to your library.")
      } else {
        Alert.alert("Story failed to saved.")
      }

    } catch (err) {
      Alert.alert("Something went wrong!!")
      console.log(err)
    }
  }

  return (

    <LinearGradient colors={["#EEF2FF", "#FAF5FF", "#FDF2F8"]} style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1, alignItems: "center", padding: 10 }}>

          <View style={{ width: scale(144), height: verticalScale(144) }}>
            <Image source={require("../../../assets/magic/complete.png")} style={{ width: "100%", height: "100%" }} />
          </View>
          <Text className='text-[#4F46E5] font-interMedium text-xl'>Emma's space journey was incredible</Text>

          <View className='flex-row items-center justify-between w-full border border-gray-200 p-4 m-4 bg-white rounded-lg'>
            <Text className='text-[#4338CA]'>Your Chose 3 paths</Text>
            <Text className='text-[#4338CA]'>10 pages</Text>
            <Text className='text-[#4338CA]'>Theme: Space</Text>
          </View>

          <TouchableOpacity className='flex-row items-center justify-center gap-2 w-full border border-gray-200 p-4 m-4 bg-white rounded-lg mt-2' onPress={handleSaveToLib}>
            <Entypo name="save" size={24} color="#4338CA" />
            <Text className='text-[#4338CA]'>Save to Library</Text>

          </TouchableOpacity>

          <View className='flex-row items-center justify-center gap-2 w-full border border-gray-200 p-4 m-4 bg-white rounded-lg mt-2'>
            <FontAwesome name="share" size={24} color="#4338CA" />
            <Text className='text-[#4338CA]'>Share Preview</Text>

          </View>

          <View className='flex-row items-center justify-center gap-2 w-full border border-gray-200 p-4 m-4 bg-white rounded-lg mt-2'>
            <FontAwesome6 name="file-pdf" size={24} color="#4338CA" />
            <Text className='text-[#4338CA]'>Download as PDF</Text>

          </View>

          <View className='flex-row items-center justify-center gap-2 w-full border border-gray-200 p-4 m-4 bg-white rounded-lg mt-2'>
            <Entypo name="plus" size={24} color="#4338CA" />
            <Text className='text-[#4338CA]'>Create New Story</Text>

          </View>
        </View>
      </ScrollView>
    </LinearGradient>

  )
}

export default StoryCompleteView