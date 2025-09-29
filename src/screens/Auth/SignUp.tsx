import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import React, { useLayoutEffect, useState } from "react"
import { Image, ScrollView, Text, TextInput, TextInputBase, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { scale, verticalScale } from "react-native-size-matters"
import { useSignUpMutation } from "src/redux/features/auth/authApi"
export const selectedCountry = {
    flag: require('../../../assets/e-icon/bdFlag.jpg'),
    dialCode: '+880',
};

const SignUpUser = () => {
    const [signupData]=useSignUpMutation();

    const navigation = useNavigation()

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const handleSignUp=async()=>{
        const info={
            userName,
            email,
            password
        }
        console.log(info)
        try{
            const res = await signupData(info).unwrap()
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <LinearGradient
            colors={['#E9D5FF', '#FFFFFF']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
        >
            <SafeAreaView className="flex-1  items-center">
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                    <View className="w-full px-20 items-center">
                        <View style={{ width: scale(50), height: verticalScale(50) }}>
                            <Image source={require("../../../assets/magic/signup.png")} style={{ width: "100%", height: "100%" }} resizeMode="contain" />
                        </View>
                    </View>
                    <View className="w-full  items-center">
                        <Text className="text-center font-interBold text-4xl">Create your account</Text>
                        <Text className="text-center font-interRegular text-xl text-[#4B5563]">Start your 14‑day free trial. Cancel anytime.</Text>
                    </View>

                    <View className="mt-4 w-full p-5">

                        <View className="flex-row justify-between items-center mt-2 mb-2 border-2 p-3 rounded-2xl border-[#E9D5FF] bg-white">
                            <TextInput placeholder="Full Name" placeholderTextColor={"#ADAEBC"} style={{flex:1}} onChangeText={setUserName}/>
                        </View>

                        <View className="flex-row justify-between items-center mt-2 mb-2 border-2 p-3 rounded-2xl border-[#E9D5FF] bg-white">
                            <TextInput placeholder="Email" placeholderTextColor={"#ADAEBC"} style={{flex:1}} onChangeText={setEmail}/>
                        </View>

                        <View className="flex-row justify-between items-center mt-2 mb-2 border-2 p-3 rounded-2xl border-[#E9D5FF] bg-white">
                            <TextInput placeholder="Password" placeholderTextColor={"#ADAEBC"} style={{flex:1}} onChangeText={setPassword}/>
                            <Image source={require("../../../assets/magic/i.png")} />
                        </View>

                        <View className="flex-row w-[90%] items-center mt-2 mb-2">
                            <TouchableOpacity>
                                <MaterialIcons name="check-box-outline-blank" size={24} color="#D1D5DB" />
                            </TouchableOpacity>
                            <Text className="text-center">I confirm I am 13+ or have a parent/guardian's consent, and I agree to the <Text className="text-[#9333EA]">Terms</Text> and <Text className="text-[#9333EA]">Privacy Policy</Text> .</Text>
                        </View>

                        <TouchableOpacity className="mt-5 mb-2  w-full items-center overflow-hidden rounded-2xl" onPress={handleSignUp}>
                            <LinearGradient colors={["#9333EA", "#EC4899"]} start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }} style={{ width: "100%", padding: 15 }} className="w-full items-center p-3">
                                <Text className="text-white text-lg font-interSemiBold text-center">Create Account</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <Text className="text-[#6B7280] text-center mt-2 mb-2">You won't be charged until your free trial ends on Jan 28, 2025
                        </Text>

                        <View className="mt-2 relative">
                            <View className="w-full border border-[#E9D5FF]  absolute top-3" />
                            <Text className="text-center relative text-[#6B7280]">or continue with</Text>
                        </View>

                        <View className="flex-row justify-center gap-2 items-center mt-2 mb-2 border-2 p-3 rounded-2xl border-[#E9D5FF] bg-[#E5E7EB]">
                            <Image source={require("../../../assets/magic/apple.png")} />
                            <Text className="text-[#374151] font-interMedium text-base">Continue with Apple</Text>
                        </View>
                        <View className="flex-row justify-center gap-2 items-center mt-2 mb-2 border-2 p-3 rounded-2xl border-[#E9D5FF] bg-[#E5E7EB]">
                            <Image source={require("../../../assets/magic/google.png")} />
                            <Text className="text-[#374151] font-interMedium text-base">Continue with Google</Text>
                        </View>


                    </View>

                    <View className="flex-row items-end mb-5  gap-2  flex-1 justify-center ">
                        <Text className="font-interMedium text-base">Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login Screen")}>
                            <Text className="text-[#8B5CF6] font-interSemiBold text-base">Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default SignUpUser