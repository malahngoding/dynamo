/* eslint-disable prettier/prettier */
import Image from '@/components/Image'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ProductPage() {
  const [isActive, setIsActive] = useState('')

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://dummyjson.com/products',
    }).then(function (response) {
      setIsActive(response.data)
      console.log(isActive)
    })
  }, [])
  return (
    <div className="flex items-center justify-center bg-green w-full h-screen flex-col">
      <p className="font-extrabold text-3xl mb-3">Product</p>
      <input
        type="text"
        className="border-2 border-black rounded-lg"
        placeholder="Find Product..."
      />
      <div className="mt-10">
        <Image
          src="/static/images/css-code.png"
          alt="User"
          width="250"
          height="250"
          className="rounded-lg"
        />
      </div>
      <p>Brand</p>
    </div>
  )
}
