import { forwardRef, memo } from 'react'
import { IMaskInput } from 'react-imask'

import propTypes from 'prop-types'
import cn from 'classnames'

import IconLoader from '@icons/loader-line.svg'

import styles from './InputMask.module.scss'

const InputMask = forwardRef(
  (
    {
      label,
      error,
      help,
      mask,
      placeholder,
      value,
      isError,
      isLoading,
      onAccept,
      className,
      ...props
    },
    ref
  ) => {
    const classes = {
      [styles.isError]: error || isError,
      [styles.isLoading]: isLoading,
    }

    return (
      <div className={cn(styles.field, className)}>
        {label && <label className={styles.label}>{label}</label>}

        <div className={styles.wrapper}>
          <IMaskInput
            ref={ref}
            className={cn(styles.input, classes)}
            mask={mask}
            placeholder={placeholder}
            unmask={true}
            value={value}
            onAccept={onAccept}
            {...props}
          />

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

InputMask.displayName = 'InputMask'

InputMask.propTypes = {
  label: propTypes.string,
  mask: propTypes.string.isRequired,
  placeholder: propTypes.string,
  error: propTypes.string,
  help: propTypes.string,
  value: propTypes.string,
  isError: propTypes.bool,
  isLoading: propTypes.bool,
  onAccept: propTypes.func,
  className: propTypes.string,
}

InputMask.defaultProps = {
  mask: '+ {998} ( 00 ) - 000 - 00 - 00',
  placeholder: '+ 998 ( _ _ ) - _ _ _ - _ _ - _ _',
}

export default memo(InputMask)
