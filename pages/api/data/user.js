import { detaUser } from '@/lib/deta'
import { comparePassword } from '@/lib/bcrypt'

export default async function handler(req, res) {
  const email = 'superadmin@malahngoding.com'
  const password = 'developer'

  const data = await detaUser.get(email)

  const isPasswordCorrect = await comparePassword(password, data.password)

  if (isPasswordCorrect) {
    res.status(200).json({ message: 'success' })
  } else {
    res.status(401).json({ message: 'not authorized' })
  }
}
