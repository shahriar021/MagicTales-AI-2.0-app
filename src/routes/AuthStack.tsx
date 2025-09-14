import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import OTPScreen from "src/screens/Auth/OTPScreen";
import ForgetPassword from 'src/screens/Auth/ForgetPassword';
import LoginOTPScreen from 'src/screens/Auth/LoginOTPScreen';
import ResetPassword from 'src/screens/Auth/ResetPasswrod';
import VerificationPage from 'src/screens/Auth/SuccessPage';
import OnBoarding from 'src/screens/Auth/OnBoarding';
import LoginScreen from 'src/screens/Auth/LoginScreen';
import SignUpUser from 'src/screens/Auth/SignUp';
import SuccessPage from 'src/screens/Auth/SuccessPage';
import SignUpRider from 'src/screens/Auth/SignUpRider';
import StartPage1 from 'src/screens/Auth/StartPage1';
import StartPage2 from 'src/screens/Auth/StartPage2';
import StartPage3 from 'src/screens/Auth/StartPage3';
import ConfirmPlan from 'src/screens/Billing/ConfirmPlan';
import ChoosePlan from 'src/screens/Billing/ChoosePlan';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen options={{ headerShown: false }} name="Login Screen" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Sign Up" component={SignUpUser} />
      <Stack.Screen options={{ headerShown: false }} name="Forget Password" component={ForgetPassword} />
      <Stack.Screen options={{ headerShown: true }} name="Login OTP" component={LoginOTPScreen} />
      <Stack.Screen options={{ headerShown: true }} name="Reset Password" component={ResetPassword} />
      <Stack.Screen options={{ headerShown: false }} name="Success page" component={SuccessPage} />
      <Stack.Screen options={{ headerShown: true }} name="OTP Screen" component={OTPScreen} />
      <Stack.Screen options={{ headerShown: true }} name="Verification Page" component={VerificationPage} />


      <Stack.Screen options={{ headerShown: false }} name="Start Page 1" component={StartPage1} />
      <Stack.Screen options={{ headerShown: false }} name="Start Page 2" component={StartPage2} />
      <Stack.Screen options={{ headerShown: false }} name="Start Page 3" component={StartPage3} />
      <Stack.Screen options={{ headerShown: false }} name="Choose Plan" component={ChoosePlan} />
      <Stack.Screen options={{ headerShown: false }} name="Confirm Plan" component={ConfirmPlan} />
    </Stack.Navigator>
  );
};

export default AuthStack;
