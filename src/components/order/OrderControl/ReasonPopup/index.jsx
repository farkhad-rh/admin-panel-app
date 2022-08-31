import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import propTypes from 'prop-types'

import { useDeclineOrderMutation } from '@store/order'

import { Button, Input, Popup } from '@common'

import IconClose from '@icons/close-line.svg'

import styles from './ReasonPopup.module.scss'

const ReasonPopup = ({ userId, orderId, isOpen, onClose }) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
  })
  const [declineOrder, { isLoading, isSuccess }] = useDeclineOrderMutation()

  const handleSubmit = async reason => {
    await declineOrder({ userId: userId, orderId: orderId, ...reason })
  }

  const handleBack = () => navigate('/')

  useEffect(() => {
    if (isSuccess) {
      handleBack()
    }
  }, [isSuccess])

  useEffect(() => {
    reset()
  }, [isOpen])

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        className={styles.form}
        onSubmit={onSubmit(handleSubmit)}
      >
        <div className={styles.title}>
          Причина отмены заказа
          <Button
            className={styles.close}
            icon={<IconClose />}
            size='xs'
            onClick={onClose}
          />
        </div>

        <Input
          className={styles.reason}
          error={errors?.reason?.message}
          placeholder='Введите причину отмены'
          isLoading={isLoading}
          {...register('declineReason', { required: 'Заполните поле' })}
        />

        <div className={styles.buttons}>
          <Button
            label='Отмена'
            onClick={onClose}
            className={styles.cancel}
          />

          <Button
            label='Подтвердить'
            type='submit'
            appearance='primary'
            className={styles.confirm}
            isDisabled={isLoading}
          />
        </div>
      </form>
    </Popup>
  )
}

ReasonPopup.propTypes = {
  userId: propTypes.number.isRequired,
  orderId: propTypes.number.isRequired,
  isOpen: propTypes.bool,
  onClose: propTypes.func,
}

export default ReasonPopup
