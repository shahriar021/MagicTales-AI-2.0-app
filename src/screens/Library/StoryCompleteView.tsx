import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {  useLayoutEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Entypo, Feather, FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { scale, verticalScale } from 'react-native-size-matters'
import * as Notifications from 'expo-notifications';
import { handleDownload } from 'src/components/ui/storyCompleteView/StoryCompleteView'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'src/types/navigationPage'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

type StoryCompleteViewParams=RouteProp<RootStackParamList,"Story Complete View">

type Props={
  navigation:StackNavigationProp<RootStackParamList,"Read Story">
}

const StoryCompleteView = ({navigation}:Props) => {
  const route=useRoute<StoryCompleteViewParams>()
  const {info}=route.params
  

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

          <TouchableOpacity className='flex-row items-center justify-center gap-2 w-full border border-gray-200 p-4 m-4 bg-white rounded-lg mt-2' onPress={()=>navigation.navigate("BottomScreen",{screen:'Library'})}>
            <Entypo name="save" size={24} color="#4338CA" />
            <Text className='text-[#4338CA]'>Back to Library</Text>

          </TouchableOpacity>

          <View className='flex-row items-center justify-center gap-2 w-full border border-gray-200 p-4 m-4 bg-white rounded-lg mt-2'>
            <FontAwesome name="share" size={24} color="#4338CA" />
            <Text className='text-[#4338CA]'>Share Preview</Text>

          </View>

          <TouchableOpacity className='flex-row items-center justify-center gap-2 w-full border border-gray-200 p-4 m-4 bg-white rounded-lg mt-2' onPress={()=>handleDownload(info)}>
            <FontAwesome6 name="file-pdf" size={24} color="#4338CA" />
            <Text className='text-[#4338CA]'>Download as PDF</Text>
          </TouchableOpacity>

          <TouchableOpacity className='flex-row items-center justify-center gap-2 w-full border border-gray-200 p-4 m-4 bg-white rounded-lg mt-2' onPress={()=>navigation.navigate("create story 1")}>
            <Entypo name="plus" size={24} color="#4338CA" />
            <Text className='text-[#4338CA]'>Create New Story</Text>

          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>

  )
}

export default StoryCompleteView