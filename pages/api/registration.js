import { detuser } from '@/lib/deta'
import { hashPassword } from '@/lib/bcrypt'

export default async function handler(req, res) {
  const { method, body } = req
  switch (method) {
    case 'POST':
      await detuser.put(
        {
          name: body.name,
          password: await hashPassword(body.password),
        },
        body.email
      )
      res.status(200).json({ messages: 'SUCCESS' })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
