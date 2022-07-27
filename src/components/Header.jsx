import React from 'react'
import {BsGithub} from 'react-icons/bs'

const Header = () => {
  return (
    <header className='bg-gray-900 p-4 flex justify-between items-center  '>
        <h1 className=' font-bilbo font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-cyan-400'>Gradient Generator</h1>
        <a href="https://github.com/emreygc7/react-gradient-generator" target="_blank">
            <BsGithub color='white' size={25}/>
        </a>
    </header>
  )
}

export default Header