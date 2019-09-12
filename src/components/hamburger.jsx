import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import './hamburger.scss'

const Hamburger = ({ open }) => {
  return (
    <div className={clsx('hamburger hamburger--arrowalt', open && 'is-active')}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  )
}

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default Hamburger
