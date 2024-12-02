import { createUserAdapter } from "@/adapters";
import { handleLogin } from "@/useCases/auth/login";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            name: "Credentials",
            async authorize(credentials) {
                try {
                    const user = await handleLogin({
                        email: credentials?.email as string,
                        password: credentials?.password as string,
                    });
                    const userEntity = createUserAdapter(user);
                    return userEntity;
                } catch (error) {
                    console.error(error);
                    return null;
                }
            },
        }),
    ],
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.name = user.username;
                token.id = user.id ?? "";
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.user.name = token.name;
            session.user.id = token.id;
            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
    },
    secret: process.env.AUTH_SECRET,
});
