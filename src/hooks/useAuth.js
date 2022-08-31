import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { getAuth, getUser, getToken } from '@store/auth'

export const useAuth = () => {
  const auth = useSelector(getAuth)
  const user = useSelector(getUser)
  const token = useSelector(getToken)

  return useMemo(() => ({ auth, user, token }), [auth, user, token])
}
