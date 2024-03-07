import React from 'react'

const Button = (props) => {
  return (
    <div className="bg-blue-600 rounded-lg text-white font-[Poppins] py-2 px-6 md:ml-8 hover:bg-blue-900 duration-500">{props.children}</div>
  )
}

export default Button