// deps
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

// styles
import './button.scss'

const Button = props => {
  const buttonClasses = cn('Button', {
    [`Button--${props.color}`]: props.color
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

export default Button;
