import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Progress from "react-native-progress";
import { scale, verticalScale } from 'react-native-size-matters';
import { useAppSelector } from 'src/redux/hooks';
import { useGeneratedStoryMutation } from 'src/redux/features/storyPromt/storyPromtApi';
import ShimmerEffect from './animaiton/ShimmerUi';
import { useDispatch } from 'react-redux';
import { setInfo } from 'src/redux/features/storyPromt/storyPromtSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/types/navigationPage';
import { StoryDataResponse } from 'src/types/createStory';

type Props={
  navigation:StackNavigationProp<RootStackParamList,"Generate">
}

const GeneratingPage = ({navigation}:Props) => {
  const dispatch=useDispatch()
  const [getStoryApi] = useGeneratedStoryMutation()
  const token = useAppSelector((state) => state.auth.token);
  const [storyData, setStoryData] = useState<StoryDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const progress = storyData?.data?.progress ?? 0;

  const progressRef = useRef(null);

  const getStory = async () => {
    try {
      const res = await getStoryApi(token).unwrap(); // Replace with your API call
      console.log(res, "response result");

      // Update storyData
      setStoryData(res);

      // Set progress value in the ref for comparison
      progressRef.current = res.data.progress;

      // If progress is 100, stop loading
      if (progressRef.current === 100) {
        setLoading(false);
        dispatch(setInfo(res.data))
        console.log("Story completed!");
      }
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  };

  useEffect(() => {
    // Initially fetch the story
    getStory();

    // Poll every 5 seconds until progress is 100
    const intervalId = setInterval(() => {
      if (progressRef.current && progressRef.current < 100) {
        getStory();  // Call getStory again if progress is not 100
      } else {
        clearInterval(intervalId);  // Stop polling once progress is 100
        console.log("Polling stopped as progress is 100.");
      }
    }, 5000);  // Poll every 5 seconds

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [token]); // Dependencies only on token

  return (
    <LinearGradient colors={["#667EEA", "#764BA2"]} style={{ flex: 1 }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
      <SafeAreaView className='flex-1 p-3'>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className='p-2 rounded-lg flex-row items-center gap-2 mt-1 mb-2' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
            {loading?<ActivityIndicator/>:<Image source={require("../../../assets/magic/okGenerate.png")} style={{ width: 48, height: 48 }} />}
            <View>
              <Text className='text-white font-bold'>Writing</Text>
              <Text className='text-white'>Story complete ✨</Text>
            </View>
          </View>
          <View className='p-2 rounded-lg flex-row items-center gap-2 mt-1 mb-2' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
            {loading?<ActivityIndicator/>:<Image source={require("../../../assets/magic/okGenerate.png")} style={{ width: 48, height: 48 }} />}
            <View>
              <Text className='text-white font-bold'>Illustrating</Text>
              <Text className='text-white'>Painting stars and magical forests... ✨🎨</Text>
            </View>
          </View>
          <View className='p-2 rounded-lg flex-row items-center gap-2 mt-1 mb-2' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
            {loading?<ActivityIndicator/>:<Image source={require("../../../assets/magic/okGenerate.png")} style={{ width: 48, height: 48 }} />}
            <View>
              <Text className='text-white font-bold'>Narration</Text>
              <Text className='text-white'>Adding voice magic... 🎙️</Text>
            </View>
          </View>
          <View className='p-4 rounded-lg  items-center gap-4 mt-1 mb-2  w-full ' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
            <Progress.Bar progress={Math.min(Math.max(progress / 100, 0), 1)} width={null} height={10} color='#A855F7' unfilledColor='#E4E6EA' borderColor='lightgray' style={{ width: "100%" }} />
            <View className=' w-full items-center gap-2'>
              <Text className='text-white font-bold'>{storyData?.data?.progress}% Complete</Text>
              <Text className='text-white'>Almost ready for bedtime! 🌙</Text>
            </View>
          </View>
          <View className='items-center mt-2 mb-2'>
            <View style={{ width: scale(80), height: verticalScale(80) }}>
              <Image source={require("../../../assets/magic/almost.png")} style={{ width: "100%", height: "100%" }} />
            </View>
            <Text className='text-white font-interBold text-2xl text-center'>{loading?"Almost There!":"Done"}</Text>
            <Text className='text-white font-interRegular text-xl text-center mt-1 mb-2'>Your magical story is taking shape ✨</Text>
          </View>

          <TouchableOpacity style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }} className='p-3 rounded-lg gap-4 mt-2 mb-4' onPress={() => navigation.navigate("View Libray" )}>
            <Text className='font-interSemiBold text-white'>Story Preview</Text>
            <View style={{ height: verticalScale(220), overflow: 'hidden' }}>
              {/* <ShimmerEffect/> */}
              {loading ?<ShimmerEffect/>:<Image source={{uri:`${storyData?.data?.image_url}`}} style={{ width: "100%", height: "100%" }} />}
            </View>

          </TouchableOpacity>

          <View className='p-4 rounded-lg  items-center gap-4 mt-1 mb-2  w-full ' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
            <Text className='text-white font-interBold text-xl'>Keep Your Phone Awake</Text>
            <Text className='text-white font-interRegular text-lg'>This helps us create your story faster! 📱</Text>
          </View>
        </ScrollView>

        <TouchableOpacity className='bg-[#fff] border items-center mt-2 mb-4 p-4 rounded-lg border-gray-400' onPress={() => navigation.navigate("create story 1" )}>
          <Text className='text-black font-interMedium '>Cancel Creation</Text>
        </TouchableOpacity>
      </SafeAreaView>

    </LinearGradient>
  )
}



export default GeneratingPage