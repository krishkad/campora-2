import { User } from "@/constants/index.c";
import { ConnectToDatabase } from "@/database/db";
import UserDb from "@/database/models/user";

export const GetUsers = async (): Promise<{
  users: User[] | null;
  error: string | null;
}> => {
  try {
    await ConnectToDatabase();

    const users = await UserDb.find();

    if (!users || users.length === 0) {
      return { users: null, error: "no users found" };
    }

    const sanitizedUsers = users.map((doc) =>
      JSON.parse(JSON.stringify(doc.toObject()))
    );

    return { users: sanitizedUsers, error: null };
  } catch (error: any) {
    console.log("error while get-users: ", error.message);
    return { users: null, error: "error while get-users" };
  }
};
