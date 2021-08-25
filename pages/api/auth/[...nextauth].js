import { comparePassword } from '@/lib/bcrypt'
import { detaUser } from '@/lib/deta'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  secret: process.env.SECRET,
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async signIn(user, account, profile) {
      console.log(user, account, profile)
      return true
    },
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
        try {
          const email = req.email
          const password = req.password
          const data = await detaUser.get(email)

          const isPasswordCorrect = await comparePassword(password, data.password)
          if (isPasswordCorrect) {
            return {
              name: data.name,
              email: data.key,
              image:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80',
            }
          }
        } catch (e) {
          const errorMessage = e.response.data.message
          throw new Error(errorMessage + '&email=' + 'ngeng')
        }
      },
    }),
  ],
})
