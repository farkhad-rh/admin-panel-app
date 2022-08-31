import { PROJ_DOMAIN, PROJ_API } from '@constants'

export const BASE_URL = `https://${PROJ_DOMAIN}${PROJ_API}`
export const AUTH_URL = `${BASE_URL}/auth-admin`
export const MERCHANT_URL = `${BASE_URL}/merchant`
export const ORDER_URL = `${BASE_URL}/order`
