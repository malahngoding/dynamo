/* eslint-disable prettier/prettier */
import Xendit from 'xendit-node'

export default async function handler(req, res) {
  const x = new Xendit({
    secretKey: 'xnd_development_P4qDfOss0OCpl8RtKrROHjaQYNCk9dN5lSfk+R1l9Wbe+rSiCwZ3jw==',
  })

  const { QrCode } = x
  const qrcodeSpecificOptions = {}
  const q = new QrCode(qrcodeSpecificOptions)

  const resp = await q.simulate({
    externalID: 'malahngoding_testing',
  })
  console.log(resp)
  res.status(200).json(resp)
}
