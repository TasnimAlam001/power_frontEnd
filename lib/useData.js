// "use client";

// import useAxiosSecure from "@/app/dashboard/Hooks/useAxiousSecure";
// import React, { useEffect, useState } from "react";

// const useData = () => {
//   const [data, setData] = useState();
//   const [isAuthentic, setIsAuthentic] = useState(false);

//   const [axiosSecure] = useAxiosSecure();

//   useEffect(() => {
//     const fetchData = () => {
//       try {
//         axiosSecure.get("/web-app/dashboard").then((response) => {
//           const { data } = response.data;
//           if (data) {
            
//               setData(data);
//               setIsAuthentic(true)
//           }
//         });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [axiosSecure]);

//   if (data) {
//     return [];
//   }
// };

// export default useData;
