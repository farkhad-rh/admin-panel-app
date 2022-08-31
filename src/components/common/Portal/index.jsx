import { useState, useLayoutEffect, memo } from 'react'
import { createPortal } from 'react-dom'
import propTypes from 'prop-types'

const Portal = ({ children }) => {
  const [body, setBody] = useState(null)

  useLayoutEffect(() => {
    setBody(document.body)
  }, [])

  if (!body) return null

  return createPortal(children, body)
}

Portal.propTypes = {
  children: propTypes.node,
}

export default memo(Portal)
