import ContentLoader from 'react-content-loader'

import styles from './OrderStatusSkeleton.module.scss'

const OrderStatusSkeleton = () => {
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
        width='70'
        height='24'
      />
      <rect
        x='calc(100% - 170px)'
        rx='4'
        ry='4'
        width='170'
        height='32'
      />

      <rect
        y='60'
        rx='4'
        ry='4'
        width='150'
        height='16'
      />
      <rect
        x='160'
        y='60'
        rx='4'
        ry='4'
        width='115'
        height='16'
      />

      <rect
        y='92'
        rx='4'
        ry='4'
        width='110'
        height='16'
      />
      <rect
        x='160'
        y='92'
        rx='4'
        ry='4'
        width='115'
        height='16'
      />

      <rect
        y='124'
        rx='4'
        ry='4'
        width='80'
        height='16'
      />
      <rect
        x='160'
        y='124'
        rx='4'
        ry='4'
        width='80'
        height='16'
      />

      <rect
        y='156'
        rx='4'
        ry='4'
        width='105'
        height='16'
      />
      <rect
        x='160'
        y='156'
        rx='4'
        ry='4'
        width='95'
        height='16'
      />
    </ContentLoader>
  )
}

export default OrderStatusSkeleton
