import propTypes from 'prop-types'
import cn from 'classnames'

import { useGetOrdersQuery } from '@store/order'

import OrderItem from './OrderItem'
import OrderItemSkeleton from './OrderItem/Skeleton'

import ImgEmpty from '@images/empty/empty-cart.svg?url'

import styles from './OrderTable.module.scss'

const OrderTable = ({ sort }) => {
  const { data: orders, isLoading } = useGetOrdersQuery()

  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <div className={cn(styles.column, styles.order)}>Номер заказа</div>
        <div className={cn(styles.column, styles.address)}>Регион / Район</div>
        <div className={cn(styles.column, styles.name)}>ФИО заказчика</div>
        <div className={cn(styles.column, styles.phone)}>Номер телефона</div>
        <div className={cn(styles.column, styles.status)}>Статус</div>
      </div>
      <div className={cn(styles.body, orders?.orders?.length === 0 && styles.isEmpty)}>
        {isLoading &&
          [...Array(8).keys()].map((_, index) => {
            return <OrderItemSkeleton key={index} />
          })}

        {!isLoading && orders?.orders?.length === 0 && (
          <div className={styles.empty}>
            <img
              src={ImgEmpty}
              alt='Empty Order'
            />
          </div>
        )}

        {!isLoading && orders?.orders?.length > 0 && (
          <>
            {sort &&
              [...orders.orders]?.reverse().map(({ userId, id, status }) => (
                <OrderItem
                  key={id}
                  userId={userId}
                  orderId={id}
                  status={status}
                  isLoading={isLoading}
                />
              ))}

            {!sort &&
              orders.orders?.map(({ userId, id, status }) => (
                <OrderItem
                  key={id}
                  userId={userId}
                  orderId={id}
                  status={status}
                />
              ))}
          </>
        )}
      </div>
    </div>
  )
}

OrderTable.propTypes = {
  sort: propTypes.bool,
}

export default OrderTable
