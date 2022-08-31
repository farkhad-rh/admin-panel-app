import propTypes from 'prop-types'

import { formatSum } from '@utils'

import ImgStaticPhone from '@images/mocks/phone.png'

import styles from './OrderItem.module.scss'

const OrderItem = ({ product, price, quantity, totalPrice }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={ImgStaticPhone} />
      </div>

      <div className={styles.info}>
        <div className={styles.name}>{product?.name_ru}</div>

        <div className={styles.cost}>
          <p className={styles.price}>Стоимость: {formatSum(price)} сум</p>
          <p className={styles.count}>Кол-во: {quantity} шт</p>
          <p className={styles.price}>Сумма: {formatSum(totalPrice)} сум</p>
        </div>
      </div>
    </div>
  )
}

OrderItem.propTypes = {
  product: propTypes.object.isRequired,
  price: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
  totalPrice: propTypes.string.isRequired,
}

export default OrderItem
