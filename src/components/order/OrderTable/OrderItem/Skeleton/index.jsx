import ContentLoader from 'react-content-loader'

import styles from './OrderItemSkeleton.module.scss'

const OrderItemSkeleton = () => {
  return (
    <ContentLoader
      title=''
      height='68'
      backgroundColor='#F6F5F4'
      foregroundColor='#EBE8E6'
      className={styles.skeleton}
    >
      <rect
        y='10'
        rx='4'
        ry='4'
        width='12%'
        height='20'
      />

      <rect
        x='calc(12% + 32px)'
        y='10'
        rx='4'
        ry='4'
        width='20%'
        height='20'
      />

      <rect
        x='calc(12% + 32px + 20% + 32px)'
        y='10'
        rx='4'
        ry='4'
        width='20%'
        height='20'
      />

      <rect
        x='calc(12% + 32px + 20% + 32px + 20% + 32px)'
        y='10'
        rx='4'
        ry='4'
        width='12%'
        height='20'
      />

      <rect
        x='calc(12% + 32px + 20% + 32px + 20% + 32px + 12% + 32px)'
        y='4'
        rx='4'
        ry='4'
        width='170'
        height='32'
      />

      <rect
        x='calc(100% - 28px)'
        y='8'
        rx='4'
        ry='4'
        width='24'
        height='24'
      />
    </ContentLoader>
  )
}

export default OrderItemSkeleton
