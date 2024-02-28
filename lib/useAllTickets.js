import { useEffect, useState } from "react";
import useAxiosSecure from "@/app/dashboard/Hooks/useAxiousSecure";

const useAllTickets = () => {
  const [axiosSecure] = useAxiosSecure();
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure("/ticket?start_date=2023-11-01&end_date=2023-12-31");
        const tickets = response.data.data;
        // console.log("res: ",response);

        // Check if data has changed before updating state
        if (!arraysAreEqual(tickets, ticket)) {
          setTicket(tickets);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [axiosSecure]);

  return ticket;
};

// Function to compare arrays
const arraysAreEqual = (array1, array2) => {
  return JSON.stringify(array1) === JSON.stringify(array2);
};

export default useAllTickets;
