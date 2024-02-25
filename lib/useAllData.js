import { useEffect, useState } from "react";
import useAxiosSecure from "@/app/dashboard/Hooks/useAxiousSecure";

const useAllData = () => {
  const [axiosSecure] = useAxiosSecure();
  const [utility, setUtility] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure("/web-app/dashboard");
        const utilities = response.data.data.companyListWithTickets;

        // Check if data has changed before updating state
        if (!arraysAreEqual(utilities, utility)) {
          setUtility(utilities);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [axiosSecure]); // Only axiosSecure is included in the dependency array

  return utility;
};

// Function to compare arrays
const arraysAreEqual = (array1, array2) => {
  return JSON.stringify(array1) === JSON.stringify(array2);
};

export default useAllData;
