import { Deta } from 'deta'

const deta = Deta(process.env.DETA_KEY)

export const detaBase = deta.Base('base')

export const detaUser = deta.Base('user')

export const detaLog = deta.Base('logs')
