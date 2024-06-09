import React from 'react'

function Input(props) {
  const {placeholder, type, ref} = props;
  return (
    <div>
        <input type={type} className="w-full py-1 border  rounded-sm text-white border-white bg-transparent px-3 placeholder:text-slate-300" placeholder={placeholder} ref={ref} />
    </div>
  )
}

export default Input