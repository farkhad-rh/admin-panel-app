import { useState } from 'react'

import propTypes from 'prop-types'
import cn from 'classnames'

import TabItem from './TabItem'

const Tabs = ({ tool, className, children, ...props }) => {
  const [active, setActive] = useState(0)

  const handleClick = index => setActive(index)

  return (
    <div
      className={cn('tabs', className)}
      {...props}
    >
      <div className={'tabs-nav'}>
        {children.map((tab, index) => (
          <TabItem
            key={tab.props.label}
            index={index}
            label={tab.props.label}
            tool={tool}
            isActive={active}
            onClick={handleClick}
          />
        ))}
      </div>
      <div className='tabs-content'>
        {children.map((one, index) => {
          if (index === active) {
            return one.props.children
          }
        })}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  tool: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
}

export default Tabs
