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
            },
            providesTags:['profile']
        }),

        updateProfile:builder.mutation({

            query:({formData,token})=>{
                console.log(formData,token,"in redux.")
                return{
                    url:"/api/auth/profile/",
                    method:"PUT",
                    headers:{
                        Authorization:`Bearer ${token}`
                    },
                    body:formData
                }
            },
            invalidatesTags:['profile']
        })
    })
})

export const { useGetProfileQuery,useUpdateProfileMutation } = profileApi;