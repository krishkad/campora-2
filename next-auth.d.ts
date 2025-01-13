import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    // Add custom properties here
    role?: string;
    id: string; // Ensure the `id` field exists
  }

  interface Session {
    user: User; // Use the extended User type in the session
  }

  interface AdapterUser {
    role?: string;
    id: string;
  }
}
