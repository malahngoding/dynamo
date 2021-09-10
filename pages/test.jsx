/* eslint-disable prettier/prettier */
import { useState } from 'react'

export default function Test() {
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      console.log('Router Push')
    }, 1004)
  }
  return (
    <div>
      <h1>Mantap</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <button>Click</button>
          <button onClick={handleClick}>Click</button>
          <button>Click</button>
          <button>Click</button>
        </>
      )}
    </div>
  )
}
