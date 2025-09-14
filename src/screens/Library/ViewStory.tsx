import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo, Feather, FontAwesome, Foundation, MaterialIcons } from '@expo/vector-icons';
import { verticalScale } from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient';

const ViewStory = () => {
  const navigation = useNavigation();

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
    <View className='bg-#fff flex-1'>
      <ScrollView>
        <View style={{ height: verticalScale(280) }} className='items-center justify-center'>
          <Image source={require("../../../assets/magic/viewLib.png")} style={{ width: "100%", height: "100%" }} />
        </View>

        <View className='p-3'>
          <View className='flex-row justify-between '>
            <Text className='bg-[#F3E8FF] rounded-full p-2 text-[#475569]'>Created Jan 15, 2025</Text>
            <Text className='bg-[#DBEAFE] rounded-full p-2 text-[#475569]'>10 pages</Text>
          </View>

          <LinearGradient colors={["#667EEA", "#764BA2"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={{ borderRadius: 15, overflow: "hidden", marginTop: 10, marginBottom: 5 }}>
            <TouchableOpacity className='flex-row items-center justify-center gap-3 p-4 ' onPress={()=>navigation.navigate("Read Story")}>
              <FontAwesome name="play" size={24} color="white" />
              <Text className='text-white font-interBold text-xl'>Read Story</Text>
            </TouchableOpacity>
          </LinearGradient>

          <View className='flex-row gap-2 mt-2 mb-2'>
            <TouchableOpacity className='bg-[#D1FAE5] flex-1 rounded-lg p-4 items-center flex-row justify-center gap-2'>
              <Entypo name="edit" size={16} color="#047857" />
              <Text className='text-[#047857] font-interMedium'>Edit Story</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#FFEDD5] flex-1 rounded-lg p-4 items-center flex-row justify-center gap-2'>
              <FontAwesome name="share" size={16} color="#C2410C" />
              <Text className='text-[#C2410C] font-interMedium'>Share</Text>
            </TouchableOpacity>
          </View>

          <View className='flex-row gap-2 mt-2 mb-2'>
            <TouchableOpacity className='bg-[#E5E7EB] flex-1 rounded-lg p-4 items-center flex-row justify-center gap-2'>
              <Foundation name="page-export-pdf" size={16} color="#9CA3AF" />
              <Text className='text-[#9CA3AF] font-interMedium'>Export PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#FEE2E2] flex-1 rounded-lg p-4 items-center flex-row justify-center gap-2'>
              <MaterialIcons name="delete" size={16} color="#C2410C" />
              <Text className='text-[#C2410C] font-interMedium'>Delete</Text>
            </TouchableOpacity>
          </View>

          <View className='w-full  border border-[#E9D5FF] mt-2 mb-2' />
          <View>
            <View className='flex-row items-center gap-2'>
              <Image source={require("../../../assets/magic/syn.png")} style={{width:16,height:16}}/>
              <Text className='font-interSemiBold'>Synopsis</Text>
            </View>
            
            <View className='mt-2 border border-[#F3E8FF] p-2 rounded-lg'>
              <Text className='text-[#475569] font-interRegular'>Join Emma on her enchanting journey
                through a magical forest where she
                meets talking animals, discovers hidden
                treasures, and learns valuable lessons
                about friendship and courage.</Text>
            </View>
          </View>
          <View className='flex-row items-center gap-2 mt-2'>
              <Image source={require("../../../assets/magic/tags.png")} style={{width:16,height:16}}/>
              <Text className='font-interSemiBold'>Tags</Text>
            </View>
          <View className='flex-row justify-center gap-10 mt-2 mb-3 p-2'>
            <Text>Adventure</Text>
            <Text>Fantasy</Text>
            <Text>Watercolor</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ViewStory