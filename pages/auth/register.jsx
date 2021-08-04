import { getProviders, signIn, getCsrfToken, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

export default function SignIn({ providers, csrfToken }) {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) {
    if (session) {
      router.push('/')
    }
    return <Fragment />
  }
  return (
    <>
      {!session && (
        <>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
            </div>
          ))}
          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Username
              <input name="username" type="text" />
            </label>
            <label>
              Password
              <input name="password" type="password" />
            </label>
            <button type="submit">Sign in</button>
          </form>
        </>
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)

  return {
    props: { providers, csrfToken },
  }
}
