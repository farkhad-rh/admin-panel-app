import { useNavigate, useParams } from 'react-router-dom'

import { USER_ROUTE, ORDER_ROUTE } from '@constants'
import { useGetOrderQuery } from '@store/order'

import { Breadcrumbs } from '@layout'
import { Button } from '@common'
import { OrderUser, OrderStatus, OrderCart, OrderControl } from '@order'

import IconArrow from '@icons/arrow-big-left-line.svg'

import styles from './OrderDetail.module.scss'

const OrderDetail = () => {
  const navigate = useNavigate()
  const params = useParams()

  const BreadcrumbDynamic = ({ match }) => `№${match.params.orderId}`
  const BreadcrumbRoutes = [
    { path: `${USER_ROUTE}/${ORDER_ROUTE}`, breadcrumb: 'Заказы' },
    { path: `${USER_ROUTE}/${ORDER_ROUTE}/:userId/:orderId`, breadcrumb: BreadcrumbDynamic },
  ]

  const { data: order, isLoading } = useGetOrderQuery(
    {
      userId: +params?.userId,
      orderId: +params?.orderId,
    },
    { refetchOnMountOrArgChange: true }
  )
  const {
    addressInformation,
    amount,
    cart,
    status,
    createdAt,
    updatedAt,
    handledByUser,
    declineReason,
  } = order || {}

  const handleBack = () => navigate('/')

  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <Breadcrumbs routes={BreadcrumbRoutes} />

        <OrderUser
          user={addressInformation}
          isLoading={isLoading}
        />

        <OrderStatus
          status={status}
          createDate={createdAt}
          updateDate={updatedAt}
          user={handledByUser}
          reason={declineReason}
          isLoading={isLoading}
        />
      </div>

      <div className={styles.cart}>
        <h5 className={styles.title}>Детали заказа</h5>

        <OrderCart
          cart={cart}
          totalSum={amount}
          isLoading={isLoading}
        />
      </div>

      <div className={styles.buttons}>
        <Button
          className={styles.button}
          label='Назад'
          icon={<IconArrow />}
          onClick={handleBack}
        />

        <OrderControl
          userId={+params?.userId}
          orderId={+params?.orderId}
          status={status}
        />
      </div>
    </div>
  )
}
export default OrderDetail
