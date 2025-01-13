import { ConnectToDatabase } from "@/database/db";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      async profile(profile, tokens) {
        await ConnectToDatabase();

        return profile;
      },

      clientId: "" as string,
      clientSecret: "" as string,
    }),
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          type: "email",
          Label: "Email",
          placeholder: "enter your email",
          required: true,
        },
        name: {
          type: "text",
          label: "Name",
          placeholder: "enter your name",
          required: true,
        },
      },
      async authorize(credentials, req) {
        await ConnectToDatabase();
        if (credentials) {
          return { ...credentials, id: "000", role: "GUEST" };
        } else return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token.id = user.id),
          (token.email = user.email),
          (token.role = user?.role as string);
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email,
        role: token.role as string,
      };

      return session;
    },

  },
  pages: {
    newUser: '/operator/create',
    signIn: "/operator/sign-in",
    verifyRequest: "/operator/verify"
  },
  secret: "krrishkadamsecret"
};
