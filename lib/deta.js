import { Deta } from 'deta'

const deta = Deta(process.env.DETA_KEY)

export const detaBase = deta.Base('base')

export const detuser = deta.Base('user')
