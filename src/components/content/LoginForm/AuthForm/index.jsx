import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'

import propTypes from 'prop-types'
import cn from 'classnames'

import { useOtpPhoneMutation } from '@store/auth'

import { Button, InputMask } from '@common'

import IconArrow from '@icons/arrow-big-right-line.svg'

import styles from './AuthForm.module.scss'

const AuthForm = ({ phone, setPhone }) => {
  const {
    handleSubmit: onSubmit,
    control,
    setValue,
    setError,
    clearErrors,
    reset,
  } = useForm({
    mode: 'onSubmit',
  })
  const [otpPhone, { isLoading, isSuccess, isError, error }] = useOtpPhoneMutation()

  const [help, setHelp] = useState(false)

  const handleFocus = ({ target }) => target?.value === '' && setValue('phone', ' ')
  const handleBlur = ({ target }) => {
    target?.value === '+ 998 ( ' && setValue('phone', '')
    clearErrors()
    setHelp(false)
  }

  const handleSubmit = async phone => {
    setPhone(prevState => ({ ...prevState, ...phone }))
    await otpPhone(phone)
  }

  useEffect(() => {
    if (isSuccess) {
      setPhone(prevState => ({ ...prevState, check: true }))
    }

    if (isError) {
      const errorMessage =
        error?.status === 404
          ? 'Пользователь не найден'
          : error?.status === 500
          ? `Ошибка сервера: ${error?.data?.errors?.details || error?.data?.errors}`
          : 'Ошибка, повторите снова'

      setError('phone', { type: 'custom', message: errorMessage })
      setHelp(true)
    }
  }, [isSuccess, isError])

  useEffect(() => {
    if (phone) {
      reset({
        phone: phone.phone,
      })
    }
  }, [reset])

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit(handleSubmit)}
    >
      <Controller
        name='phone'
        control={control}
        rules={{
          required: 'Введите номер телефона',
          minLength: {
            value: 12,
            message: 'Номер телефона должен содержать 12 цифр',
          },
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <InputMask
            className={styles.phone}
            label='Номер телефона'
            error={error?.message}
            value={value}
            onAccept={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            isLoading={isLoading}
          />
        )}
      />

      {help && (
        <p className={styles.help}>
          Проверьте корректность введённых данных
          <br />
          или обратитель к владельцу компании для регистрации.
        </p>
      )}

      <div className={styles.buttons}>
        <Button
          className={cn(styles.button, styles.confirm)}
          label='Продолжить'
          icon={<IconArrow />}
          placement='right'
          appearance='primary'
          type='submit'
          isDisabled={isLoading}
        />
      </div>
    </form>
  )
}

AuthForm.propTypes = {
  phone: propTypes.object,
  setPhone: propTypes.func,
}

export default AuthForm
