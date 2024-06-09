import React from 'react'

function label(props) {
  const {htmlFor, title} = props;
  return (
    <div>
        <label htmlFor={htmlFor} className=' my-9 text-white'>{title}</label>
    </div>
  )
}

export default label