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
  color: PropTypes.string,
  size: PropTypes.string,
  isGhosted: PropTypes.bool,
  isFullWidth: PropTypes.bool
}

export default Button;
