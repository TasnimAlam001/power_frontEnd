
import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials'
// import AxiosCall from "./dashboard/components/AxiousCall/AxiosCall";


export const {auth,signIn, handlers:{GET,POST}} =NextAuth({
    providers:[
        Credentials({
            name: "credentials",
            // credentials: {
            //     email: {},
            //     password:{},
            // },
            async authorize(credential){
                // const {email, password} = this.credentials;
                
                // const res = await fetch("http://172.17.0.87:16999/api/web-app/login",{
                //     method: "POST",
                //     headers:{
                //         "Content-Type" : "application/json",
                //     },
                //     body: JSON.stringify({
                //             email,
                //             password
                //     })
                // });
                // console.log("reeeeeeeeeeeeeeesssssssssssss, :" ,res.json())

                // const user = await res.json();

                // if(res.ok && user){
                //     return user ;
                // }
                // else return null;
                const email = credential?.email;
                const password = credential?.password;
                console.log(credential?.email, credential?.password)

                // const data = await AxiosCall(
                //     "/login",
                //     email,
                //     password,
                //   );
                // console.log("from auth page", data);


                const user = {id : 100, email2: "super@gmail.com", password2: "super@12345"};
                if(
                    email == user.email2 && 
                    password == user.password2
                ){
                    return user;
                }else return null;
               

            }

        })

    ],
    pages: {
        signIn: "/login"
    },
    secret: process.env.AUTH_SECRET
})