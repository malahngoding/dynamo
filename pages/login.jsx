import { PrimaryButton } from '@/components/design/button'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('superadmin@malahngoding.com')
  const [password, setPassword] = useState('developer')

  const handleRegister = () => {
    const hostName = 'http://localhost/'
    axios.defaults.withCredentials = true
    // CSRF COOKIE
    axios.get(hostName + 'sanctum/csrf-cookie').then(
      (response) => {
        // LOGIN
        axios
          .post(hostName + 'register', {
            name: 'reads',
            email: 'email@mail.com',
            password: 'passwoxrd',
            password_confirmation: 'password',
          })
          .then(
            (response) => {
              // GET USER
              axios.get(hostName + 'api/user').then(
                (response) => {
                  console.log(response)
                },
                // GET USER ERROR
                (error) => {
                  console.error('Could not complete the login', error)
                }
              )
            },
            // LOGIN ERROR
            (error) => {
              if (error.response) {
                console.error(error.response.data.message)
              } else {
                console.error('Could not complete the login', error)
              }
            }
          )
      },
      // COOKIE ERROR
      (error) => {
        console.error('Could not complete the login', error)
      }
    )
  }

  const handleLogin = () => {
    const hostName = 'http://localhost/'
    axios.defaults.withCredentials = true
    // CSRF COOKIE
    axios.get(hostName + 'sanctum/csrf-cookie').then(
      (response) => {
        // LOGIN
        axios
          .post(hostName + 'login', {
            email: email,
            password: password,
          })
          .then(
            (response) => {
              // GET USER
              axios.get(hostName + 'api/user').then(
                (response) => {
                  console.log(response)
                },
                // GET USER ERROR
                (error) => {
                  console.error('Could not complete the login', error)
                }
              )
            },
            // LOGIN ERROR
            (error) => {
              if (error.response) {
                console.error(error.response.data.message)
              } else {
                console.error('Could not complete the login', error)
              }
            }
          )
      },
      // COOKIE ERROR
      (error) => {
        console.error('Could not complete the login', error)
      }
    )
  }

  const handleLogout = () => {
    const hostName = 'http://localhost/'
    axios.defaults.withCredentials = true
    // CSRF COOKIE
    axios.get(hostName + 'sanctum/csrf-cookie').then(
      (response) => {
        // LOGIN
        axios
          .post(hostName + 'logout', {
            email: email,
            password: password,
          })
          .then(
            (response) => {
              // GET USER
              axios.get(hostName + 'api/user').then(
                (response) => {
                  console.log(response)
                },
                // GET USER ERROR
                (error) => {
                  console.error('Could not complete the login', error)
                }
              )
            },
            // LOGIN ERROR
            (error) => {
              if (error.response) {
                console.error(error.response.data.message)
              } else {
                console.error('Could not complete the login', error)
              }
            }
          )
      },
      // COOKIE ERROR
      (error) => {
        console.error('Could not complete the login', error)
      }
    )
  }

  return (
    <div className="flex flex-col justify-center items-center p-24">
      <div>
        {/* Email Address */}
        <div>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            className="block mt-1 w-full"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            className="block mt-1 w-full"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
            autoComplete="current-password"
          />
        </div>

        {/* Remember Me */}
        <div className="block mt-4">
          <label htmlFor="remember_me" className="inline-flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              name="remember"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div className="flex items-center justify-end mt-4">
          <Link href="/forgot-password">
            <a className="underline text-sm text-gray-600 hover:text-gray-900">
              Forgot your password?
            </a>
          </Link>

          <PrimaryButton className="ml-3" onClick={handleLogin}>
            Login
          </PrimaryButton>

          <PrimaryButton className="ml-3" onClick={handleLogout}>
            Logout
          </PrimaryButton>

          <PrimaryButton className="ml-3" onClick={handleRegister}>
            Register
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
