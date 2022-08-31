import { useState, useRef } from 'react'

import propTypes from 'prop-types'
import cn from 'classnames'

import { Popover } from '@common'

import IconMore from '@icons/more-line.svg'
import IconCategories from '@icons/categories-line.svg'

const TabItem = ({ index, label, tool, isActive, onClick }) => {
  const buttonRef = useRef()
  const [openPopper, setOpenPopper] = useState(false)

  const handleOpenPopper = () => setOpenPopper(!openPopper)
  const handleClosePopper = target => {
    if (buttonRef?.current && buttonRef?.current?.contains(target)) return

    setOpenPopper(false)
  }

  const handleFeature = () => console.log('handleFeature')
  const handleEdit = () => console.log('handleEdit')
  const handleArchive = () => console.log('handleArchie')

  return (
    <>
      <div
        className={cn('tabs-item', index === isActive && 'isActive')}
        onClick={() => onClick(index)}
      >
        {label}

        {tool && (
          <button
            ref={buttonRef}
            onClick={handleOpenPopper}
          >
            <IconMore />
          </button>
        )}
      </div>

      {openPopper && (
        <Popover
          refElement={buttonRef}
          offsetX={8}
          offsetY={10}
          onClose={handleClosePopper}
          className='tabs-popover'
        >
          <button
            type='button'
            onClick={handleFeature}
          >
            <IconCategories />
            Характеристики
          </button>
          <button
            type='button'
            onClick={handleEdit}
          >
            <IconCategories />
            Переименовать
          </button>
          <button
            type='button'
            onClick={handleArchive}
          >
            <IconCategories />
            Архивировать
          </button>
        </Popover>
      )}
    </>
  )
}

TabItem.propTypes = {
  index: propTypes.number,
  label: propTypes.string,
  tool: propTypes.bool,
  isActive: propTypes.number,
  onClick: propTypes.func,
}

export default TabItem
