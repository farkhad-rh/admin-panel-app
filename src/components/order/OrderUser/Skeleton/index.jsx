import ContentLoader from 'react-content-loader'

import styles from './OrderUserSkeleton.module.scss'

const OrderUserSkeleton = () => {
  return (
    <ContentLoader
      title=''
      height='212'
      backgroundColor='#F6F5F4'
      foregroundColor='#EBE8E6'
      className={styles.skeleton}
    >
      <rect
        rx='4'
        ry='4'
        width='145'
        height='24'
      />

      <rect
        x='8'
        y='48'
        rx='50%'
        ry='50%'
        width='24'
        height='24'
      />

      <rect
        x='44'
        y='52'
        rx='4'
        ry='4'
        width='100'
        height='16'
      />
      <rect
        x='172'
        y='52'
        rx='4'
        ry='4'
        width='80'
        height='16'
      />

      <rect
        x='44'
        y='86'
        rx='4'
        ry='4'
        width='60'
        height='16'
      />
      <rect
        x='172'
        y='86'
        rx='4'
        ry='4'
        width='90'
        height='16'
      />

      <rect
        x='44'
        y='120'
        rx='4'
        ry='4'
        width='100'
        height='16'
      />
      <rect
        x='172'
        y='120'
        rx='4'
        ry='4'
        width='105'
        height='16'
      />

      <rect
        x='8'
        y='150'
        rx='50%'
        ry='50%'
        width='24'
        height='24'
      />

      <rect
        x='44'
        y='154'
        rx='4'
        ry='4'
        width='120'
        height='16'
      />
      <rect
        x='172'
        y='154'
        rx='4'
        ry='4'
        width='120'
        height='16'
      />
    </ContentLoader>
  )
}

export default OrderUserSkeleton
