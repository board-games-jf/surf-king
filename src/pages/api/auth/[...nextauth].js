import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { DEFAULT_EMAIL_FROM, DEFAULT_NEXTAUTH_URL, DEFAULT_POSTGRES_HOST } from '../../../config'

const options = {
    debug: true,
    site: process.env.NEXTAUTH_URL || DEFAULT_NEXTAUTH_URL,
    providers: [
        Providers.Email({
            server: {
                port: 587,
                host: 'smtp.gmail.com',
                secure: false,
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            },
            from: process.env.EMAIL_FROM || DEFAULT_EMAIL_FROM,
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        }),
    ],
    database: {
        type: "postgres",
        host: process.env.POSTGRES_HOST || DEFAULT_POSTGRES_HOST,
        port: 5432,
        username: "surfking",
        password: process.env.POSTGRES_PASSWORD,
        database: "surfking",
    },
}

export default (req, res) => NextAuth(req, res, options)