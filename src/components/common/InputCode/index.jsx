import { useEffect, forwardRef, memo } from 'react'
import { useForm } from 'react-hook-form'

import propTypes from 'prop-types'
import cn from 'classnames'

import styles from './InputCode.module.scss'

const InputCode = forwardRef(
  (
    { label, error, help, value, isError, isDisabled, onChange, onInput, className, ...props },
    ref
  ) => {
    const { register, setValue, watch } = useForm({
      mode: 'onChange',
    })
    const regexChar = /\D/g

    useEffect(() => {
      document.querySelector(`input[name=code-1]`).focus()
    }, [])

    useEffect(() => {
      const subscription = watch(value => {
        const formatValue = Object.values(value).join('')

        onInput(formatValue)
      })

      return () => subscription.unsubscribe()
    }, [watch])

    const handleKey = ({ target, keyCode }) => {
      const { value, name, maxLength } = target
      const [codeName, codeIndex] = name.split('-')
      const valueLength = value.length

      if (
        valueLength >= maxLength &&
        ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105))
      ) {
        if (+codeIndex < 6) {
          const nextInput = document.querySelector(`input[name=${codeName}-${+codeIndex + 1}]`)

          if (nextInput !== null) {
            nextInput.focus()
          }
        }
      }

      if (valueLength === 0 && keyCode === 8) {
        if (+codeIndex != 0) {
          const prevInput = document.querySelector(`input[name=${codeName}-${+codeIndex - 1}]`)

          if (prevInput !== null) {
            prevInput.focus()
          }
        }
      }
    }

    const handleInput = ({ target }) => {
      const { value, name } = target
      const validValue = value.replace(regexChar, '')

      setValue(name, validValue)
    }

    const classes = {
      [styles.input]: true,
      [styles.isError]: error || isError,
      [styles.isDisabled]: isDisabled,
    }

    return (
      <div className={cn(styles.field, className)}>
        {label && <label className={styles.label}>{label}</label>}

        <div className={styles.wrapper}>
          <input
            ref={ref}
            value={value}
            onChange={onChange}
            className={styles.hidden}
            hidden
            {...props}
          />

          <input
            className={cn(classes)}
            placeholder='•'
            maxLength='1'
            onKeyUp={handleKey}
            onKeyDown={handleKey}
            onInput={handleInput}
            {...register('code-1')}
          />
          <input
            className={cn(classes)}
            placeholder='•'
            maxLength='1'
            onKeyUp={handleKey}
            onKeyDown={handleKey}
            onInput={handleInput}
            {...register('code-2')}
          />
          <input
            className={cn(classes)}
            placeholder='•'
            maxLength='1'
            onKeyUp={handleKey}
            onKeyDown={handleKey}
            onInput={handleInput}
            {...register('code-3')}
          />
          <input
            className={cn(classes)}
            placeholder='•'
            maxLength='1'
            onKeyUp={handleKey}
            onKeyDown={handleKey}
            onInput={handleInput}
            {...register('code-4')}
          />
          <input
            className={cn(classes)}
            placeholder='•'
            maxLength='1'
            onKeyUp={handleKey}
            onKeyDown={handleKey}
            onInput={handleInput}
            {...register('code-5')}
          />
          <input
            className={cn(classes)}
            placeholder='•'
            maxLength='1'
            onKeyUp={handleKey}
            onKeyDown={handleKey}
            onInput={handleInput}
            {...register('code-6')}
          />
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

InputCode.displayName = 'InputCode'

InputCode.propTypes = {
  label: propTypes.string,
  error: propTypes.string,
  help: propTypes.string,
  value: propTypes.string,
  isError: propTypes.bool,
  isDisabled: propTypes.bool,
  onChange: propTypes.func,
  onInput: propTypes.func,
  className: propTypes.string,
}

export default memo(InputCode)
