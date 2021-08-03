import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    Providers.Credentials({
      name: 'Credentials',
      async authorize(req) {
        console.log(req.body)
        const user = { ok: 'ok' }
        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
})
