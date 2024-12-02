import { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
    interface User {
        accessToken: string;
        username: string;
        id: string;
    }

    interface Session {
        accessToken: string;
        user: {
            name: string;
            id: string;
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        name: string;
        id: string;
    }
}
