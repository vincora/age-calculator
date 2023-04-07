import React from 'react'

const Input = () => {
  return (
    <li className='calculator__header-item'>
        <label className='input__label'>
        <div>day</div>
        <input type="text" placeholder='DD' className='input'/>
        </label>
    </li>
  )
}

export default Input