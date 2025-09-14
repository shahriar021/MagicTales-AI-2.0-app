import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';

const Library = () => {
  const navigation = useNavigation();
  const [galleryList] = useState(Array.from({ length: 16 }, (_, a) => a + 1))

  const galleryColors = {
    1: require("../../../assets/magic/lb1.png"),
    2: require("../../../assets/magic/lb2.png"),
    3: require("../../../assets/magic/lb3.png"),
    4: require("../../../assets/magic/lb4.png"),
    5: require("../../../assets/magic/lb1.png"),
    6: require("../../../assets/magic/lb1.png"),
    7: require("../../../assets/magic/lb1.png"),
    8: require("../../../assets/magic/lb1.png"),
    9: require("../../../assets/magic/lb1.png"),
    10: require("../../../assets/magic/lb1.png"),
    11: require("../../../assets/magic/lb1.png"),
    12: require("../../../assets/magic/lb1.png"),
    13: require("../../../assets/magic/lb1.png"),
    14: require("../../../assets/magic/lb1.png"),
    15: require("../../../assets/magic/lb1.png"),
    16: require("../../../assets/magic/lb1.png"),
  }

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


          <View className='flex-row flex-wrap w-full  items-center justify-center mt-2 mb-4 gap-2'>
            {galleryList?.map(item => <View key={item} style={{ width: "49%" }} className='bg-white rounded-lg overflow-hidden'>
              <View style={{ width: "100%", height: 200, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                <Image source={galleryColors[item]} style={{ width: "100%", height: "100%" }} />

              </View>
              <View className='p-2'><Text className='mt-1 mb-1 font-interSemiBold text-[#000]'>Emma's Magical Adventure</Text>
                <Text className='font-interRegular mb-2 text-[#6B7280]'>Jan 15, 2025</Text></View>
            </View>)}
          </View>


        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Library