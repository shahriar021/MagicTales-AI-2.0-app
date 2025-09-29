import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./createdApi/baseApi";
import authReducer from "./features/auth/authSlice";
import pickerReducer from "./features/picker/pickerSlice";
import storyPromtReducer from "./features/storyPromt/storyPromtSlice"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import { combineReducers } from "redux";

const authPersistConfig = {
  key: "dormitory-auth",
  storage: AsyncStorage,
};

const notificationPersistConfig = {
  key: "dormitory-notification",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  picker: pickerReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  storyPromt:storyPromtReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      
      serializableCheck: false,
    }).concat(
      baseApi.middleware,
    ),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
