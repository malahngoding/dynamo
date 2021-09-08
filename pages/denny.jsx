/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { DennyComponent } from '@/components/DennyComponent'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Learn(props) {
  const [Denny, setDenny] = useState({
    mantap: 'pancing',
    yes: {
      variants: {
        mantap: 'Denny',
      },
    },
  })
  const handleClick = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/echo`)
      .then(function (response) {
        // handle success
        setDenny({
          mantap: 'pancing',
          yes: {
            variants: {
              mantap: response.data.echo,
            },
          },
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }
  //   useEffect(() => {
  //     // Ini yang akan dilakukan
  //     setTimeout(() => {
  //       handleClick()
  //     }, 1000)
  //   }, [])
  return (
    <div>
      <DennyComponent
        denny={Denny.yes.variants.mantap === 'Denny' ? 'Sulthan' : Denny.yes.variants.mantap}
      />
      <DennyComponent
        denny={Denny.yes.variants.mantap === 'Denny' ? 'Andry' : Denny.yes.variants.mantap}
      />
      <DennyComponent denny="denny" />
      <p className={`text-blue-700 text-md`}>Hallo {Denny.yes.variants.mantap}</p>
      <button
        className="p-2 border-2"
        onClick={() => {
          handleClick()
        }}
      >
        Button
      </button>
      <p>{props.ditto}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/echo`)

  // const pikachu = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
  // const ivysaur = await axios.get('https://pokeapi.co/api/v2/pokemon/3')

  return {
    props: {
      // id: context.query.id,
      ditto: response.data.echo,

      // pikachu: pikachu.data,
      // ivysaur: ivysaur.data,
    }, // will be passed to the page component as props
  }
}
