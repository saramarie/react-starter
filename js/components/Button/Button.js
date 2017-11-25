// deps
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

// styles
import './button.scss'

const Button = props => {
  const buttonClasses = cn('Button', {
    [`Button--${props.color}`]: props.color,
    'Button--ghost': props.isGhosted,
    'Button--fullWidth': props.isFullWidth,
    [`Button--${props.size}`]: props.size
  })

  return (
    <button
      type="button"
      className={buttonClasses}
    >
      {props.label}
    </button>
  )
}

Button.propTypes = {
  /** Color */
  color: PropTypes.string,
  /** Size */
  size: PropTypes.string,
  /** Ghosted */
  isGhosted: PropTypes.bool,
  /** Full-Width */
  isFullWidth: PropTypes.bool
}

export default Button;
