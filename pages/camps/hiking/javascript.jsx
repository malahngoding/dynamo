import { LayoutWrapper } from '@/components/LayoutWrapper'
import Image from '@/components/Image'
import { getSession } from 'next-auth/react'
import { standService } from '@/lib/service'
import { useState } from 'react'
import QRCode from 'qrcode'

export default function JavascriptPages(props) {
  const [barcode, setBarcode] = useState(
    QRCode.toDataURL(props.data.qr_string)
      .then((url) => {
        setBarcode(url)
      })
      .catch((err) => {
        console.error(err)
      })
  )
  return (
    <LayoutWrapper>
      {props.data.status === 'ACTIVE' ? (
        <div className="flex flex-col justify-center items-center">
          <p className="m-5 text-center font-extrabold">
            Untuk Melihat Konten Ini Kamu Harus Membayar Terlebih Dahulu
          </p>
          <img className="" src={barcode} alt="barcode" />
          <img
            className=""
            src="data:image/png;base64,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"
            alt="barcode"
          />
          <img
            className="mb-5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxaW4wAg8W-wRy2Oxv--cE_dHFESDjNEi9UQ&usqp=CAU"
            alt="barcode"
          />
        </div>
      ) : (
        <>
          <h3 className="mt-8 font-bold tracking-widest text-left uppercase text-blue dark:text-white md:text-center">
            ALLRIGHT
          </h3>
          <h1 className="text-5xl font-black text-left text-black dark:text-yellow md:text-center">
            JavaScript Mountain
          </h1>
          <section className="w-full  px-4 py-8 leading-normal bg-yellow-100 md:p-8 md:mt-10 text-md">
            <div className="flex flex-row justify-around">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl font-black text-left text-black dark:text-yellow md:text-center">
                  JavaScript
                </h1>
                <h1 className="my-5 text-lg font-black text-left text-black dark:text-yellow md:text-center">
                  The language for programming web pages
                </h1>
                <button className="my-3 w-[275px] h-[50px] bg-green rounded-2xl text-white font-bold">
                  Learn JavaScript
                </button>
                <button className="my-3 w-[275px] h-[50px] bg-black rounded-2xl text-white font-bold">
                  JavaScript Reference
                </button>
              </div>
              <div className="flex flex-col bg-white p-5">
                <p className="mb-3 text-lg font-black text-left text-black dark:text-yellow ">
                  JavaScript Example:
                </p>
                <Image
                  src="/static/images/javascript-code.png"
                  alt="User"
                  width="660"
                  height="332"
                />
              </div>
            </div>
          </section>
        </>
      )}
    </LayoutWrapper>
  )
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
    let response = await standService.post(
      `/api/paid-content-hiking-js`,
      {},
      {
        headers: {
          Authorization: `Bearer ${session.dynamoToken}`,
        },
      }
    )
    console.log(response)
    return {
      props: {
        isAuthenticated: true,
        dynamoToken: session.dynamoToken,
        data: response.data[0],
      }, // will be passed to the page component as props
    }
  }
}
