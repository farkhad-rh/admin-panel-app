import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'

import propTypes from 'prop-types'
import cn from 'classnames'

import { USER_ROUTE } from '@constants'
import { useLoginMutation } from '@store/auth'

import { Button, InputCode } from '@common'

import IconArrow from '@icons/arrow-big-left-line.svg'

import styles from './ConfirmForm.module.scss'

const ConfirmForm = ({ phone, setPhone }) => {
  const navigate = useNavigate()

  const {
    handleSubmit: onSubmit,
    control,
    setValue,
    setError,
    clearErrors,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: { code: '' },
  })
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation()

  const handleBack = () => setPhone(prevState => ({ ...prevState, check: false }))

  const handleInput = value => {
    setValue('code', value)
    clearErrors()
  }

  const handleSubmit = async data => {
    await login({ ...phone, ...data })
  }

  useEffect(() => {
    if (isSuccess) {
      navigate(USER_ROUTE)
    }

    if (isError) {
      const errorMessage =
        error?.status === 404
          ? 'Неверный код подверждения'
          : error?.status === 500
          ? `Ошибка сервера: ${error?.data?.errors?.details || error?.data?.errors}`
          : 'Ошибка, повторите снова'

      setError('code', { type: 'custom', message: errorMessage })
    }
  }, [isSuccess, isError])

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit(handleSubmit)}
    >
      <Controller
        name='code'
        control={control}
        rules={{
          required: 'Введите код подверждения',
          minLength: {
            value: 6,
            message: 'Код подверждения должен содержать 6 цифр',
          },
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <InputCode
            className={styles.code}
            label='Пароль из СМС'
            error={error?.message}
            value={value}
            onChange={onChange}
            onInput={handleInput}
          />
        )}
      />

      {/* // TODO change to normal loading */}
      {isLoading && <div className={styles.loading}>Загрузка...</div>}

      <div className={styles.buttons}>
        <Button
          className={cn(styles.button, styles.back)}
          label='Назад'
          icon={<IconArrow />}
          isDisabled={isLoading}
          onClick={handleBack}
        />

        <Button
          className={cn(styles.button, styles.confirm)}
          label='Подвердить'
          appearance='primary'
          type='submit'
          isDisabled={isLoading}
        />
      </div>
    </form>
  )
}

ConfirmForm.propTypes = {
  phone: propTypes.object,
  setPhone: propTypes.func,
}

export default ConfirmForm
