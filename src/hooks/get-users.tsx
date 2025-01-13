import { User } from "@/constants/index.c";
import { useEffect, useState } from "react";
import axios from "axios";

export function getUsers() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    setIsLoading(true);
    setError(null);
    setUsers(null);
    try {
      const response = await axios.get("/api/users/get-all");

      if (!response.data.success as boolean) {
        setIsLoading(false);
        setError(response.data.message);
        setUsers(null);
      }

      if (response.data.success as boolean) {
        setIsLoading(false);
        setError(null);
        setUsers(response.data.data);
      }
    } catch (error: any) {
      console.log("error while fetching users: ", error.message);
      setError(error.message);
      setIsLoading(false);
      setUsers(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { users, isLoading, error };
}
