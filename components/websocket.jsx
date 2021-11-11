import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

const Websocket = () => {
  window.Pusher = Pusher

  window.Echo = new Echo({
    broadcaster: `pusher`,
    key: `anyKey`,
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
  })
  const websocket = {
    asdasd: window,
  }
  console.log(websocket)
  return <div>{1}</div>
}

export default Websocket
