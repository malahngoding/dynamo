/* eslint-disable react-hooks/exhaustive-deps */
import CustomLink from '@/components/Link'
import { PercobaanComponent } from '@/components/percobaan'
import { usePercobaan } from '@/modules/percobaan.store'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Learn() {
  // Asynchronous Nature of Javascript
  // Reactive State
  const { counter, increaseTenFold } = usePercobaan((state) => state)
  const [state, setState] = useState('Diisi sesuatu') // <- PAKEM tipe string
  // Reactive State
  const getData = () =>
    axios // PETAKA RACING CONDITON
      .get('https://www.boredapi.com/api/activity')
      .then((response) => {
        // Masukan Logic disini
        setState(response.data.activity)
        increaseTenFold()
      })

      .catch((error) => console.error(error)) // <- PAKEM CONTOH

  const handleClick = () => {
    // arrow function
    getData()
  }

  // <- PAKEM NOMOR 2
  useEffect(() => {
    // block yang dijalankan
    // FETCH-ing data
    // POST - GET - `PUT` - `DELETE`
    getData()
  }, [])

  return (
    <div style={{ border: '1px solid green', padding: '1em' }}>
      <div>
        <div>React</div>
      </div>
      <div>
        <div>
          Another {state} {counter}
        </div>
      </div>
      <button onClick={handleClick}>Click</button>
      <PercobaanComponent />
      <CustomLink href="/">Yes</CustomLink>
    </div>
  )
}
