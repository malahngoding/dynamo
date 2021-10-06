import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { LayoutWrapper } from '@/components/LayoutWrapper'
import { getSession, signIn, useSession } from 'next-auth/react'
import { PrimaryButton } from '@/components/design/button'
import { useEffect, useState } from 'react'
import { standService } from '@/lib/service'

export default function Payment(props) {
  const [modal, setModal] = useState(false)
  return (
    <LayoutWrapper>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <LoginButton setModals={setModal} />
      {modal === false ? null : <Modal setModals={setModal} />}
    </LayoutWrapper>
  )
}
const LoginButton = (props) => {
  const { data: session, status } = useSession()
  const [statusPayment, setStatusPayment] = useState([])
  useEffect(() => {
    // Ini yang akan dilakukan diambil dari stand
    if (status === 'authenticated') {
      standService
        .get(`/api/get-only-pay-user`, {
          headers: {
            Authorization: `Bearer ${session.dynamoToken}`,
          },
        })
        .then(function (response) {
          // handle success
          console.log(response.data[0].status_pembayaran)
          setStatusPayment(response.data[0].status_pembayaran)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
    // Ini yang akan dilakukan
  })
  const handleClickModal = () => {
    props.setModals(true)
  }
  return (
    <div>
      {status === 'loading' ? (
        <p>Checking...</p>
      ) : (
        <>
          {!session && (
            <PrimaryButton variant="success" onClick={() => signIn()}>
              Login
            </PrimaryButton>
          )}
          {session && statusPayment.length === 0 && <p>Check data</p>}
          {session && statusPayment === undefined && <p>Loading...</p>}
          {session && statusPayment === 'false' && (
            <div className="flex flex-col justify-center items-center m-6">
              <div className="flex flex-col justify-center items-center p-2 border-2 border-black">
                <p className="mb-2">Silakan melakukan pembayaran terlebih dahulu</p>
                <button
                  className="border-2 p-2 border-black bg-black-800 text-white"
                  onClick={handleClickModal}
                >
                  Bayar
                </button>
              </div>
            </div>
          )}
          {session && statusPayment === 'true' && (
            <div className="flex flex-col justify-center items-center m-6">
              <div className="flex flex-col justify-center items-center p-2 border-2 border-black">
                <p className="mb-2">Status pembayaran sudah lunas</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

const Modal = (props) => {
  const { data: session, status } = useSession()
  const [statusPayment, setStatusPayment] = useState([])
  const handleClickCloseModal = () => {
    props.setModals(false)
  }
  const handleClickPayment = () => {
    standService
      .post(
        `/api/update-payment`,
        {
          status_pembayaran: 'true',
        },
        {
          headers: {
            Authorization: `Bearer ${session.dynamoToken}`,
          },
        }
      )
      .then(function (response) {
        // handle success
        props.setModals(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }
  return (
    <div className="fixed inset-0 z-30 flex justify-center items-center bg-black bg-opacity-50 sm:items-center sm:justify-center">
      <div
        className="w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl"
        role="dialog"
        id="modal"
      >
        <header className="flex justify-end">
          <button
            onClick={handleClickCloseModal}
            className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
            aria-label="close"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </header>

        <div className="mt-4 mb-6">
          <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">Pembayaran</p>

          <p className="text-sm text-gray-700 dark:text-gray-400">
            Apakah anda yakin ingin melakukan pembayaran?
          </p>
        </div>
        <footer className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
          <button
            onClick={handleClickCloseModal}
            className="w-full px-5 py-3 text-sm font-medium leading-5 text-black-600  transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
          >
            Tidak
          </button>
          <button
            onClick={handleClickPayment}
            className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          >
            Iya
          </button>
        </footer>
      </div>
    </div>
  )
}
