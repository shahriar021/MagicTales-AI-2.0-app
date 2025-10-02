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
        }),

        forgetPass:builder.mutation({
            query:(info)=>{
                console.log(info,"in redux.")
                return {
                    url:"/api/auth/password-reset/",
                    method:"POST",
                    body:info
                }
            }
        }),

        signUpGoogle:builder.mutation({
            query:()=>{
                console.log("hit")
                return {
                    url:"/api/auth/google/",
                    method:"POST"
                }
            }
        })
    })
})

export const { useLoginMutation,useSignUpMutation,useForgetPassMutation,useSignUpGoogleMutation } = authApi