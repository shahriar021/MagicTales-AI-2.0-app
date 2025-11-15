import { Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import StackNavigation from "src/routes/StackNavigation";
import AuthStack from "src/routes/AuthStack";
import { useFonts } from "expo-font";
import { useAppSelector } from "src/redux/hooks";
import SplashScreen from "../ui/splashScreen/SplashScreen";

const MainLayout = () => {
  
  const token = useAppSelector((state) => state.auth.token);
  console.log(token,"token..")
  // const token = 0;
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const [fontsLoaded] = useFonts({
    
    'inter-bold': require("../../../assets/fonts/Inter_18pt-Bold.ttf"),
    'inter-semiBold': require("../../../assets/fonts/Inter_18pt-SemiBold.ttf"),
    'inter-regular': require("../../../assets/fonts/Inter_18pt-Regular.ttf"),
    'inter-medium': require("../../../assets/fonts/Inter_18pt-Medium.ttf"),
    'poppins': require("../../../assets/fonts/Poppins-Bold.ttf"),
    'fredoka-regular':require("../../../assets/fonts/Fredoka-Regular.ttf")
  });


  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Wait for BOTH fonts and splash timer
  const isAppReady = fontsLoaded && !isSplashVisible;

  if (!isAppReady) {
    return <SplashScreen />;
  }

  // const oldRender = Text.render;
  // Text.render = function (...args) {
  //   const origin = oldRender.call(this, ...args);

  //   // if icon font already set, don't override
  //   const style = Array.isArray(origin.props.style) ? origin.props.style : [origin.props.style];
  //   const hasCustomFont = style.some((s) => s && s.fontFamily);

  //   return React.cloneElement(origin, {
  //     style: hasCustomFont
  //       ? origin.props.style // keep icon font
  //       : [origin.props.style, { fontFamily: "HelveticaNeue-Black" }],
  //   });
  // };


  return (
      <View style={{ flex: 1 }}>
        <StatusBar style="light" />
        {token ? (
          <StackNavigation />
        ) : (
          <AuthStack />
        )}
      </View>
  );
};

export default MainLayout;
