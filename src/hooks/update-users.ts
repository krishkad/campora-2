import { User } from "@/constants/index.c";
import axios from "axios";

export const updateUser = async (userProps: Partial<User>) => {
  try {
    const response = await axios.put("/api/users/update", { ...userProps });

    if (!response.data.success as boolean)
      return { data: null, error: response.data.message };

    if (response.data.success as boolean)
      return { data: response.data.data, error: null };

    return { data: null, error: "error in updating user" };
  } catch (error: any) {
    return { error: error.message, data: null };
  }
};
