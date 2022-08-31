import { Link } from 'react-router-dom'

import propTypes from 'prop-types'
import cn from 'classnames'

import { formatPhone } from '@utils'
import { useGetOrderQuery } from '@store/order'

import OrderItemSkeleton from './Skeleton'

import IconWarning from '@icons/warning-sticker-fill.svg'
import IconInsurance from '@icons/insurance-fill.svg'
import IconClose from '@icons/close-round-fill.svg'
import IconArrow from '@icons/arrow-big-right-line.svg'

import styles from './OrderItem.module.scss'

const OrderItem = ({ userId, orderId, status }) => {
  const {
    data: order,
    isLoading,
    isError,
  } = useGetOrderQuery({
    userId: userId,
    orderId: orderId,
  })
  const { addressInformation, deliveryInformation } = order || {}

  const isWaiting = status === 'WAITING'
  const isSuccess = status === 'SUCCESS'
  const isCancel = status === 'DECLINED'

  const classes = {
    [styles.isWaiting]: isWaiting,
    [styles.isSuccess]: isSuccess,
    [styles.isCancel]: isCancel,
  }

  if (isLoading || isError) return <OrderItemSkeleton />

  return (
    <Link
      to={`${userId}/${orderId}`}
      className={cn(styles.item, classes)}
    >
      <div className={cn(styles.column, styles.order)}>№{orderId}</div>

      <div className={cn(styles.column, styles.address)}>
        {deliveryInformation?.region}, &nbsp;
        {deliveryInformation?.region?.length > 15 && <br />}
        {deliveryInformation?.area}
      </div>

      <div className={cn(styles.column, styles.name)}>{addressInformation?.fullName}</div>

      <div className={cn(styles.column, styles.phone)}>
        +{formatPhone(addressInformation?.linkedNumber)}
      </div>

      <div className={cn(styles.column, styles.status, classes)}>
        {isWaiting && (
          <>
            <IconWarning />
            <span>Новый</span>
          </>
        )}
        {isSuccess && (
          <>
            <IconInsurance />
            <span>Подтвержденный</span>
          </>
        )}
        {isCancel && (
          <>
            <IconClose />
            <span>Отмененный</span>
          </>
        )}
      </div>

      <div className={styles.arrow}>
        <IconArrow />
      </div>
    </Link>
  )
}

OrderItem.propTypes = {
  userId: propTypes.number.isRequired,
  orderId: propTypes.number.isRequired,
  status: propTypes.string.isRequired,
}

export default OrderItem
