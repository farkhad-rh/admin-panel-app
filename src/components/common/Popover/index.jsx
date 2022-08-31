import { useRef, memo } from 'react'
import { Popper } from 'react-popper'

import propTypes from 'prop-types'
import cn from 'classnames'

import { ClickOutside } from '@utils'

import { Portal } from '@common'

import styles from './Popover.module.scss'

const Popover = ({
  refElement,
  strategy,
  placement,
  offsetX,
  offsetY,
  className,
  children,
  onClose,
  enabledWidth,
  enableOverlay,
  enableLock,
}) => {
  const popperElement = useRef()

  return (
    <Portal>
      <ClickOutside
        refElement={popperElement}
        onClickOutside={onClose}
        enableLock={enableLock}
      >
        <Popper
          innerRef={popperElement}
          referenceElement={refElement.current}
          strategy={strategy}
          placement={placement}
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: [offsetX, offsetY],
              },
            },
            {
              name: 'sameWidth',
              enabled: enabledWidth,
              fn: ({ state }) => {
                state.styles.popper.width = `${state.rects.reference.width}px`
              },
              phase: 'beforeWrite',
              requires: ['computeStyles'],
            },
          ]}
        >
          {({ ref, style }) => (
            <div
              ref={ref}
              style={style}
              className={cn(styles.popover, className)}
            >
              {children}
            </div>
          )}
        </Popper>

        {enableOverlay && (
          <div
            className={styles.overlay}
            role='button'
            aria-label='Overlay'
            tabIndex={0}
          />
        )}
      </ClickOutside>
    </Portal>
  )
}

Popover.propTypes = {
  refElement: propTypes.object.isRequired,
  strategy: propTypes.string,
  placement: propTypes.string,
  offsetX: propTypes.number,
  offsetY: propTypes.number,
  className: propTypes.string,
  children: propTypes.node,
  onClose: propTypes.func,
  enabledWidth: propTypes.bool,
  enableOverlay: propTypes.bool,
  enableLock: propTypes.bool,
}

Popover.defaultProps = {
  placement: 'bottom-end',
  offsetX: 0,
  offsetY: 0,
  enabledWidth: false,
}

export default memo(Popover)
