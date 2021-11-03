/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import { useState } from 'react'
export default function RSSReader() {
  const [input, setInput] = useState('')
  const [rssUrl] = 'https://www.antaranews.com/rss/terkini'
  const [items, setItems] = useState([])

  const handleClick = async (e) => {}
  return (
    <>
      <h3 className="mt-5 ml-5 font-extrabold text-3xl tracking-widest text-left uppercase text-blue">
        Pencarian RSS
      </h3>
      <div className="ml-5 font-extrabold mb-2">Masukan Kata Kunci : </div>
      <input
        className="h-[30px] w-[200px] ml-5"
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="bg-blue font-extrabold text-white h-[30px] w-[100px] ml-2  rounded-3xl"
      >
        Cari RSS
      </button>
      <div className="ml-5 font-extrabold mt-5">Hasil Pencarian</div>
      <div className="grid grid-cols-3 gap-4 m-4 border-2 border-black">
        <div className="text-xl font-bold ml-5">Sumber</div>
        <div className="text-xl font-bold ml-5">Judul</div>
        <div className="text-xl font-bold ml-5">Link</div>
      </div>
    </>
  )
}
