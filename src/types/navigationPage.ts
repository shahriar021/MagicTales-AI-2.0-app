import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabParamList = {
  Home: undefined;
  Library: undefined;
  Profile: undefined;
};


export type RootStackParamList = {
    Home:undefined,
    "create story 1":undefined,
    "create story 2":undefined,
    "create story 3":undefined,
    "create story 4":undefined,
    "create story 5":undefined,
    "create story 6":undefined,
    "Generate":undefined,
    "View Libray":undefined,
    "Read Story": { id?: string } | undefined,
    "Story Complete View":{info:string},
    BottomScreen: NavigatorScreenParams<BottomTabParamList>;
}