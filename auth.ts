import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const {
    handlers: { GET, POST },
    auth, //get current session or not seesion at all if the user is logged out
} = NextAuth({
    providers: [GitHub]
})