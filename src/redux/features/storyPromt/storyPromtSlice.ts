import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hero: {
        child_name: null,
        age: null,
        pronouns: null,
        favorite_animal: null,
        favorite_color: null,
    },
    theme: null,
    art_style: null,
    language: null,
    voice:null,
    length: null,
    info:null,
};

const storyPromptSlice = createSlice({
    name: "storyPrompt",
    initialState,
    reducers: {
       
        setHeroDetails: (state, action) => {
            state.hero = action.payload;
        },
        
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        
        setArtStyle: (state, action) => {
            state.art_style = action.payload;
        },
       
        setLanguage: (state, action) => {
            state.language = action.payload;
        },

        setVoice:(state,action)=>{
            state.voice = action.payload
        },
        
        setLength: (state, action) => {
            state.length = action.payload;
        },
        setInfo:(state,action)=>{
            state.info=action.payload
        }
    },
});

export const {
    setHeroDetails,
    setTheme,
    setArtStyle,
    setLanguage,
    setVoice,
    setLength,
    setInfo
} = storyPromptSlice.actions;

export default storyPromptSlice.reducer;
