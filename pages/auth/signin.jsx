import { Card } from '@/components/design/card'
import { email } from '@/data/siteMetadata'
import { getProviders, signIn, getCsrfToken, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function SignIn({ providers, csrfToken }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [formError, setFormError] = useState(false)

  const onSubmit = async (data) => {
    const status = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })
    if (status.error === null) {
      router.push('/')
    } else {
      setFormError(true)
    }
  }

  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) {
    if (session) {
      router.push('/')
    }
    return <Fragment />
  }
  return (
    <div className="flex flex-col-reverse w-screen min-h-screen bg-green-100 lg:bg-white lg:dark:bg-black lg:flex lg:flex-row lg:justify-around lg:items-center lg:w-screen lg:min-h-screen">
      <div className="flex flex-row justify-center items-center mt-6 xs:-mt-14 sm:-mt-0 z-0 h-full lg:mt-0 lg:flex lg:flex-col lg:justify-end lg:items-center lg:w-1/2 lg:min-h-screen lg:bg-green-100">
        <div
          className="w-full"
          style={{
            backgroundSize: 'cover',
            height: '15rem',
            backgroundColor: 'rgba(214, 252, 247,1)',
            backgroundImage: `url("/static/images/activation.svg")`,
          }}
        />
      </div>
      <div className="flex flex-row justify-center items-center w-screen h-full lg:w-1/2 lg:min-h-screen">
        <>
          {!session && (
            <>
              <Card className="flex flex-col bg-white">
                {Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
                <div className="h-4" />
                {formError && <p>Wrong credentials</p>}
                <form method="post" onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                  <input
                    name="csrfToken"
                    type="hidden"
                    defaultValue={csrfToken}
                    {...register('csrfToken')}
                  />
                  <label>
                    Email
                    <input
                      name="email"
                      type="email"
                      {...register('email', {
                        required: true,
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                        },
                      })}
                    />
                    {errors.email && <span>This field is required</span>}
                  </label>
                  <label>
                    Password
                    <input
                      name="password"
                      type="password"
                      {...register('password', { required: true })}
                    />
                    {errors.password && <span>This field is required</span>}
                  </label>
                  <button type="submit">Sign in</button>
                </form>
              </Card>
            </>
          )}
        </>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)

  return {
    props: { providers, csrfToken },
  }
}
