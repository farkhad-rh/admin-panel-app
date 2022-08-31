import propTypes from 'prop-types'

import { formatPhone } from '@utils'

import OrderUserSkeleton from './Skeleton'

import IconUser from '@icons/user-fill.svg'
import IconPhone from '@icons/phone-fill.svg'

import styles from './OrderUser.module.scss'

const OrderUser = ({ user, isLoading }) => {
  const lastName = user?.fullName.split(' ')[0]
  const firsName = user?.fullName.split(' ')[1]
  const middleName = user?.fullName.split(' ')[2]

  if (isLoading) return <OrderUserSkeleton />

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>Личные данные</h5>

      <div className={styles.info}>
        <div className={styles.icon}>
          <IconUser />
        </div>

        <div className={styles.list}>
          <div className={styles.row}>
            <div className={styles.label}>Фамилия</div>
            <div className={styles.value}>{lastName}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.label}>Имя</div>
            <div className={styles.value}>{firsName}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.label}>Отчество</div>
            <div className={styles.value}>{middleName}</div>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.icon}>
          <IconPhone />
        </div>

        <div className={styles.list}>
          <div className={styles.row}>
            <div className={styles.label}>Номер телефона</div>
            <div className={styles.value}>+{formatPhone(user?.linkedNumber)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

OrderUser.propTypes = {
  user: propTypes.object,
  isLoading: propTypes.bool,
}

export default OrderUser
