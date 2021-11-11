import dynamic from 'next/dynamic'

const WebsocketComponent = dynamic(import('../components/websocket'), { ssr: false })

export default function Home() {
  return (
    <div>
      <WebsocketComponent />
      <p>tes</p>
    </div>
  )
}
