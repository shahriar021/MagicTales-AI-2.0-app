import { baseApi } from "src/redux/createdApi/baseApi";

const profileApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({

            query: (token) => {
                return {
                    url: "/api/auth/profile/",
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            }
        }),

        updateProfile:builder.mutation({

            query:(token)=>{
                return{
                    url:"/api/auth/profile/",
                    method:"PUT",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            }
        })
    })
})

export const { useGetProfileQuery,useUpdateProfileMutation } = profileApi;