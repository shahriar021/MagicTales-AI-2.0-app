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
    setLength,
    setInfo
} = storyPromptSlice.actions;

export default storyPromptSlice.reducer;
