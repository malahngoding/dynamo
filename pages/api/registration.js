import { detaUser } from '@/lib/deta'
import { hashPassword } from '@/lib/bcrypt'

export default async function handler(req, res) {
  const { method, body } = req
  switch (method) {
    case 'POST':
      await detaUser.get(body.email).then((res) => console.log(res))
      // await detaUser.put(
      //   {
      //     name: body.name,
      //     password: await hashPassword(body.password),
      //     registeredAt: new Date(),
      //   },
      //   body.email
      // )
      // res.status(200).json({ status: 'SUCCESS' })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
