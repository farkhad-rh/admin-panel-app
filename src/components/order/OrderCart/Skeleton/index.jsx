import { Fragment } from 'react'
import ContentLoader from 'react-content-loader'

import propTypes from 'prop-types'

import styles from './OrderCartSkeleton.module.scss'

const OrderCartSkeleton = ({ count }) => {
  return (
    <ContentLoader
      title=''
      height={`calc(32px + 24px + 20px + ${count} * 80px + ${count} * 24px - 16px)`}
      backgroundColor='#F6F5F4'
      foregroundColor='#EBE8E6'
      className={styles.skeleton}
    >
      <rect
        x='2'
        y='2'
        rx='4'
        ry='4'
        width='20'
        height='20'
      />
      <rect
        x='40'
        rx='4'
        ry='4'
        width='380'
        height='24'
      />
      <rect
        x='calc(100% - 190px)'
        rx='4'
        ry='4'
        width='190'
        height='24'
      />

      {[...Array(count).keys()].map((_, index) => {
        return (
          <Fragment key={index}>
            <rect
              x='36'
              y={`calc(44 + 104 * ${index})`}
              rx='4'
              ry='4'
              width='80'
              height='80'
            />
            <rect
              x='calc(36 + 80 + 16)'
              y={`calc(62 + 104 * ${index})`}
              rx='4'
              ry='4'
              width='240'
              height='16'
            />
            <rect
              x='calc(36 + 80 + 16)'
              y={`calc(88 + 104 * ${index})`}
              rx='4'
              ry='4'
              width='184'
              height='16'
            />
            <rect
              x='calc(36 + 80 + 16 + 184 + 72)'
              y={`calc(88 + 104 * ${index})`}
              rx='4'
              ry='4'
              width='84'
              height='16'
            />
            <rect
              x='calc(36 + 80 + 16 + 184 + 72 + 84 + 72)'
              y={`calc(88 + 104 * ${index})`}
              rx='4'
              ry='4'
              width='184'
              height='16'
            />
          </Fragment>
        )
      })}
    </ContentLoader>
  )
}

OrderCartSkeleton.propTypes = {
  count: propTypes.number,
}

OrderCartSkeleton.defaultProps = {
  count: 2,
}

export default OrderCartSkeleton
