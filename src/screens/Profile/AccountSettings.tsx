import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import ProfileEditModal from './ProfileEditModal'

const AccountSettings = () => {
    const [islangMode, setIsLanMode] = useState(false);
    const [firstName,setFirstName]=useState('');
    const [modal,setModal]=useState(false)
    const [istitle,setTile]=useState("")
    const navigation = useNavigation()

    const handleEdit=(title:any)=>{
        console.log(title)
        setTile(title)
        setModal(true)
    }
    return (
        <LinearGradient colors={["#FFF3E4", "#E4F0FF"]} style={{ flex: 1 }}>
            <SafeAreaView className="flex-1 p-3">

                <View className='flex-row items-center justify-between w-full mt-2 mb-5'>
                    <TouchableOpacity className='bg-white w-[40] h-[40] overflow-hidden rounded-full items-center justify-center' onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className='font-interSemiBold text-lg flex-1 text-center'>Account Settings</Text>
                    <View className='w-[40] h-[40]' /> 
                </View>


                <ScrollView>

                    <View className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" >
                        <View className="flex-row items-center gap-2">

                            <View style={{ width: 56, height: 56 }} className="rounded-full n relative">
                                <Image source={require("../../../assets/magic/shahriar.jpeg")} style={{ width: 56, height: 56,borderRadius:10 }} />
                                <TouchableOpacity className='absolute p-2 bg-[#3B82F6] rounded-full -right-3 -bottom-3 z-10 overflow-visible'><Fontisto name="camera" size={18} color="white" /></TouchableOpacity>
                            </View>
                            
                            <View>
                                <Text className="text-[#1F2937] font-interMedium text-lg">Account Settings</Text>
                                <Text className="text-sm text-[#6B7280]">Manage your profile</Text>
                            </View>
                        </View>
                       
                    </View>

                    <View className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" >
                        <View className="flex-row items-center gap-2">

                            <View>
                                <Text className="text-[#1F2937] font-interMedium text-lg">Full Name</Text>
                                <Text className="text-sm text-[#6B7280]">shahriar chowdhury</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>handleEdit("Full Name")}>
                            <Text className='text-[#2563EB] bg-[#EFF6FF] p-3 rounded-lg'>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" >
                        <View className="flex-row items-center gap-2"> 

                            <View>
                                <Text className="text-[#1F2937] font-interMedium text-lg">Email Address</Text>
                                <Text className="text-sm text-[#6B7280]">sarah.johnson@email.com</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Text className='text-[#2563EB] bg-[#EFF6FF] p-3 rounded-lg'>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" >
                        <View className="flex-row items-center gap-2">

                            <View>
                                <Text className="text-[#1F2937] font-interMedium text-lg">Password</Text>
                                <Text className="text-sm text-[#6B7280]">* * * * * * </Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Text className='text-[#2563EB] bg-[#EFF6FF] p-3 rounded-lg'>Change</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" >
                        <View className="flex-row items-center gap-2">

                            <View>
                                <Text className="text-[#1F2937] font-interMedium text-lg">Phone Number</Text>
                                <Text className="text-sm text-[#6B7280]">0168526562</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Text className='text-[#2563EB] bg-[#EFF6FF] p-3 rounded-lg'>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row items-center justify-between mt-2 mb-2 bg-[#fff] p-3 rounded-xl" >
                        <View className="flex-row items-center gap-2">

                            <View>
                                <Text className="text-[#1F2937] font-interMedium text-lg">Push Notifications</Text>
                                <Text className="text-sm text-[#6B7280]">Receive story updates and reminders</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => setIsLanMode(!islangMode)}>
                            {islangMode ? <MaterialCommunityIcons name="toggle-switch" size={44} color="#3B82F6" /> : <MaterialCommunityIcons name="toggle-switch-off" size={44} color="#3B82F6" />}
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <View className='w-full'>
                    <TouchableOpacity className='bg-[#2563EB] items-center p-4 rounded-lg'>
                        <Text className='font-interSemiBold text-white'>Save Changes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='items-center p-4 '>
                        <Text className='text-[#EF4444] font-interMedium'>Delete Account</Text>
                    </TouchableOpacity>
                </View>
                <ProfileEditModal visible={modal} onClose={()=>setModal(false)} Title={istitle}/>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default AccountSettings