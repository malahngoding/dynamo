/* eslint-disable prettier/prettier */
import { HiSulthanComponent } from '@/components/Sulthan/SulthanComponent'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { variants } from 'tailwind.config'

export default function SulthanPages() {
  const [nama, setNama] = useState({
    mantap: 'pancing',
    yes: {
      variants: {
        mantap: 'Sulthan',
      },
    },
  })

  useEffect(() => {
    setTimeout(() => {
      AlertSulthan()
    }, 1000)
  }, [])

  const AlertSulthan = () => {
    axios({
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/echo`,
    }).then(function (response) {
      console.log(response)
      // setNama(response.data.echo)
      setNama({
        yes: {
          variants: {
            mantap: response.data.echo,
          },
        },
      })
    })
  }
  return (
    <>
      <div>
        <p>Halo {nama.yes.variants.mantap}</p>
      </div>
      <HiSulthanComponent
        sulthan={nama.yes.variants.mantap !== 'Sulthan' ? nama.yes.variants.mantap : 'Bebek'}
      />
      <HiSulthanComponent
        sulthan={nama.yes.variants.mantap !== 'Sulthan' ? nama.yes.variants.mantap : 'Sapi'}
      />
      <HiSulthanComponent
        sulthan={nama.yes.variants.mantap !== 'Sulthan' ? nama.yes.variants.mantap : 'Ayam'}
      />
      <button className="text-red" onClick={AlertSulthan}>
        Tombol
      </button>
    </>
  )
}
