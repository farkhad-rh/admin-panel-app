import propTypes from 'prop-types'

import { Button } from '@common'

import ImageLogo from '@images/amanat-logo.svg?url'
import IconArrow from '@icons/arrow-left-line.svg'

import styles from './Sidebar.module.scss'

const Sidebar = ({ children }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img
          src={ImageLogo}
          alt='Amanat'
        />
      </div>

      <div className={styles.menu}>{children}</div>

      <Button
        className={styles.toggle}
        icon={<IconArrow />}
        size='xs'
      />
    </div>
  )
}

Sidebar.propTypes = {
  children: propTypes.node,
}

export default Sidebar
