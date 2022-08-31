import { useState, useRef, memo } from 'react'

import cn from 'classnames'

import { useAuth } from '@hooks'

import { useLogoutMutation } from '@store/auth'

import { Button, Popover } from '@common'

import IconArrow from '@icons/arrow-down-line.svg'
import IconLogout from '@icons/logout-line.svg'

import styles from './UserTool.module.scss'

const UserTool = () => {
  const { user } = useAuth()
  const { first_name, last_name } = user || {}

  const [logout] = useLogoutMutation()

  const buttonRef = useRef()
  const [openPopper, setOpenPopper] = useState(false)

  const handleOpenPopper = () => {
    setOpenPopper(!openPopper)
  }
  const handleClosePopper = target => {
    if (buttonRef?.current && buttonRef?.current?.contains(target)) return

    setOpenPopper(false)
  }

  const handleLogout = async () => await logout()

  return (
    <div className={styles.wrapper}>
      <Button
        className={cn(styles.user, openPopper && styles.isOpen)}
        innerRef={buttonRef}
        label={`${first_name} ${last_name}`}
        icon={<IconArrow />}
        placement='right'
        size='sm'
        onClick={handleOpenPopper}
      />

      {openPopper && (
        <Popover
          className={styles.popover}
          refElement={buttonRef}
          strategy='fixed'
          offsetY={8}
          onClose={handleClosePopper}
          enabledWidth
        >
          <button
            type='button'
            onClick={handleLogout}
          >
            <IconLogout />
            <span>Выйти</span>
          </button>
        </Popover>
      )}
    </div>
  )
}

export default memo(UserTool)
