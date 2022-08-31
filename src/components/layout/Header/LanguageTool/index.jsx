import { useState, useRef, memo } from 'react'

import cn from 'classnames'

import { Button, Popover } from '@common'

import IconArrow from '@icons/arrow-down-line.svg'

import styles from './LanguageTool.module.scss'

const LanguageTool = () => {
  const buttonRef = useRef()
  const [openPopper, setOpenPopper] = useState(false)

  const handleOpenPopper = () => {
    setOpenPopper(!openPopper)
  }
  const handleClosePopper = target => {
    if (buttonRef?.current && buttonRef?.current?.contains(target)) return

    setOpenPopper(false)
  }

  return (
    <div className={styles.wrapper}>
      <Button
        className={cn(styles.language, openPopper && styles.isOpen)}
        innerRef={buttonRef}
        label='RU'
        icon={<IconArrow />}
        placement='right'
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
          <button type='button'>UZ</button>
        </Popover>
      )}
    </div>
  )
}

export default memo(LanguageTool)
