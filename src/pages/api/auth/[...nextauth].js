import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { DEFAULT_NEXTAUTH_URL } from '../../../config'

const options = {
    site: process.env.NEXTAUTH_URL || DEFAULT_NEXTAUTH_URL,
    providers: [
        Providers.Email({
            server: {
                port: 465,
                host: 'smtp.gmail.com',
                secure: true,
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            },
            from: process.env.EMAIL_FROM || DEFAULT_EMAIL_FROM,
        })
    ],
    database: process.env.DATABASE_URL || DEFAULT_DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options)