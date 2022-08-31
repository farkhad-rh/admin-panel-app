import propTypes from 'prop-types'
import cn from 'classnames'

import styles from './Button.module.scss'

const Button = ({
  innerRef,
  label,
  icon,
  placement,
  appearance,
  size,
  type,
  className,
  children,
  isActive,
  isDisabled,
  onClick,
  ...props
}) => {
  const classes = {
    [styles.isActive]: isActive && !isDisabled,
    [styles.isDisabled]: isDisabled && !isActive,
  }

  return (
    <button
      ref={innerRef}
      type={type}
      className={cn(styles.button, styles[appearance], styles[size], classes, className)}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {children ? (
        children
      ) : (
        <>
          {icon && placement === 'left' && icon}
          {label && <span>{label}</span>}
          {icon && placement === 'right' && icon}
        </>
      )}
    </button>
  )
}

Button.propTypes = {
  innerRef: propTypes.object,
  label: propTypes.string,
  icon: propTypes.object,
  placement: propTypes.oneOf(['left', 'right']),
  appearance: propTypes.oneOf(['default', 'primary', 'ghost', 'link']),
  size: propTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  type: propTypes.oneOf(['button', 'reset', 'submit']),
  children: propTypes.node,
  className: propTypes.string,
  isActive: propTypes.bool,
  isDisabled: propTypes.bool,
  onClick: propTypes.func,
}

Button.defaultProps = {
  placement: 'left',
  appearance: 'default',
  size: 'lg',
  type: 'button',
}

export default Button
