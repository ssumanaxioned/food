import React from 'react'

const Button = ({ content }) => {
  return (
    <>
      <a className='inline-block px-10 py-5 rounded-full border-none outline-none bg-primary uppercase font-bold text-xs text-white lg:hover:bg-rose-600' href="#FIXME" title={content} >{content}</a>
    </>
  )
}

export default Button