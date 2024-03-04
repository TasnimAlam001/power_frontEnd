import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
  auth,
  signIn,

  handlers: { GET, POST },
} = NextAuth({
  providers: [
    Credentials({
      name: "credentials",

      async authorize(credential) {
        const email = credential?.email;
        const password = credential?.password;

        const userData = await fetch(
          "http://172.17.0.87:16999/api/web-app/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            return data;
          });

        const user = userData.data;

        if (userData?.status === "ok") {
        //   return user;
            return {
                name: "superAdmin",
                email: "super@gmail.com",  
                user          
            };
        } else return null;
      },
    }),
  ],
  callbacks: {
    async jwt(params) { 
       
      return params;
    },
    async session(sessions){

        return sessions;
    }
  },

  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
});
