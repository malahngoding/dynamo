import { LayoutWrapper } from '@/components/LayoutWrapper'
import { getSession } from 'next-auth/react'

export default function Test(props) {
  return (
    <>
      <LayoutWrapper>
        <AuthorizedUser></AuthorizedUser>
      </LayoutWrapper>
    </>
  )
}

const AuthorizedUser = () => {
  return <p className="m-5 text-center font-extrabold">This Page For Authorized User Only</p>
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session === null) {
    return {
      redirect: {
        destination: '/',
      },
    }
  } else {
    return {
      props: {
        isAuthenticated: true,
        dynamoToken: session.dynamoToken,
      }, // will be passed to the page component as props
    }
  }
}
