"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://172.17.0.87:16999/api",
});
const useAxiosSecure = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          router.push("/login", { scroll: true });
        }
        return Promise.reject(error);
      }
    );
  }, [router]);

  return [axiosSecure];
};

export default useAxiosSecure;
