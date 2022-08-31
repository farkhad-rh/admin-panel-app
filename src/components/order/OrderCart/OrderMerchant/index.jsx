import { useState } from 'react'

import propTypes from 'prop-types'
import cn from 'classnames'

// import { formatPhone } from '@utils'

import OrderItem from '../OrderItem'

import IconArrow from '@icons/arrow-down-line.svg'
// import IconWarning from '@icons/warning-round-fill.svg'

import styles from './OrderMerchant.module.scss'

const OrderMerchant = ({ name, products }) => {
  const [open, setOpen] = useState(true)

  const handleOpen = () => setOpen(!open)

  return (
    <div className={cn(styles.wrapper, open && styles.isOpen)}>
      <div
        className={styles.head}
        onClick={handleOpen}
      >
        <div className={styles.arrow}>
          <IconArrow />
        </div>

        <h5 className={styles.merchant}>{name}</h5>

        {/* <h5 className={styles.phone}>
          +{formatPhone(998900000000)}
          <IconWarning />
        </h5> */}
      </div>

      {open && (
        <div className={styles.body}>
          {products.map(({ productId, product, productPrice, qty, totalPrice }) => (
            <OrderItem
              key={productId}
              product={product}
              price={productPrice}
              quantity={qty}
              totalPrice={totalPrice}
            />
          ))}
        </div>
      )}
    </div>
  )
}

OrderMerchant.propTypes = {
  name: propTypes.string.isRequired,
  products: propTypes.array.isRequired,
}

export default OrderMerchant
