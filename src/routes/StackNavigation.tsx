import React, { useRef, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigation } from "./BottomNavigation";
import { 
  Profile,
} from "src/screens";

import { ProviderBottomNavigation } from "./ProviderBottomNavigation";
import { ActivityIndicator } from "react-native";
import { useAppSelector } from "src/redux/hooks";
import CreateStory1 from "src/screens/CreateStory/CreateStory1";
import CreateStory2 from "src/screens/CreateStory/CreateStory2";
import CreateStory3 from "src/screens/CreateStory/CreateStory3";
import CreateStory4 from "src/screens/CreateStory/CreateStory4";
import CreateStory5 from "src/screens/CreateStory/CreateStory5";
import CreateStory6 from "src/screens/CreateStory/CreateStory6";
import AccountSettings from "src/screens/Profile/AccountSettings";
import HelpAndSupport from "src/screens/Profile/HelpAndSupport";
import Language from "src/screens/Profile/Language";
import Subscription from "src/screens/Profile/Subscription";
import Gallery from "src/screens/Gallery/Gallery";
import GeneratingPage from "src/screens/CreateStory/GeneratingPage";
import ViewStory from "src/screens/Library/ViewStory";
import ReadStory from "src/screens/Library/ReadStory";
import StoryCompleteView from "src/screens/Library/StoryCompleteView";
import ChoosePlan from "src/screens/Billing/ChoosePlan";
import { RootStackParamList } from "src/types/navigationPage";


const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  const userType = useAppSelector((store)=>store.auth.userType)
  


  if(!userType){
    <ActivityIndicator size="large"/>
  }

  return (
    
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "#fff",
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Black",
          },
          headerTintColor: "#006400",
          // headerRight: () => <NavRight routeName={routeNameRef.current} />,
        }}
      >
        {<Stack.Screen
          name="BottomScreen"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />}
        {/* <Stack.Screen name="Notification" component={} /> */}
        <Stack.Screen name="Profile" options={{headerShown:false}} component={Profile} />


        {/*  */}
        <Stack.Screen name="create story 1" options={{headerShown:true}} component={CreateStory1}/>
        <Stack.Screen name="create story 2" options={{headerShown:true}} component={CreateStory2}/>
        <Stack.Screen name="create story 3" options={{headerShown:true}} component={CreateStory3}/>
        <Stack.Screen name="create story 4" options={{headerShown:true}} component={CreateStory4}/>
        <Stack.Screen name="create story 5" options={{headerShown:true}} component={CreateStory5}/>
        <Stack.Screen name="create story 6" options={{headerShown:true}} component={CreateStory6}/>
        <Stack.Screen name="Generate" options={{headerShown:false}} component={GeneratingPage}/>



        <Stack.Screen name="Account Settings" options={{headerShown:false}} component={AccountSettings}/>
        <Stack.Screen name="Help & Support" options={{headerShown:false}} component={HelpAndSupport}/>
        <Stack.Screen name="Language" options={{headerShown:false}} component={Language}/>
        <Stack.Screen name="Subscriptions" options={{headerShown:false}} component={Subscription}/>
        <Stack.Screen name="Gallery" options={{headerShown:false}} component={Gallery}/>


        <Stack.Screen name="View Libray" options={{headerShown:true}} component={ViewStory}/>
        <Stack.Screen name="Read Story" options={{headerShown:false}} component={ReadStory}/>
        <Stack.Screen name="Story Complete View" options={{headerShown:true}} component={StoryCompleteView}/>


       
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigation;
