import Xendit from 'xendit-node'

export default async function handler(req, res) {
  // const x = new Xendit({
  //   secretKey:
  //     "xnd_development_P4qDfOss0OCpl8RtKrROHjaQYNCk9dN5lSfk+R1l9Wbe+rSiCwZ3jw==",
  // });

  // const { QrCode } = x;
  // const qrcodeSpecificOptions = {};
  // const q = new QrCode(qrcodeSpecificOptions);

  // const resp = await q.createCode({
  //   externalID: new Date(),
  //   type: "DYNAMIC",
  //   callbackURL: "https://yourwebsite.com/callback",
  //   amount: 1500,
  // });
  // res.status(200).json(resp)
  const x = new Xendit({
    secretKey: 'xnd_development_P4qDfOss0OCpl8RtKrROHjaQYNCk9dN5lSfk+R1l9Wbe+rSiCwZ3jw==',
  })

  const { QrCode } = x
  const qrcodeSpecificOptions = {}
  const q = new QrCode(qrcodeSpecificOptions)

  const resp = await q.simulate({
    externalID: 'testing_id_123',
  })
  console.log(resp)
  res.status(200).json(resp)
}
