import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';
import { useLibraryListQuery } from 'src/redux/features/storyPromt/storyPromtApi';
import { useAppSelector } from 'src/redux/hooks';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/types/navigationPage';

type Props={
  navigation:StackNavigationProp<RootStackParamList,"Read Story">
}

const Library = ({navigation}:Props) => {
  const [galleryList] = useState(Array.from({ length: 16 }, (_, a) => a + 1))
  const token = useAppSelector((state) => state.auth.token)
  const { data: getLibData, error, isLoading } = useLibraryListQuery(token)
  const [selected, setSelected] = useState('All');

  return (
    <LinearGradient colors={["#fff", "#FCE7F3", "#DBEAFE"]} start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }} style={{ flex: 1 }}>
      <SafeAreaView className=' flex-1 p-3'>
        
        <View className='flex-row items-center justify-between w-full mt-2 mb-5'>
          <TouchableOpacity className='bg-white w-[40] h-[40] overflow-hidden rounded-full items-center justify-center' onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
          <Text className='font-interSemiBold text-lg flex-1 text-center'>Library</Text>
          <View className='w-[40] h-[40]' ><TouchableOpacity className='bg-white w-[40] h-[40] overflow-hidden rounded-full items-center justify-center' onPress={() => navigation.goBack()}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity></View>
        </View>

        <View className='w-full'>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 5, width: "100%" }}
          >
            <View className='flex-row w-full gap-3'>
              <TouchableOpacity
                className={`flex-1 p-2 border border-gray-300 rounded-2xl text-center items-center justify-center ${selected === 'All' ? 'bg-blue-500' : 'bg-white'}`}
                onPress={() => setSelected('All')}
              >
                <Text className={`${selected === 'All' ? 'text-white' : 'text-black'} text-center`}>All</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`flex-1 p-2 border border-gray-300 rounded-2xl text-center items-center justify-center ${selected === 'Favourite' ? 'bg-blue-500' : 'bg-white'}`}
                onPress={() => setSelected('Favourite')}
              >
                <Text className={`${selected === 'Favourite' ? 'text-white' : 'text-black'} text-center`}>Favourite</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`flex-1 p-2 border border-gray-300 rounded-2xl text-center ${selected === 'By Child' ? 'bg-blue-500' : 'bg-white'}`}
                onPress={() => setSelected('By Child')}
              >
                <Text className={`${selected === 'By Child' ? 'text-white' : 'text-black'} text-center`}>By Child</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`flex-1 p-2 border border-gray-300 rounded-2xl text-center ${selected === 'Downloads' ? 'bg-blue-500' : 'bg-white'}`}
                onPress={() => setSelected('Downloads')}
              >
                <Text className={`${selected === 'Downloads' ? 'text-white' : 'text-black'} text-center`}>Downloads</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {isLoading&&<ActivityIndicator size={"large"} color={"blue"}/>}

          <View className='flex-row flex-wrap w-full  items-center  mt-2 mb-4 gap-2'>
            {getLibData?.data?.results?.map(item => <TouchableOpacity key={item.id} style={{ width: "49%" }} className='bg-white rounded-lg overflow-hidden' onPress={()=>navigation.navigate("Read Story",{id:item?.id})}>
              <View style={{ width: "100%", height: 200, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                <Image source={{ uri: item?.image_url }} style={{ width: "100%", height: "100%" }} resizeMode='cover' />
              </View>
              <View className='p-2'><Text className='mt-1 mb-1 font-interSemiBold text-[#000]'>{item?.title}</Text>
                <Text className='font-interRegular mb-2 text-[#6B7280]'>{new Date(item?.created_at).toLocaleDateString()}</Text></View>
            </TouchableOpacity>)}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Library