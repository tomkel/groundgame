import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import './hamburger.scss'

const Hamburger = ({ open }) => {
  return (
    <button className={clsx('hamburger hamburger--arrowalt', open && 'is-active')} type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  )
}

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default Hamburger
