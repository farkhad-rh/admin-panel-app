import propTypes from 'prop-types'
import cn from 'classnames'

import { formatSum } from '@utils'
import { useGetMerchantsQuery } from '@store/merchant'

import OrderCartSkeleton from './Skeleton'
import OrderMerchant from './OrderMerchant'

import styles from './OrderCart.module.scss'

const OrderCart = ({ cart, totalSum, isLoading }) => {
  const { data: merchants, isLoading: isLoadingMerchant } = useGetMerchantsQuery()

  const filterMerchant = merchants?.items?.map(({ id, name }) => ({
    name: name,
    products: cart?.filter(({ merchantId }) => [id].includes(merchantId)),
  }))

  const totalCount = cart?.reduce((acc, { qty }) => acc + qty, 0)

  if (isLoading || isLoadingMerchant) return <OrderCartSkeleton count={cart?.length} />

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {filterMerchant?.map(({ name, products }, index) => (
            <OrderMerchant
              key={index}
              name={name}
              products={products}
            />
          ))}
        </div>

        <div className={styles.total}>
          <div className={styles.label}>Итоговая стоимость:</div>
          <div className={cn(styles.number, styles.count)}>{totalCount}</div>
          <div className={cn(styles.number, styles.price)}>{formatSum(totalSum)}</div>
        </div>
      </div>
    </>
  )
}

OrderCart.propTypes = {
  cart: propTypes.array,
  totalSum: propTypes.string,
  isLoading: propTypes.bool,
}

export default OrderCart
