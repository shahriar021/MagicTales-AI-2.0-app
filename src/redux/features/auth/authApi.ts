import { baseApi } from "src/redux/createdApi/baseApi"

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (loginData) => {
                
                return {
                    url: "/api/auth/login/",
                    method: "POST",
                    body: loginData
                }
                
            }
        }),

        signUp: builder.mutation({
            query: (signData) => {
                console.log(signData,"sign data.")
                return {
                    url: "/api/auth/signup/",
                    method: "POST",
                    body: signData
                }
                
            }
        })
    })
})

export const { useLoginMutation,useSignUpMutation } = authApi