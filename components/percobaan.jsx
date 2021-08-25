import { usePercobaan } from '@/modules/percobaan.store'

export const PercobaanComponent = () => {
  const counter = usePercobaan((state) => state.counter)
  const increaseTenFold = usePercobaan((state) => state.increaseTenFold)

  return (
    <div style={{ border: '1px solid red', padding: '1em' }}>
      <div>PERCOBAAN ke-{counter}</div>
      <button onClick={increaseTenFold}>Tambah</button>
    </div>
  )
}
