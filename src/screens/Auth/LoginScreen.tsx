import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { scale, verticalScale } from "react-native-size-matters"
import { useDispatch } from "react-redux"
import { useLoginMutation } from "src/redux/features/auth/authApi"
import { setToken } from "src/redux/features/auth/authSlice";


const LoginScreen = () => {
    const [loginData] = useLoginMutation()
    const navigation = useNavigation()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const dispatch = useDispatch();

    const validateEmail = (email: any) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleLogin = async () => {


        if (!email.trim()) {
            Alert.alert("Error", "Please enter your email address");
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert("Error", "Please enter a valid email address");
            return;
        }

        if (!password.trim()) {
            Alert.alert("Error", "Please enter your password");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Error", "Password must be at least 6 characters long");
            return;
        }
        const info = {
            email,
            password
        }
        try {
            const res = await loginData(info).unwrap()
            if (res?.success == true) {
                Alert.alert("Login Successfull!")
                dispatch(setToken(res?.data?.access))
            } else {
                Alert.alert("Something went wrong!")
            }
        } catch (err: any) {
            Alert.alert(err?.data?.message)
        }
    };

    return (
        <LinearGradient
            colors={['#E9D5FF', '#FFFFFF']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
        >
            <SafeAreaView className="flex-1  items-center " >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                    <View className="w-full   items-center mt-5">
                        <View style={{ width: scale(50), height: verticalScale(50) }}>
                            <Image source={require("../../../assets/magic/siginIcon.png")} style={{ width: "100%", height: "100%" }} resizeMode="contain" />
                        </View>
                    </View>
                    <View className="w-full  items-center">
                        <Text className="text-center font-interBold text-4xl">Welcome Back</Text>
                        <Text className="text-center font-interRegular text-xl text-[#4B5563]">Continue your magical storytelling journey</Text>
                    </View>

                    <View className="mt-4 w-full p-3" >
                        <Text className="font-interMedium text-[#374151]">Email</Text>
                        <View className="flex-row justify-between items-center mt-2 mb-2 border-2 p-3 rounded-2xl border-[#E9D5FF] bg-white">
                            <TextInput placeholder="Enter your email" placeholderTextColor={"#ADAEBC"} onChangeText={(text) => setEmail(text)} value={email} style={{
                                flex: 1, paddingVertical: 8, // Add padding if needed
                                paddingLeft: 12, // Add padding to prevent placeholder from being cut off
                                color: '#000',
                            }} />
                            <Image source={require("../../../assets/magic/svg.png")} />
                        </View>
                        <Text className="font-interMedium text-[#374151]">Password</Text>
                        <View className="flex-row justify-between items-center mt-2 mb-2 border-2 p-3 rounded-2xl border-[#E9D5FF] bg-white">
                            <TextInput placeholder="Enter your password" placeholderTextColor={"#ADAEBC"} onChangeText={(text) => setPassword(text)} value={password} style={{ flex: 1, paddingVertical: 8, paddingLeft: 12, color: "#000" }} secureTextEntry={!isPasswordVisible} />
                            <TouchableOpacity onPress={togglePasswordVisibility} style={{ paddingLeft: 10 }}>
                                <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#8B5CF6" />
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity onPress={() => navigation.navigate("Forget Password")}>
                            <Text className="text-right text-[#8B5CF6]">Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="mt-5 mb-2  w-full items-center overflow-hidden rounded-2xl" onPress={handleLogin}>
                            <LinearGradient colors={["#9333EA", "#EC4899"]} start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }} style={{ width: "100%", padding: 15 }} className="w-full items-center p-3">
                                <Text className="text-white text-lg font-interSemiBold text-center">Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <View className="mt-2 relative">
                            <View className="w-full border border-[#E9D5FF]  absolute top-3" />
                            <Text className="text-center relative">or continue with</Text>
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
                        <Text className="font-interMedium text-base">Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
                            <Text className="text-[#8B5CF6] font-interSemiBold text-base">Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default LoginScreen