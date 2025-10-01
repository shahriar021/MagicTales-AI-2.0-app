import { baseApi } from "src/redux/createdApi/baseApi";


const storyPromptApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        createStory:builder.mutation({

            query:({info,token})=>{
                console.log(info,token,"in redux.")
                return{
                    url:"/api/ai/stories/",
                    method:"POST",
                    body:info,
                    headers:{
                        Authorization:`Bearer ${token}`
                    },

                }
            }
        }),

        generatedStory:builder.mutation({
            
            query:(token)=>{
                return {
                    url:"/api/ai/stories/latest/",
                    method:"GET",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            }
    })
    })

    
})

export const {useCreateStoryMutation,useGeneratedStoryMutation}=storyPromptApi;