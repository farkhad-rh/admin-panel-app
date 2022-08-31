import propTypes from 'prop-types'

import styles from './Toolbar.module.scss'

const Toolbar = ({ title, count, children }) => {
  return (
    <div className={styles.toolbar}>
      {title && (
        <h1 className={styles.title}>
          {title}

          {count && <span className={styles.count}>{count}</span>}
        </h1>
      )}

      {children}
    </div>
  )
}

Toolbar.propTypes = {
  title: propTypes.string,
  count: propTypes.string,
  children: propTypes.node,
}

export default Toolbar
