// deps
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

// styles
import './icon.scss'

const Icon = props => {
  console.log(props);

  const iconClasses = cn('Icon', {
    // will concatenate any classes passed into customClasses prop
    [`${props.customClasses}`]: props.customClasses
  })

  return (
    <svg className={iconClasses}>
      <use href={`icons/${props.iconName}.svg#icon-${props.iconName}`}></use>
    </svg>
  )
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string,
  customClasses: PropTypes.string
}

Icon.defaultProps = {
  iconName: ''
}

export default Icon
