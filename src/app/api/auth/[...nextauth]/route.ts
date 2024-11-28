import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

// Initialize Prisma Client
const prisma = new PrismaClient();

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Fetch user from database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("No user found with the given email");
        }

        // Check password
        const isValid = await compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        // Return user object (omit password)
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
    // ...other providers
  ],
  session: {
    strategy: "jwt",
  },
  // Optional: Add callbacks, pages, etc.
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST , authOptions};
