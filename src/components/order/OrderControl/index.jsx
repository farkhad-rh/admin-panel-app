import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import propTypes from 'prop-types'
import cn from 'classnames'

import { useHandleOrderMutation } from '@store/order'

import { Button } from '@common'

import ReasonPopup from './ReasonPopup'

import styles from './OrderControl.module.scss'

const OrderControl = ({ userId, orderId, status }) => {
  const navigate = useNavigate()

  const [handleOrder, { isLoading, isSuccess }] = useHandleOrderMutation()

  const buttonRef = useRef()
  const [openReason, setOpenReason] = useState(false)

  const handleOpenReason = () => setOpenReason(!openReason)
  const handleCloseReason = target => {
    if (buttonRef?.current && buttonRef?.current?.contains(target?.target || target)) return

    setOpenReason(false)
  }

  const handleConfirm = async () => {
    await handleOrder({ userId: userId, orderId: orderId })
  }

  const handleBack = () => navigate('/')

  useEffect(() => {
    if (isSuccess) {
      handleBack()
    }
  }, [isSuccess])

  if (status !== 'WAITING') return null

  return (
    <div className={styles.wrapper}>
      <Button
        className={cn(styles.button, styles.cancel)}
        innerRef={buttonRef}
        label='Отменить заказ'
        onClick={handleOpenReason}
        isDisabled={isLoading}
      />

      <Button
        className={styles.button}
        label={isLoading ? 'Отправка...' : 'Подтвердить заказ'}
        appearance='primary'
        onClick={handleConfirm}
        isDisabled={isLoading}
      />

      <ReasonPopup
        userId={userId}
        orderId={orderId}
        isOpen={openReason}
        onClose={handleCloseReason}
      />
    </div>
  )
}

OrderControl.propTypes = {
  userId: propTypes.number.isRequired,
  orderId: propTypes.number.isRequired,
  status: propTypes.string,
}

export default OrderControl
