import { useEffect } from 'react'

export const ClickOutside = ({ refElement, children, onClickOutside, enableLock }) => {
  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (refElement?.current && refElement?.current?.contains(target)) return

      !enableLock && onClickOutside(target)
    }

    document.addEventListener('click', handleClickOutside)

    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return children
}
