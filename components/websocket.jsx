import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import { useState } from 'react'
import { PrimaryButton } from '@/components/design/button'
import axios from 'axios'

const Websocket = () => {
  const [textEvent, setTextEvent] = useState('')
  window.Pusher = Pusher

  window.Echo = new Echo({
    broadcaster: `pusher`,
    key: `anyKey`,
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
  })
  window.Echo.channel('DemoChannel').listen('WebsocketDemoEvent', (e) => {
    setTextEvent(e.somedata)
    console.log(e)
  })

  const websocket = {
    getWindow: window,
  }
  const handleClickMessage = () => {
    window.Echo = new Echo({
      broadcaster: `pusher`,
      key: `anyKey`,
      wsHost: window.location.hostname,
      wsPort: 6001,
      forceTLS: false,
      disableStats: true,

      authorizer: (channel, options) => {
        return {
          authorize: (socketId, callback) => {
            axios
              .post('/api/broadcasting/auth', {
                socket_id: socketId,
                channel_name: channel.DemoChannel,
              })
              .then((response) => {
                callback(false, response.data)
                console.log(response.data)
              })
              .catch((error) => {
                callback(true, error)
              })
          },
        }
      },
    })
  }
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <p>{textEvent}</p>
      <textarea
        value={textEvent}
        onChange={(e) => setTextEvent(e.target.value)}
        className="border-2 w-[300px] h-[100px] break-words mb-6"
        placeholder="Message"
      ></textarea>
      <PrimaryButton
        onClick={() => handleClickMessage()}
        className="border-2 border-black-800 rounded-xl  mx-1 md:mx-2 md:py-2 md:px-4"
      >
        Send
      </PrimaryButton>
    </div>
  )
}

export default Websocket
