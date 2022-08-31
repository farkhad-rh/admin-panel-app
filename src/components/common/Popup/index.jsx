import { useRef, memo } from 'react'

import propTypes from 'prop-types'
import cn from 'classnames'

import { ClickOutside } from '@utils'

import { Portal } from '@common'

import styles from './Popup.module.scss'

const Popup = ({ className, children, isOpen, onClose, enableOverlay, enableLock }) => {
  if (!isOpen) return null

  const popupElement = useRef()

  return (
    <Portal>
      <ClickOutside
        refElement={popupElement}
        onClickOutside={onClose}
        enableLock={enableLock}
      >
        <div
          className={styles.container}
          role='dialog'
        >
          <div
            ref={popupElement}
            className={cn(styles.popup, className)}
          >
            {children}
          </div>

          {enableOverlay && (
            <div
              className={styles.overlay}
              role='button'
              aria-label='Overlay'
              tabIndex={0}
            />
          )}

          {enableLock && <div className={styles.lock} />}
        </div>
      </ClickOutside>
    </Portal>
  )
}

Popup.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  isOpen: propTypes.bool,
  onClose: propTypes.func,
  enableOverlay: propTypes.bool,
  enableLock: propTypes.bool,
}

Popup.defaultProps = {
  enableOverlay: true,
}

export default memo(Popup)
