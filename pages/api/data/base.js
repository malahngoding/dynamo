import { detaUser } from '@/lib/deta'
import { hashPassword } from '@/lib/bcrypt'
import { v4 as uuidv4 } from 'uuid'

export default async function handler(req, res) {
  const hashed = await hashPassword('developer')
  const key = uuidv4()

  detaUser.put(
    {
      name: 'Instead Bot',
      password: hashed,
    },
    'superadmin@malahngoding.com'
  )

  res.status(200).json({ name: 'John Doe', hashed })
}
