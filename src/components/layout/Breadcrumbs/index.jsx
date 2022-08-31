import { Link } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

import propTypes from 'prop-types'

import IconArrow from '@icons/arrow-small-right-line.svg'

import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = ({ routes, disableDefaults }) => {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: disableDefaults })

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <span
          key={index}
          className={styles.breadcrumb}
        >
          <Link
            to={match?.route?.link || match?.pathname}
            className='text-link'
          >
            {breadcrumb}
          </Link>
          {index < breadcrumbs.length - 1 && <IconArrow />}
        </span>
      ))}
    </div>
  )
}

Breadcrumbs.propTypes = {
  routes: propTypes.arrayOf(propTypes.object),
  disableDefaults: propTypes.bool,
}

Breadcrumbs.defaultProps = {
  disableDefaults: true,
}

export default Breadcrumbs
