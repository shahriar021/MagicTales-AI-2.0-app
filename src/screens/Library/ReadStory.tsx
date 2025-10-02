import { View, Text, TouchableOpacity, ScrollView, Image, useWindowDimensions, Dimensions } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { verticalScale } from 'react-native-size-matters';
import Slider from '@react-native-community/slider';
import MakeChoiceModal from './MakeChoiceModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sound from 'react-native-sound';
import { useAppSelector } from 'src/redux/hooks';

const { width: screenWidth } = Dimensions.get('window');

const ReadStory = () => {
    const { width } = useWindowDimensions()
    const navigation = useNavigation();
    const [showModal,setShowModal]=useState(false);
    const allInfo=useAppSelector((state)=>state.storyPromt.info)
      console.log(allInfo?.audio_url,"all info")

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
                <TouchableOpacity className='flex-row gap-2 items-center bg-[#F3E8FF] rounded-full justify-center' onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left-circle" size={24} color="#9333EA" />

                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity>
                    <Text className='text-[#7E22CE] font-interMedium'>Emotion Mode</Text>
                </TouchableOpacity>
            )

        })
    }, [navigation])

    const handleModal=()=>{
        setShowModal(true);
    }

    const [sound, setSound] = useState(null);
     const scrollViewRef = useRef(null);
    
      // Function to load and play the MP3 file
      const playAudio = () => {
        const audio = new Sound(`${allInfo?.audio_url}`, null, (error) => {
          if (error) {
            console.log('Failed to load the sound:', error);
            return;
          }
          // Play the sound once it has loaded
          audio.play((success) => {
            if (success) {
              console.log('Successfully finished playing');
            } else {
              console.log('Playback failed due to audio decoding errors');
            }
          });
        });
    
        setSound(audio);
        if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 1000, animated: true }); // Adjust `y` to scroll down
    }
      };
    
      // Function to stop the audio
      const stopAudio = () => {
        if (sound) {
          sound.stop(() => {
            console.log('Audio stopped');
          });
        }
      };
    

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className='flex-row justify-between p-2'>
                <TouchableOpacity className='flex-row gap-2 items-center bg-[#F3E8FF] rounded-full justify-center' onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left-circle" size={24} color="#9333EA" />

                </TouchableOpacity>
            
            
                <TouchableOpacity>
                    <Text className='text-[#7E22CE] font-interMedium'>Emotion Mode</Text>
                </TouchableOpacity>
            </View>

            <View className='flex-1'>
                <View style={{ height: verticalScale(280) }} className='items-center justify-center'>
                    <Image source={{uri:`${allInfo?.image_url}`}} style={{ width: "100%", height: "100%" }} />
                </View>

                <View className='p-3'>
                    <View className='flex-row   gap-3'>
                        <View className='w-[56px] h-[56px] bg-[#667EEA] rounded-full items-center justify-center'><TouchableOpacity onPress={playAudio}><FontAwesome name="play" size={24} color="white" /></TouchableOpacity></View>
                        <View className='flex-row items-center gap-2 flex-1'>
                            <Feather name="volume-1" size={24} color="black" />
                            <View className='flex-1'>
                                <Slider
                                    style={{ width: "100%", height: 40 }}
                                    minimumValue={0}
                                    maximumValue={1}
                                    minimumTrackTintColor="#0075FF"
                                    maximumTrackTintColor="#B7B5B5"
                                />
                            </View>
                            <Feather name="volume-2" size={24} color="black" />
                        </View>
                    </View>

                    <View className='flex-row mt-2 mb-2 items-center justify-between'>
                        <Text className='text-[#9333EA] font-interMedium'>2.23</Text>
                        <Text className='text-[#9333EA] font-interMedium'>5.23</Text>
                    </View>
                    <Slider
                        style={{ width: "100%", height: 40 }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#0075FF"
                        maximumTrackTintColor="#B7B5B5"
                    />
                    <ScrollView ref={scrollViewRef} contentContainerStyle={{paddingBottom:550}}> <Text className='text-[#1F2937] mt-2 mb-2 text-xl'>{allInfo?.text}</Text></ScrollView>
                   
                </View>
            </View>
            <View className='flex-row justify-between p-3  px-5 mx-5 gap-4 bg-white' >
                <TouchableOpacity className='border border-[#E9D5FF] p-4 rounded-lg items-center flex-1 justify-center'><Text className='text-[#7E22CE]'>Back</Text></TouchableOpacity>
                <TouchableOpacity className='border border-[#E9D5FF] p-4 rounded-lg items-center bg-[#667EEA] flex-1 justify-center' onPress={handleModal}><Text className='text-white'>Make a Choice</Text></TouchableOpacity>
                <TouchableOpacity className='border border-[#E9D5FF] p-4 rounded-lg items-center flex-1 justify-center' onPress={()=>navigation.navigate("Story Complete View")}><Text className='text-[#7E22CE]'>Next</Text></TouchableOpacity>
            </View>
            <MakeChoiceModal visible={showModal} onClose={()=>setShowModal(false)}/>
        </SafeAreaView>
    )
}

export default ReadStory