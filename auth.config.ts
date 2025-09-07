import google from 'next-auth/providers/google'
import GitHub from 'next-auth/providers/github'
import { NextAuthConfig } from 'next-auth'

export default {
    providers: [
        google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
} satisfies NextAuthConfig