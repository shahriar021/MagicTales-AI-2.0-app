import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { scale } from 'react-native-size-matters'
import { AntDesign } from '@expo/vector-icons'

const ChoosePlan = ({ navigation }) => {
  // const navigation = useNavigation()
  const [isSelectPlan, setIsSelectPlan] = useState("master")
  console.log(navigation, "plan")

  const handleSelectPlan = (plan) => {
    setIsSelectPlan(plan);
    // Don't navigate here, just change state. Navigation will happen on plan selection.
  };




  return (
    <LinearGradient colors={["#9333EA", "#EC4899", "#FB923C"]} style={{ flex: 1 }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
      <SafeAreaView style={{ flex: 1, alignItems: "center", width: "100%" }}>
        <View className='flex-row items-center justify-between w-full p-2'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text className='text-white font-interSemiBold text-xl'>Magictales AI</Text>
          <View></View>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1, width: "100%", alignItems: "center", padding: 25 }}>
          <Text style={{ color: 'white', fontSize: 24 }} className='font-interBold mt-2 mb-2'>Choose Your Plan</Text>
          <Text style={{ color: 'white', fontSize: 18 }} className='text-[#FEF9C3] mt-1 mb-2'>14-Day Free Trial</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>
            Unlock the magic and start creating stories today
          </Text>

          <View className=' gap-2 mt-5 items-center'>


            {/* <View className="w-full flex-row border-4 border-[#FDE047] p-1 rounded-2xl justify-between bg-gray-100">
                           <View className='flex-1'>
                            <TouchableOpacity
                                className={` items-center p-3 rounded-2xl ${isSelectPlan === 'creator' ? 'bg-white' : ''} ${isSelectPlan === 'creator' ? 'shadow-md' : ''}`}
                                onPress={() => setIsSelectPlan('creator')}
                            >
                                
                                {isSelectPlan === 'creator' ? (

                                    <Text className="text-black text-lg font-semibold">Story Creator</Text>

                                ) : (
                                    <Text className="text-gray-600 text-lg font-semibold">Story Creator</Text>
                                )}
                            </TouchableOpacity>

                            </View>
                            <View className='flex-1'>
                            <TouchableOpacity
                                className={` items-center p-3 rounded-2xl ${isSelectPlan === 'master' ? 'bg-white' : ''} ${isSelectPlan === 'master' ? 'shadow-md' : ''}`}
                               onPress={() => setIsSelectPlan('master')}
                            >
                                
                                {isSelectPlan === 'master' ? (

                                    <Text className="text-black text-lg font-semibold">Story Master</Text>

                                ) : (
                                    <Text className="text-gray-600 text-lg font-semibold">Story Master</Text>
                                )}
                            </TouchableOpacity>
                            </View>
                        </View> */}

            {/* <View className="w-full flex-row border-4 border-[#FDE047] p-1 rounded-2xl justify-between bg-gray-100">
              <View className="flex-1">
                <Pressable
                  className={`items-center p-3 rounded-2xl ${isSelectPlan === 'creator' ? 'bg-white' : ''} ${isSelectPlan === 'creator' ? 'shadow-md' : ''}`}
                  onPress={() => setIsSelectPlan('creator')}
                >
                  {isSelectPlan === 'creator' ? (

                    <Text className="text-black text-lg font-semibold">Story Creator</Text>

                  ) : (
                    <Text className="text-gray-600 text-lg font-semibold">Story Creator</Text>
                  )}
                </Pressable>
              </View>

              <View className="flex-1">
                <Pressable
                  className={`items-center p-3 rounded-2xl ${isSelectPlan === 'master' ? 'bg-white' : ''} ${isSelectPlan === 'master' ? 'shadow-md' : ''}`}
                  onPress={() => setIsSelectPlan('master')}
                >
                  {isSelectPlan === 'master' ? (

                    <Text className="text-black text-lg font-semibold">Story Master</Text>

                  ) : (
                    <Text className="text-gray-600 text-lg font-semibold">Story Master</Text>
                  )}
                </Pressable>
              </View>
            </View> */}

            <View className="w-full flex-row border-4 border-[#FDE047] p-1 rounded-2xl justify-between bg-gray-100">
              <View className="flex-1">
                <Pressable
                  onPress={() => setIsSelectPlan('creator')}
                  style={[
                    { alignItems: 'center', padding: 12, borderRadius: 16 }, // Base styles
                    isSelectPlan === 'creator' && { backgroundColor: 'white', shadowColor: 'rgba(0,0,0,0.1)', shadowOpacity: 0.8, shadowRadius: 5 }, // Conditional styles
                  ]}
                >
                  {isSelectPlan === 'creator' ? (
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>Story Creator</Text>
                  ) : (
                    <Text style={{ color: '#6B7280', fontSize: 18, fontWeight: '600' }}>Story Creator</Text>
                  )}
                </Pressable>
              </View>

              <View className="flex-1">
                <Pressable
                  onPress={() => setIsSelectPlan('master')}
                  style={[
                    { alignItems: 'center', padding: 12, borderRadius: 16 }, // Base styles
                    isSelectPlan === 'master' && { backgroundColor: 'white', shadowColor: 'rgba(0,0,0,0.1)', shadowOpacity: 0.8, shadowRadius: 5 }, // Conditional styles
                  ]}
                >
                  {isSelectPlan === 'master' ? (
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>Story Master</Text>
                  ) : (
                    <Text style={{ color: '#6B7280', fontSize: 18, fontWeight: '600' }}>Story Master</Text>
                  )}
                </Pressable>
              </View>
            </View>

            {isSelectPlan == "creator" && <View className='bg-white w-full border-4 border-[#FDE047] rounded-3xl overflow-hidden p-5 items-center' style={{ width: scale(300) }} >
              <View style={{ width: 64, height: 64 }}>
                <Image source={require("../../../assets/magic/storyCreator.png")} style={{ width: "100%", height: "100%" }} />
              </View>
              <Text className='text-black font-interSemiBold'>Story Creator</Text>
              <Text className='text-[#9333EA] font-interSemiBold text-xl mt-2 mb-3'>$4.99<Text className='text-[#6B7280]'>/month</Text></Text>
              <View className='flex-row gap-2 mt-2 bg-[#FAF5FF] p-2 rounded-xl items-center '>
                <Image source={require("../../../assets/magic/i1b.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ flexWrap: 'wrap', flex: 1 }}>Unlimited short & medium stories</Text>
              </View>
              <View className='flex-row gap-2 mt-2 bg-[#FAF5FF] p-2 rounded-xl items-center '>
                <Image source={require("../../../assets/magic/i2b.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ flexWrap: 'wrap', flex: 1 }}>5 art styles</Text>
              </View>
              <View className='flex-row gap-2 mt-2 bg-[#FAF5FF] p-2 rounded-xl items-center '>
                <Image source={require("../../../assets/magic/i3b.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ flexWrap: 'wrap', flex: 1 }}>3 narrator voices</Text>
              </View>
              <View className='flex-row gap-2 mt-2 bg-[#FAF5FF] p-2 rounded-xl items-center   '>
                <Image source={require("../../../assets/magic/i4b.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ flexWrap: 'wrap', flex: 1 }}>Save & read offlinecfdfvdsfdsfsd sd </Text>
              </View>
              <View className='flex-row gap-2 mt-2 bg-[#FAF5FF] p-2 rounded-xl items-center'>
                <Image source={require("../../../assets/magic/i6b.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ flexWrap: 'wrap', flex: 1 }}>Share previews (watermarked)</Text>
              </View>

              <LinearGradient colors={["#A855F7", "#EC4899"]} style={{ width: "100%", borderRadius: 15, overflow: "hidden", marginTop: 15 }}>
                <TouchableOpacity className='p-5 items-center' onPress={() => navigation.navigate('Confirm Plan')}>
                  <Text className='font-interMedium text-xl text-white'>Select Plan</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>}


            {isSelectPlan == "master" && <View className='bg-white w-full border-4 border-[#E9D5FF] rounded-3xl overflow-hidden p-5 items-center' style={{ width: scale(300) }}>
              <View style={{ width: 64, height: 64 }}>
                <Image source={require("../../../assets/magic/storyCreator.png")} style={{ width: "100%", height: "100%" }} />
              </View>
              <Text className='text-black font-interSemiBold'>Story Master</Text>
              <Text className='text-[#9333EA] font-interSemiBold text-xl mt-2 mb-3'>$9.99<Text className='text-[#6B7280]'>/month</Text></Text>
              <View className='flex-row gap-2 mt-2 bg-[#FAF5FF] p-2 rounded-xl items-center'>
                <Image source={require("../../../assets/magic/i1b.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ flexWrap: 'wrap', flex: 1 }}>All Creator features</Text>
              </View>
              <View className='flex-row gap-2 mt-2 bg-[#FAF5FF] p-2 rounded-xl items-center '>
                <Image source={require("../../../assets/magic/i2b.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ flexWrap: 'wrap', flex: 1 }}>Long stories</Text>
              </View>
              <View className='flex-row gap-2 mt-2 bg-[#FAF5FF] p-2 rounded-xl items-center '>
                <Image source={require("../../../assets/magic/i3b.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ flexWrap: 'wrap', flex: 1 }}>All art styles & voices</Text>
              </View>
              <View className='flex-row gap-2 mt-2 bg-[#FAF5FF] p-2 rounded-xl items-center   '>
                <Image source={require("../../../assets/magic/i4b.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ flexWrap: 'wrap', flex: 1 }}>No watermark</Text>
              </View>
              <View className='flex-row gap-2 mt-2 bg-[#FAF5FF] p-2 rounded-xl items-center '>
                <Image source={require("../../../assets/magic/i6b.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ flexWrap: 'wrap', flex: 1 }}>PDF export</Text>
              </View>
              <View className='flex-row gap-2 mt-2 bg-[#FAF5FF] p-2 rounded-xl items-center '>
                <Image source={require("../../../assets/magic/i6b.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ flexWrap: 'wrap', flex: 1 }}>Emotion-adaptive narration</Text>
              </View>

              <LinearGradient colors={["#A855F7", "#EC4899"]} style={{ width: "100%", borderRadius: 15, overflow: "hidden", marginTop: 15 }}>
                <TouchableOpacity className='p-5 items-center' onPress={() => navigation.navigate('Confirm Plan')}>
                  <Text className='font-interMedium text-xl text-white'>Select Plan</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>}
          </View>

          <Text className='mt-2 mb-3 text-white'>Already subscribed? Restore Purchase</Text>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default ChoosePlan





