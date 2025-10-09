import { baseApi } from "src/redux/createdApi/baseApi";

const storyCompletetionApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        saveToLibrary:builder.mutation({

            query:({storyId,token})=>{
                return{
                    url:`/api/ai/stories/${storyId}/save-to-library/`,
                    method:"POST",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            }
        })
    })
})

export const {useSaveToLibraryMutation}=storyCompletetionApi