/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { LayoutWrapper } from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Image from '../../components/Image'
import { useEffect, useState } from 'react'
import { standService } from '@/lib/service'
import { getSession } from 'next-auth/react'

export default function Profile() {
  const { data: session, status } = useSession()
  const [feedback, setFeedback] = useState('')
  const [badge, setBadge] = useState('')
  const router = useRouter()
  // const url_username = router.query.slug
  // const regex = /[^a-zA-Z 0-9]+/g
  // const username = url_username.replace(regex, '')
  const [userName, setUserName] = useState(router.query.slug)
  const [loading, setLoading] = useState(false)
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

  const getBadge = async () => {
    let get = await standService
      .get(`/api/get-badge`, {
        headers: {
          Authorization: `Bearer ${session.dynamoToken}`,
        },
      })
      .then(function (response) {
        // handle success
        setBadge(response.data)
        setLoading(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }
  useEffect(() => {
    // Ini yang akan dilakukan diambil dari stand
    if (status === 'authenticated') {
      getBadge()
      standService
        .post(
          `/api/get-feedback`,
          {},
          {
            headers: {
              Authorization: `Bearer ${session.dynamoToken}`,
            },
          }
        )
        .then(function (response) {
          // handle success
          setFeedback(response.data[0].message)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
    // Ini yang akan dilakukan
  }, [loading, feedback])
  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Profile')}
        description={siteMetadata.description}
      />
      <div>
        {status === 'authenticated' && loading === true ? (
          <div className="flex flex-col md:flex-row justify-start items-start">
            <div className="flex flex-col justify-center items-center p-4 rounded-xl mr-6">
              <Image
                height={128}
                width={128}
                className="rounded-full border-2 border-black"
                src={session.user.image}
                alt={`Sebuah gambar avatar dari pengguna ${session.user.name}`}
              />
              <h1 className="font-extrabold text-xl mt-4">{session.user.name}</h1>
              <p className="font-extrabold text-center text-md mt-2">
                Semangatku malahngoding karena:
              </p>
              <p className="font-extrabold text-center text-md mt-2">{feedback}</p>
              <h2 className="font-bold text-lg">Menjawab Pertanyaan Artikel</h2>
              <h2 className="font-bold text-lg">Total : 200 Kali</h2>
              <h2 className="font-bold text-lg">Benar : 5</h2>
              <h2 className="font-bold text-lg mb-6">Salah : 3</h2>
              <h2 className="font-base text-base">Malah ngoding sejak: 17 Agustus 1945</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 border-2 border-white mt-2 pb-24">
              {badge.map((item, i) => (
                <div key={i} className="flex flex-col border-2 border-white ">
                  {item.type === 'image' ? (
                    <>
                      <div className="border-2 border-">
                        <img src={`${baseURL}${item.media}`} alt="" className="h-[160px]"></img>
                      </div>
                      <p className="font-bold">{item.title}</p>
                      <p className="font-bold text-gray-600">{item.description}</p>
                    </>
                  ) : (
                    <>
                      <div className="border-2 border-">
                        <video height={128} autoPlay>
                          <source src={`${baseURL}${item.media}`} type="video/mp4"></source>
                        </video>
                      </div>
                      <p className="font-bold">{item.title}</p>
                      <p className="font-bold text-gray-600">{item.description}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h1 className="font-extrabold text-xl mt-4">Waiting...</h1>
        )}
      </div>
    </LayoutWrapper>
  )
}
