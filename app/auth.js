import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials'


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


                const user = {id : 100, email: "super@gmail.com", password: "super@12345"};
                if(
                    credential?.email == user.email && 
                    credential?.password == user.password
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