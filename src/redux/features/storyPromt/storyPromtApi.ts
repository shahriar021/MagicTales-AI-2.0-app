import { baseApi } from "src/redux/createdApi/baseApi";


const storyPromptApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createStory: builder.mutation({

            query: ({ info, token }) => {
                return {
                    url: "/api/ai/stories/",
                    method: "POST",
                    body: info,
                    headers: {
                        Authorization: `Bearer ${token}`
                    },

                }
            }
        }),

        generatedStory: builder.mutation({

            query: (token) => {
                return {
                    url: "/api/ai/stories/latest/",
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            }
        }),

        libraryList:builder.query({

            query:(token)=>{
                return {
                    
                    url:"/api/ai/stories/",
                    method:"GET",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            }
        })
    })


})

export const { useCreateStoryMutation, useGeneratedStoryMutation,useLibraryListQuery } = storyPromptApi;