import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Alert,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Entypo, Feather, Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { setToken, setUser, setUserType } from "src/redux/features/auth/authSlice";
import { useLoginMutation } from "src/redux/features/auth/authApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import SignUpRider from "./SignUpRider";
import SignUpUser from "./SignUp";
import { scale, verticalScale } from "react-native-size-matters";

const OnBoarding = () => {
  const { height, width } = useWindowDimensions();
  const [isSignIn, setIsSignIn] = useState(true)
  const [isUser, setIsUser] = useState("user")
  const [roleOff, setRoleOff] = useState(true)
  const [postLogin] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation()

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '', // or any title you want
    });
  }, [navigation]);


  const handleLogin = async () => {
    // if (email !== "" && password !== "") {
    //   try {
    //     const output = { email, password };
    //     const result = await postLogin(output).unwrap();
    //     if (result?.status) {
    //       const { data } = result;
    //       dispatch(setUser({ user: data, Credential: output }));
    //     }
    //     if (!result?.status) {
    //       Alert.alert(result.message);
    //     }
    //   } catch (err: any) {
    //     Alert.alert("Something went wrong!", err);
    //   }
    // } else {
    //   Alert.alert("Please Enter a valid Email or password.");
    // }
    console.log(email, "email.")
    const normalizedEmail = email.trim().toLowerCase();
    const type = normalizedEmail === "user@gmail.com" ? "user" : "rider";
    console.log(type, "type")
    dispatch(setToken(true))
    dispatch(setUserType(type))
  };
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  const handleVerify = () => {
    navigation.navigate("VerifyEmail" as never)
  }


  return (

    <SafeAreaView className="flex-1 bg-[#121212] ">
      <ImageBackground
        source={require("../../../assets/magic/mainBG.png")}
        style={{ flex: 1, width: "100%", height: "100%" }}
        resizeMode="cover"
      >
        <View className="flex-1 items-center justify-end px-4 mb-5 p-3 ">
          {/* <View className="w-full bg-black items-center"> */}
          <View style={{ width: scale(350), height: verticalScale(150) }} >
            <Image source={require("../../../assets/magic/onBoards.png")} style={{ width: "100%", height: "100%" }} resizeMode="contain" />
          </View>
          {/* </View> */}
          <View className=" w-full items-center mt-5">
            <Text className="text-[#fff] font-interBold text-5xl  ">MagicTales AI</Text>
          </View>
          <View className=" w-full items-center mt-1">
            <Text className="text-[#fff] font-interSemiBold text-xl  text-center">Turn your child into the hero of their own story — in under 2 minutes.</Text>
          </View>


          <TouchableOpacity className="mt-20 mb-2  w-full items-center overflow-hidden rounded-lg" onPress={() => navigation.navigate("Start Page 1")}>
            <LinearGradient colors={["#EC4899", "#9333EA"]} start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }} style={{width:"100%",padding:15}} className="w-full items-center p-3">
              <Text className="text-white text-lg font-interSemiBold text-center">Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View className="w-full mt-2 rounded-lg overflow-hidden mb-2">

            <TouchableOpacity className="w-full items-center p-3 rounded-lg bg-transparent overflow-hidden" onPress={() => navigation.navigate("Login Screen")}>
              <Text className="text-white font-interMedium">Sign In</Text>
            </TouchableOpacity>

          </View>

          <View className="flex-row items-center justify-center gap-4 w-full">
            <TouchableOpacity>
              <Text className="text-white font-interRegular">Privacy Policy</Text>
            </TouchableOpacity>
            <Octicons name="dot-fill" size={24} color="white" />
            <TouchableOpacity>
              <Text className="text-white font-interRegular">Terms of Service</Text>
            </TouchableOpacity>
          </View>


        </View>
      </ImageBackground>
    </SafeAreaView>


  );
};

export default OnBoarding;
