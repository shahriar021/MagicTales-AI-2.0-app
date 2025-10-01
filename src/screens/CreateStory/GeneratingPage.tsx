import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Animated, Easing, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Progress from "react-native-progress";
import { scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from 'src/redux/hooks';
import { useGeneratedStoryMutation } from 'src/redux/features/storyPromt/storyPromtApi';

const ShimmerEffect = () => {
  const shimmerAnim = new Animated.Value(-300); // Initial position for the shimmer

  // Set up the shimmer animation
  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 300, // End position (shimmer moves right)
        duration: 1500, // Animation duration
        easing: Easing.linear, // Linear easing for smooth animation
        useNativeDriver: true, // Use native driver for performance
      })
    ).start();
  }, []);

  // Interpolate shimmer animation to control movement
  const translateX = shimmerAnim.interpolate({
    inputRange: [-300, 0, 300], // Start, middle, and end values
    outputRange: [-300, 0, 300], // Corresponding position for translateX
  });

  return (
    <View style={styles.shimmerContainer}>
      {/* Animated View for Shimmer Effect */}
      <Animated.View
        style={[
          styles.shimmer,
          {
            transform: [{ translateX }], // Apply the interpolated translateX
          },
        ]}
      >
        <LinearGradient
          colors={['#f0f0f0', '#e0e0e0', '#f0f0f0']} // Gradient shimmer effect
          style={styles.gradient}
        />
      </Animated.View>
    </View>
  );
};

const GeneratingPage = () => {
  const [getStoryApi] = useGeneratedStoryMutation()
  const navigation = useNavigation()
  const token = useAppSelector((state) => state.auth.token);

  const [storyData, setStoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(storyData?.data?.progress,"story data.")

  // // Fetch story and check progress
  // const getStory = async () => {
  //   try {
  //     const res = await getStoryApi(token).unwrap(); // Replace with your API call
  //     console.log(res, "response result");

  //     // Update storyData
  //     setStoryData(res);

  //     // If progress is 100, stop loading
  //     if (res.data.progress === 100) {
  //       setLoading(false);
  //       // console.log("Story completed!");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching story:", error);
  //   }
  // };

  // useEffect(() => {
  //   // Initially fetch the story
  //   getStory();

  //   // Poll every 5 seconds until progress is 100
  //   const intervalId = setInterval(() => {
  //     if (storyData && storyData?.data?.progress < 100) {
  //       getStory();  // Call getStory again if progress is not 100
  //     } else {
  //       clearInterval(intervalId);  // Stop polling once progress is 100
  //     }
  //   }, 5000);  // Poll every 5 seconds

  //   // Cleanup on component unmount
  //   return () => clearInterval(intervalId);
  // }, [storyData, token]);

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
            <Image source={require("../../../assets/magic/okGenerate.png")} style={{ width: 48, height: 48 }} />
            <View>
              <Text className='text-white font-bold'>Writing</Text>
              <Text className='text-white'>Story complete ✨</Text>
            </View>
          </View>
          <View className='p-2 rounded-lg flex-row items-center gap-2 mt-1 mb-2' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
            <Image source={require("../../../assets/magic/okGenerate.png")} style={{ width: 48, height: 48 }} />
            <View>
              <Text className='text-white font-bold'>Illustrating</Text>
              <Text className='text-white'>Painting stars and magical forests... ✨🎨</Text>
            </View>
          </View>
          <View className='p-2 rounded-lg flex-row items-center gap-2 mt-1 mb-2' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
            <Image source={require("../../../assets/magic/okGenerate.png")} style={{ width: 48, height: 48 }} />
            <View>
              <Text className='text-white font-bold'>Narration</Text>
              <Text className='text-white'>Adding voice magic... 🎙️</Text>
            </View>
          </View>
          <View className='p-4 rounded-lg  items-center gap-4 mt-1 mb-2  w-full ' style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
            <Progress.Bar progress={0.6} width={null} height={10} color='#A855F7' unfilledColor='#E4E6EA' borderColor='lightgray' style={{ width: "100%" }} />
            <View className=' w-full items-center gap-2'>
              <Text className='text-white font-bold'>65% Complete</Text>
              <Text className='text-white'>Almost ready for bedtime! 🌙</Text>
            </View>
          </View>
          <View className='items-center mt-2 mb-2'>
            <View style={{ width: scale(80), height: verticalScale(80) }}>
              <Image source={require("../../../assets/magic/almost.png")} style={{ width: "100%", height: "100%" }} />
            </View>
            <Text className='text-white font-interBold text-2xl text-center'>Almost There!</Text>
            <Text className='text-white font-interRegular text-xl text-center mt-1 mb-2'>Your magical story is taking shape ✨</Text>
          </View>

          <TouchableOpacity style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }} className='p-3 rounded-lg gap-4 mt-2 mb-4' onPress={() => navigation.navigate("View Libray" as never )}>
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

        <TouchableOpacity className='bg-[#fff] border items-center mt-2 mb-4 p-4 rounded-lg border-gray-400' onPress={() => navigation.navigate("create story 1" as never)}>
          <Text className='text-black font-interMedium '>Cancel Creation</Text>
        </TouchableOpacity>
      </SafeAreaView>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  shimmerContainer: {

    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden'
  },
  shimmer: {
    flex: 1,
    borderRadius: 4,

  },
  gradient: {
    flex: 1,
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default GeneratingPage