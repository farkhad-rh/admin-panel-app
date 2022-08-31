import { forwardRef, memo } from 'react'

import propTypes from 'prop-types'
import cn from 'classnames'

import IconLoader from '@icons/loader-line.svg'

import styles from './Input.module.scss'

const Input = forwardRef(
  (
    {
      label,
      placeholder,
      error,
      help,
      value,
      icon,
      isLeft,
      isCode,
      isError,
      isDisabled,
      isLoading,
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    const classes = {
      [styles.isIcon]: icon,
      [styles.isLeft]: isLeft,
      [styles.isError]: error || isError,
      [styles.isDisabled]: isDisabled,
      [styles.isLoading]: isLoading,
    }

    return (
      <div className={cn(styles.field, className)}>
        {label && !isCode && <label className={styles.label}>{label}</label>}

        <div className={styles.wrapper}>
          <input
            ref={ref}
            className={cn(styles.input, classes)}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
          />

          {icon && <div className={styles.icon}> {icon} </div>}
          {isLoading && <IconLoader className={styles.loader} />}
        </div>

        {(error || help) && (
          <div className={styles.note}>
            {error && <div className={cn('text-help', styles.error)}>{error}</div>}

            {help && <div className={cn('text-help', styles.help)}>{help}</div>}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

Input.propTypes = {
  label: propTypes.string,
  placeholder: propTypes.string,
  error: propTypes.string,
  help: propTypes.string,
  value: propTypes.string,
  icon: propTypes.object,
  isLeft: propTypes.bool,
  isCode: propTypes.bool,
  isError: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  onChange: propTypes.func,
  className: propTypes.string,
}

Input.defaultProps = {
  placeholder: 'Placeholder',
}

export default memo(Input)
