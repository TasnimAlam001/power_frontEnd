"use client"
import axios from "axios";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {


  let r = await axios.post("http://172.17.0.87:16999/api/web-app/login", {
    "email": "super@gmail.com",
    "password": "super@12345"
  });

  console.log(r);


  if (typeof window === 'undefined') {
    // This code is running on the server side
    console.log("This code is running on the server side.");
    // You may handle server-side specific logic here
  } else {
    // This code is running on the client side
    console.log("This code is running on the client side.");

    // Retrieve the access token from localStorage (client side only)
    const token =  response.headers.set('x-hello-from-middleware2', 'hello')

    // Check if token exists
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }


    // Perform localStorage action
  //   const token =  localStorage.getItem("access-token");
  //   console.log(token)
  


  // console.log("hoiseeeeeeeeeeeeeeeeeeeeeeee");
  //   // if (!token) {
    //   // return NextResponse.redirect(new URL("/login", request.url));
    //   console.log("token nai")
    // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/allTickets",
};
