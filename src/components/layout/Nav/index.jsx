import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'
import {
  // CATALOG_ROUTE,
  // FEATURE_ROUTE,
  // ARCHIVE_ROUTE,
  // MERCHANT_ROUTE,
  // PRICING_ROUTE,
  // PRODUCT_ROUTE,d
  // STORE_ROUTE,
  ORDER_ROUTE,
} from '@constants'

// import IconCategories from '@icons/categories-scheme-line.svg'
// import IconCharacteristics from '@icons/characteristics-line.svg'
// import IconProduct from '@icons/product-line.svg'
// import IconCart from '@icons/shopping-cart-line.svg'
// import IconDocument from '@icons/document-line.svg'
// import IconShop from '@icons/shop-line.svg'
import IconBox from '@icons/box-line.svg'

import styles from './Nav.module.scss'

const Nav = () => {
  const addClasses = ({ isActive }) => {
    const defaultClasses = [styles.link]

    if (isActive) defaultClasses.push(styles.isActive)

    return defaultClasses.join(' ')
  }

  return (
    <nav className={styles.nav}>
      {/* <NavLink
        to={CATALOG_ROUTE}
        className={addClasses}
      >
        <IconCategories />
        <span>Каталог</span>
      </NavLink>

      <NavLink
        to={FEATURE_ROUTE}
        className={addClasses}
      >
        <IconCharacteristics />
        <span>Характеристики</span>
      </NavLink>

      <NavLink
        to={PRODUCT_ROUTE}
        className={addClasses}
      >
        <IconProduct />
        <span>Товары</span>
      </NavLink>

      <NavLink
        to={ARCHIVE_ROUTE}
        className={addClasses}
      >
        <IconCart />
        <span>Архив</span>
      </NavLink>

      <NavLink
        to={PRICING_ROUTE}
        className={addClasses}
      >
        <IconDocument />
        <span>Прайс-листы</span>
      </NavLink>

      <NavLink
        to={MERCHANT_ROUTE}
        className={addClasses}
      >
        <IconShop />
        <span>Мерчанты</span>
      </NavLink>

      <NavLink
        to={STORE_ROUTE}
        className={addClasses}
      >
        <IconCart />
        <span>Магазины</span>
      </NavLink> */}

      <NavLink
        to={ORDER_ROUTE}
        className={addClasses}
      >
        <IconBox />
        <span>Заказы</span>
      </NavLink>
    </nav>
  )
}

Nav.propTypes = {
  isActive: propTypes.bool,
}

export default Nav
