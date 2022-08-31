import { forwardRef, memo } from 'react'

import propTypes from 'prop-types'
import cn from 'classnames'

import IconCheck from '@icons/check.svg'

import styles from './Checkbox.module.scss'

const Checkbox = forwardRef(
  ({ label, value, appearance, className, isChecked, isDisabled, onChange, ...props }, ref) => {
    const classes = {
      [styles.isChecked]: isChecked,
      [styles.isDisabled]: isDisabled,
    }

    return (
      <>
        <label className={cn(styles.checkbox, styles[appearance], classes, className)}>
          <input
            ref={ref}
            type='checkbox'
            value={value}
            onChange={onChange}
            checked={isChecked}
            disabled={isDisabled}
            {...props}
          />

          <span className={styles.icon}>
            <IconCheck />
          </span>

          {label && <span className={styles.label}>{label}</span>}
        </label>
      </>
    )
  }
)

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  label: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]),
  appearance: propTypes.oneOf(['square', 'ellipse']),
  className: propTypes.string,
  isChecked: propTypes.bool,
  isDisabled: propTypes.bool,
  onChange: propTypes.func,
}

Checkbox.defaultProps = {
  appearance: 'square',
}

export default memo(Checkbox)
