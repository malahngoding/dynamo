import { PrimaryButton } from '@/components/design/button'
import { Card } from '@/components/design/card'
import { getProviders, signIn, getCsrfToken, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { At, BrandGithub, BrandGoogle, Lock, User } from 'tabler-icons-react'
import Axios from 'axios'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Register({ providers, csrfToken }) {
  const [session, loading] = useSession()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm()
  const [formError, setFormError] = useState(false)

  const onSubmit = async (data) => {
    const { name, email, password, csrfToken } = data
    try {
      const response = await Axios({
        method: 'post',
        url: '/api/registration',
        data: {
          name: name,
          email: email,
          password: password,
          csrfToken: csrfToken,
        },
      })
      if (response.data.status === 'SUCCESS') {
        const status = await signIn('credentials', {
          email: email,
          password: password,
          redirect: false,
        })
        if (status.error === null) {
          router.push('/')
        } else {
          setFormError(true)
        }
      }
      return data
    } catch (error) {
      console.log(error.response) // this is the main part. Use the response property from the error object
      return error.response
    }
  }

  useEffect(() => {
    const handler = () => {
      if (loading && session) {
        router.push('/')
      }
      if (session) {
        router.push('/')
      }
    }
    handler()
  }, [loading, router, session])

  return (
    <>
      <PageSeo
        title={siteMetadata.titleHandler('Bergabung dengan Malah Ngoding')}
        description={siteMetadata.description}
      />
      <div className="flex flex-col-reverse w-screen min-h-screen bg-yellow-100 lg:bg-white lg:dark:bg-black lg:flex lg:flex-row lg:justify-around lg:items-center lg:w-screen lg:min-h-screen">
        <div className="flex flex-row justify-center items-center mt-6 xs:-mt-14 sm:-mt-0 z-0 h-full lg:mt-0 lg:flex lg:flex-col lg:justify-end lg:items-center lg:w-1/2 lg:min-h-screen lg:bg-yellow-100">
          <div
            className="w-full"
            style={{
              backgroundSize: 'cover',
              height: '15rem',
              backgroundColor: 'rgba(255, 244, 204, 1)',
              backgroundImage: `url("/static/images/activation.svg")`,
            }}
          />
        </div>
        <div className="flex flex-row justify-center items-center w-screen h-full lg:w-1/2 lg:min-h-screen">
          <>
            {!session && (
              <>
                <Card className="flex flex-col bg-white dark:bg-black-800 px-4 m-2">
                  <div className="mx-2 mt-4" />
                  <h1 className="mx-0 sm:mx-2 text-4xl font-black mt-4">Daftar</h1>
                  <h3 className="mx-0 sm:mx-2 text-lg font-bold mb-4">
                    Berkembang bersama komunitas Malah Ngoding
                  </h3>
                  {formError && (
                    <p className="text-red my-2 mb-4">Periksa kembali email/password kamu</p>
                  )}
                  <form method="post" onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <input
                      name="csrfToken"
                      type="hidden"
                      defaultValue={csrfToken}
                      {...register('csrfToken')}
                    />
                    <div className="flex flex-col justify-start items-start m-0 sm:m-2">
                      <label htmlFor="email" className="text-sm mb-1 font-black">
                        Nama
                      </label>
                      <div className="relative text-black focus-within:text-black w-full">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                          <button
                            className="p-1 focus:outline-none focus:shadow-outline"
                            tabIndex={-1}
                          >
                            <User />
                          </button>
                        </span>
                        <input
                          name="name"
                          type="name"
                          className="py-2 text-black bg-white pl-10 focus:outline-none w-full border-2 border-black rounded-lg text-base focus:bg-white focus:text-black"
                          autoComplete="off"
                          onFocus={() => setFormError(false)}
                          {...register('name', {
                            required: true,
                          })}
                        />
                      </div>
                      <span className="text-sm text-red font-bold mt-1">
                        {errors.name && <span>Nama kamu siapa?</span>}
                      </span>
                    </div>
                    <div className="flex flex-col justify-start items-start m-0 sm:m-2">
                      <label htmlFor="email" className="text-sm mb-1 font-black">
                        Email
                      </label>
                      <div className="relative text-black focus-within:text-black w-full">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                          <button
                            className="p-1 focus:outline-none focus:shadow-outline"
                            tabIndex={-1}
                          >
                            <At />
                          </button>
                        </span>
                        <input
                          name="email"
                          type="email"
                          className="py-2 text-black bg-white pl-10 focus:outline-none w-full border-2 border-black rounded-lg text-base focus:bg-white focus:text-black"
                          autoComplete="off"
                          onFocus={() => setFormError(false)}
                          {...register('email', {
                            required: true,
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                            },
                          })}
                        />
                      </div>
                      <span className="text-sm text-red font-bold mt-1">
                        {errors.email && <span>Email kamu masih kosong</span>}
                      </span>
                    </div>
                    <div className="flex flex-col justify-start items-start m-0 sm:m-2">
                      <label htmlFor="password" className="text-sm mb-1 font-black">
                        Password
                      </label>
                      <div className="relative text-black focus-within:text-black w-full">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                          <button
                            tabIndex={-1}
                            className="p-1 focus:outline-none focus:shadow-outline"
                          >
                            <Lock />
                          </button>
                        </span>
                        <input
                          name="password"
                          type="password"
                          className="py-2 text-black bg-white pl-10 focus:outline-none w-full border-2 border-black rounded-lg text-base focus:bg-white focus:text-black"
                          autoComplete="off"
                          onFocus={() => setFormError(false)}
                          {...register('password', {
                            required: true,
                          })}
                        />
                      </div>
                      <span className="text-sm text-red font-bold mt-1">
                        {errors.password && <span>Password kamu masih kosong</span>}
                      </span>
                    </div>
                    <PrimaryButton
                      type="submit"
                      variant="normal"
                      className="my-2 sm:m-2 mt-6 flex flex-row justify-center items-cente"
                    >
                      Mendaftar
                    </PrimaryButton>
                  </form>
                  <p className="m-2">
                    Sudah punya akun?{' '}
                    <button onClick={signIn}>
                      <a className="underline font-extrabold">Silahkan masuk</a>
                    </button>
                  </p>
                  <hr className="my-2" />
                  <PrimaryButton
                    onClick={() => signIn(providers.github.id)}
                    className="my-2 sm:m-2 flex flex-row justify-center items-center hover:bg-black-100"
                  >
                    Daftar dengan {providers.github.name} <BrandGithub className="ml-4" />
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => signIn(providers.google.id)}
                    className="my-2 sm:m-2 flex flex-row justify-center items-center hover:bg-black-100"
                  >
                    Daftar dengan {providers.google.name} <BrandGoogle className="ml-4" />
                  </PrimaryButton>
                  <div className="my-2" />
                </Card>
              </>
            )}
          </>
        </div>
      </div>
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
