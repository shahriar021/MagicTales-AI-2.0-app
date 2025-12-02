import { View, Text, TouchableOpacity, ScrollView, Image, useWindowDimensions, Dimensions } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {  useRoute,RouteProp } from '@react-navigation/native';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { verticalScale } from 'react-native-size-matters';
import Slider from '@react-native-community/slider';
import MakeChoiceModal from './MakeChoiceModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sound from 'react-native-sound';
import { useAppSelector } from 'src/redux/hooks';
import { useGetSpecificStoryQuery } from 'src/redux/features/storyPromt/storyPromtApi';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/types/navigationPage';

const { width: screenWidth } = Dimensions.get('window');

type Props={
  navigation:StackNavigationProp<RootStackParamList,"Read Story">
}
type ReadStoryRouteProp = RouteProp<RootStackParamList, "Read Story">;

const ReadStory = ({navigation}:Props) => {
    const route=useRoute<ReadStoryRouteProp>();
    const {id}=route.params || {}
    const { width } = useWindowDimensions()
    const [showModal, setShowModal] = useState(false);
    const allInfo = useAppSelector((state) => state.storyPromt.info)
    const [volume, setVolume] = useState(0.5);
    const [playNpause, setPlayNpause] = useState(false)
    const [currentTime, setCurrentTime] = useState(0);
    const [sound, setSound] = useState<string | null>(null);
    const [mkeCoice, setMakeCoice] = useState();
    const [stId, setStId] = useState(null);
    const [data,setData]=useState()
    const scrollViewRef = useRef(null);
    let audio = null;
    
    const token=useAppSelector((state)=>state.auth.token)
    const {data:getSpecStory}=useGetSpecificStoryQuery({token,sid:stId})

    useEffect(()=>{
        if(mkeCoice){
            setStId(mkeCoice)
        }else if(id){
            setStId(id)
        }else{
            setStId(null)
        }
    },[id,mkeCoice])

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

    const handleModal = () => {
        setShowModal(true);
        setData(stId)
    }



    const playAudio = () => {
        const audio = new Sound(`${allInfo?.audio_url?allInfo?.audio_url:getSpecStory?.data?.audio_url}`, null, (error) => {
            if (error) {
                // console.log('Failed to load the sound:', error);
                return;
            }
            audio.setVolume(volume);
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
            scrollViewRef.current.scrollTo({ y: 1000, animated: true });
        }
    };

    const stopAudio = () => {
        if (sound) {
            sound.stop(() => {
                // console.log('Audio stopped');
            });
        }
    };

    const handleVolume = (value) => {
        setVolume(value);
        if (sound) {
            sound.setVolume(value);
        }
    };

    useEffect(() => {
        if (playNpause) {
            playAudio()
        } else {
            stopAudio()
        }
    }, [playNpause])

    useEffect(() => {
        if (sound) {
            const interval = setInterval(() => {
                sound.getCurrentTime((seconds) => {
                    // You can calculate which part of the story should be shown based on the audio time
                    const sectionIndex = Math.floor(seconds / 10); // Example: scroll every 10 seconds of audio
                    if (scrollViewRef.current) {
                        scrollViewRef.current.scrollTo({ y: sectionIndex * 100, animated: true });
                    }
                });
            }, 1000); // Check every second

            return () => clearInterval(interval); // Cleanup interval when component unmounts
        }
    }, [sound]);

    useEffect(() => {
        if (sound) {
            const interval = setInterval(() => {
                sound.getCurrentTime((seconds) => {
                    setCurrentTime(seconds);
                    scrollToSection(seconds); // Scroll as per audio time
                });
            }, 1000); // Update every second

            return () => clearInterval(interval); // Cleanup interval on component unmount
        }
    }, [sound]);

    const scrollToSection = (audioTimeInSeconds) => {
        // Logic to determine scroll position based on time
        const sectionIndex = Math.floor(audioTimeInSeconds / 10); // Scroll every 10 seconds
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: sectionIndex * 100, animated: true });
        }
    };

    const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60); // Get the minutes
    const seconds = Math.floor(timeInSeconds % 60); // Get the remaining seconds

    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`; // Add leading zero if seconds are less than 10
};


    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className='flex-row justify-between p-2'>
                <TouchableOpacity className='flex-row gap-2 items-center bg-[#F3E8FF] rounded-full justify-center' onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left-circle" size={34} color="#9333EA" />

                </TouchableOpacity>


                
            </View>
            <ScrollView>

            <View className='flex-1'>
                <View style={{ height: verticalScale(280) }} className='items-center justify-center'>
                    {getSpecStory?.data?.image_url?<Image source={{ uri: `${getSpecStory?.data?.image_url}` }} style={{ width: "100%", height: "100%" }} />:<Image source={{ uri: `${allInfo?.image_url}` }} style={{ width: "100%", height: "100%" }} />}
                </View>

                <View className='p-3'>
                    <View className='flex-row   gap-3'>
                        <View className='w-[56px] h-[56px] bg-[#667EEA] rounded-full items-center justify-center overflow-hidden'>
                            <TouchableOpacity className='flex-1 bg-[#667EEA] w-full h-full items-center justify-center' onPress={() => setPlayNpause(!playNpause)}>{!playNpause ? <FontAwesome name="play" size={24} color="white" /> : <MaterialIcons name="pause-circle" size={24} color="white" />}</TouchableOpacity>
                        </View>
                        <View className='flex-row items-center gap-2 flex-1'>
                            <Feather name="volume-1" size={24} color="black" />
                            <View className='flex-1'>
                                <Slider
                                    style={{ width: "100%", height: 40 }}
                                    minimumValue={0}
                                    maximumValue={1}
                                    value={volume}
                                    minimumTrackTintColor="#0075FF"
                                    maximumTrackTintColor="#B7B5B5"
                                    onValueChange={handleVolume}
                                />
                            </View>
                            <Feather name="volume-2" size={24} color="black" />
                        </View>
                    </View>

                    <View className='flex-row mt-2 mb-2 items-center justify-between'>
                        <Text className='text-[#9333EA] font-interMedium'>{formatTime(Math.floor(currentTime))}</Text>
                        <Text className='text-[#9333EA] font-interMedium'>5.23</Text>
                    </View>
                    <Slider
                        style={{ width: "100%", height: 40 }}
                        minimumValue={0}
                        maximumValue={100}
                        value={(currentTime)}
                        minimumTrackTintColor="#0075FF"
                        maximumTrackTintColor="#B7B5B5"
                    />
                    <ScrollView ref={scrollViewRef} contentContainerStyle={{ paddingBottom: 550 }}> <Text className='text-[#1F2937] mt-2 mb-2 text-xl'>{allInfo?.text?allInfo?.text:getSpecStory?.data?.text}</Text></ScrollView>

                </View>
            </View>
            <View className='flex-row justify-between p-3  px-5 mx-5 gap-4 bg-white' >
                <TouchableOpacity className='border border-[#E9D5FF] p-4 rounded-lg items-center flex-1 justify-center'><Text className='text-[#7E22CE]'>Back</Text></TouchableOpacity>
                <TouchableOpacity className='border border-[#E9D5FF] p-4 rounded-lg items-center bg-[#667EEA] flex-1 justify-center' onPress={handleModal}><Text className='text-white'>Make a Choice</Text></TouchableOpacity>
                <TouchableOpacity className='border border-[#E9D5FF] p-4 rounded-lg items-center flex-1 justify-center' onPress={() => navigation.navigate("Story Complete View",{info:allInfo?.text?allInfo?.text:getSpecStory?.data?.text})}><Text className='text-[#7E22CE]'>Next</Text></TouchableOpacity>
            </View>
            </ScrollView>
            <MakeChoiceModal visible={showModal} onClose={() => setShowModal(false)} data={data} setMakeCoice={setMakeCoice}/>
        </SafeAreaView>
    )
}

export default ReadStory  