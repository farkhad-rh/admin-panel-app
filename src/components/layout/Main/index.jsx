import propTypes from 'prop-types'

import styles from './Main.module.scss'

const Main = ({ children }) => {
  return <main className={styles.main}>{children}</main>
}

Main.propTypes = {
  children: propTypes.node,
}

export default Main
