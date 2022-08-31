import { useState } from 'react'

import AuthForm from './AuthForm'
import ConfirmForm from './ConfirmForm'

import styles from './LoginForm.module.scss'

const LoginForm = () => {
  const [phone, setPhone] = useState({
    phone: null,
    check: false,
  })

  return (
    <div className={styles.wrapper}>
      <h2>Кабинет администратора</h2>

      {!phone?.check && (
        <AuthForm
          phone={phone}
          setPhone={setPhone}
        />
      )}

      {phone?.check && (
        <ConfirmForm
          phone={phone}
          setPhone={setPhone}
        />
      )}
    </div>
  )
}

export default LoginForm
