"use client"
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiousSecure';

const AxiosCall = async(api, email, password) => {
    const [axiosSecure]= useAxiosSecure()

    const res = await axiosSecure.post(api, {email, password})
    console.log("from axios page",res)

    return res;
};

export default AxiosCall;