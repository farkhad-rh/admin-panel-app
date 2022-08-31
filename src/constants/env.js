import CryptoJS from 'crypto-js'

const ENCRYPT_DOMAIN = import.meta.env.DEV
  ? 'U2FsdGVkX1/XE5BonqFvVfHYhuAbZIHf5dS/1yws0m2IAbmm4lC762sK8uuGidhN'
  : CryptoJS.AES.encrypt(window.location.hostname, import.meta.env.BASE_URL)

const ENCRYPT_MARKETPLACE_DOMAIN =
  import.meta.env.DEV || window.location.hostname.includes('dev')
    ? 'U2FsdGVkX1/72L7zBTtoxHmDKv7LpM1lCH8mg3HSNeY='
    : 'U2FsdGVkX1+RAKgV8+MPoXOXaMIfnEC+KaF5FhFgMCU='

export const PROJ_DOMAIN = CryptoJS.AES.decrypt(ENCRYPT_DOMAIN, import.meta.env.BASE_URL).toString(
  CryptoJS.enc.Utf8
)

export const PROJ_MARKETPLACE_DOMAIN = CryptoJS.AES.decrypt(
  ENCRYPT_MARKETPLACE_DOMAIN,
  import.meta.env.BASE_URL
).toString(CryptoJS.enc.Utf8)

export const PROJ_API = CryptoJS.AES.decrypt(
  'U2FsdGVkX1+lAw/Vd8yK0KfFgy7lKKAjDXgy5c65vWk=',
  import.meta.env.BASE_URL
).toString(CryptoJS.enc.Utf8)
