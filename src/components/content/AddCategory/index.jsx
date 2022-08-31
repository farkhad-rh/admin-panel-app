import { useState, useRef } from 'react'

import { Button, Popover } from '@common'

import FormPopup from './FormPopup'

import IconPlus from '@icons/plus-line.svg'

import styles from './AddCategory.module.scss'

const popperList = [
  {
    name: 'Категория (1 уровень)',
  },
  {
    name: 'Подкатегория (2 уровень)',
  },
  {
    name: 'Подкатегория (3 уровень)',
  },
]

const AddCategory = () => {
  const buttonRef = useRef()
  const toolRef = useRef([])
  const [openPopper, setOpenPopper] = useState(false)
  const [openPopup, setOpenPopup] = useState(false)
  const [level, setLevel] = useState(null)

  const handleOpenPopper = () => setOpenPopper(!openPopper)
  const handleClosePopper = target => {
    if (buttonRef?.current && buttonRef?.current?.contains(target)) return

    setOpenPopper(false)
  }

  const handleOpenPopup = lvl => {
    setLevel(lvl)
    setOpenPopup(!openPopup)
  }
  const handleClosePopup = target => {
    if (toolRef?.current && toolRef?.current?.some(el => el.contains(target?.target || target)))
      return

    setOpenPopup(false)
    setOpenPopper(false)
  }

  return (
    <>
      <Button
        innerRef={buttonRef}
        label='Добавить'
        icon={<IconPlus />}
        appearance='primary'
        onClick={handleOpenPopper}
      />

      {(openPopper || openPopup) && (
        <Popover
          className={styles.popover}
          refElement={buttonRef}
          offsetY={-8}
          onClose={handleClosePopper}
        >
          {popperList?.map(({ icon, name }, index) => {
            return (
              <button
                ref={ref => (toolRef.current[index] = ref)}
                key={name}
                type='button'
                onClick={() => handleOpenPopup(index + 1)}
              >
                {icon && icon}
                <span>{name}</span>
              </button>
            )
          })}
        </Popover>
      )}

      <FormPopup
        level={level}
        isOpen={openPopup}
        onClose={handleClosePopup}
      />
    </>
  )
}

export default AddCategory
