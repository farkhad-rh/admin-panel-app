import { useState } from 'react'

import cn from 'classnames'

import { Button } from '@common'
import { Toolbar } from '@content'
import { OrderTable } from '@order'

import IconFilter from '@icons/filter-up-line.svg'

import styles from './OrderList.module.scss'

const OrderList = () => {
  const [sort, setSort] = useState(false)

  const handleSort = () => setSort(!sort)

  return (
    <>
      <Toolbar title='Заказы'>
        <Button
          className={cn(styles.button, sort && styles.isSort)}
          icon={<IconFilter />}
          size='xs'
          onClick={handleSort}
        />
      </Toolbar>

      <OrderTable sort={sort} />
    </>
  )
}

export default OrderList
