import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { standService } from '@/lib/service'
import { useEffect, useState } from 'react'

export async function getServerSideProps(context) {
  const data = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL)
  const response = await data.json()
  if (!data) {
    return { notFound: true }
  }
  return {
    props: {
      data: response,
    },
  }
}

export default function Endpoint(props) {
  const [data, setData] = useState('')
  useEffect(() => {
    const response = async () => {
      const response = await standService.get('/')
      const response1 = await standService.post('/')
      const response2 = await standService.put('/')
      const response3 = await standService.delete('/')
      console.log(response1, response2, response3)
      setData(response.data.name)
    }
    response()
  }, [props])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-full">
      <PageSeo
        title={siteMetadata.titleHandler('End Point Testing')}
        description={siteMetadata.description}
      />
      <h1>End Point Testing {process.env.NEXT_PUBLIC_BACKEND_URL}</h1>
      {data === '' ? <p>Loading</p> : <p>{data}</p>}
    </div>
  )
}
