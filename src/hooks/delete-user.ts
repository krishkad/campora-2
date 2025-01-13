import { User } from "@/constants/index.c";
import axios from "axios";

export const deleteUser = async (userProps: Partial<User>) => {
  try {
    const response = await axios.delete("/api/users/delete", {
      data: {
        _id: userProps._id,
      },
    });

    if (!response.data.success as boolean)
      return { data: null, error: response.data.message };

    if (response.data.success as boolean)
      return { data: response.data.data, error: null };

    return { data: null, error: "error in deleting user" };
  } catch (error: any) {
    return { error: error.message, data: null };
  }
};
