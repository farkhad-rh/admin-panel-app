import propTypes from 'prop-types'
import cn from 'classnames'

import { formatDate, formatTime } from '@utils'

import OrderStatusSkeleton from './Skeleton'

import IconWarning from '@icons/warning-sticker-fill.svg'
import IconInsurance from '@icons/insurance-fill.svg'
import IconClose from '@icons/close-round-fill.svg'

import styles from './OrderStatus.module.scss'

const OrderStatus = ({ status, createDate, updateDate, user, reason, isLoading }) => {
  const isWaiting = status === 'WAITING'
  const isSuccess = status === 'SUCCESS'
  const isCancel = status === 'DECLINED'

  const { first_name, last_name } = user || {}

  const classes = {
    [styles.isWaiting]: isWaiting,
    [styles.isSuccess]: isSuccess,
    [styles.isCancel]: isCancel,
  }

  if (isLoading) return <OrderStatusSkeleton />

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h5>Статус</h5>

        <div className={cn(styles.status, classes)}>
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
      </div>

      <div className={styles.info}>
        <div className={styles.row}>
          <div className={styles.label}>Дата формирования</div>
          <div className={styles.value}>
            {formatDate(new Date(createDate))}, {formatTime(new Date(createDate))}
          </div>
        </div>

        {status !== 'WAITING' && updateDate && (
          <div className={styles.row}>
            <div className={styles.label}>Дата проверки</div>
            <div className={styles.value}>
              {formatDate(new Date(updateDate))}, {formatTime(new Date(updateDate))}
            </div>
          </div>
        )}

        {user && (
          <div className={styles.row}>
            <div className={styles.label}>Менеджер</div>
            <div className={styles.value}>{`${first_name} ${last_name}`}</div>
          </div>
        )}

        {reason && (
          <div className={cn(styles.row, styles.isReason)}>
            <div className={styles.label}>Комментарий</div>
            <div className={styles.value}>{reason}</div>
          </div>
        )}
      </div>
    </div>
  )
}

OrderStatus.propTypes = {
  status: propTypes.string,
  createDate: propTypes.string,
  updateDate: propTypes.string,
  user: propTypes.object,
  reason: propTypes.string,
  isLoading: propTypes.bool,
}

export default OrderStatus
