import { standService } from '@/lib/service'
import NextAuth from 'next-auth'
import GithubProviders from 'next-auth/providers/github'
import GoogleProviders from 'next-auth/providers/google'
import CredentialsProviders from 'next-auth/providers/credentials'

export default NextAuth({
  secret: process.env.SECRET,
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const data = await standService.post('/api/dynamo/handshake', {
        email: credentials.email,
        provider: account.provider,
      })
      user.dynamoToken = data.data.token
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token.dynamoToken = user.dynamoToken
      }
      return token
    },
    async session({ session, user, token }) {
      session.dynamoToken = token.dynamoToken
      return session
    },
  },
  providers: [
    GithubProviders({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    CredentialsProviders({
      name: 'Credentials',
      async authorize(req) {
        try {
          const email = req.email
          const password = req.password
          const response = await standService({
            method: 'post',
            url: '/api/dynamo/login',
            data: {
              email: email,
              password: password,
            },
          })

          if (response.data.status === 'SUCCESS') {
            return {
              name: response.data.user.name,
              email: response.data.user.email,
              image: `https://avatars.dicebear.com/api/miniavs/${response.data.user.email}.svg`,
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
