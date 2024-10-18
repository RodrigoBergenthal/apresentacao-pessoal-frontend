import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg'>
        <div className='container py-2 flex justify-center md:justify-between items-center' >
            <div className='text-2xl font-bold hidden md:inline text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-300 animate-bounce animate-infinite animate-ease-linear'>Rodrigo Bergenthal</div>
            <div className='space-x-6 hover: '>
                <a href="#home"className='hover:text-red-400  '>Início</a>
                <a href="#about"className='hover:text-red-400'>Sobre</a>
                <a href="#project"className='hover:text-red-400'>Projetos</a>
                <a href="#contact"className='hover:text-red-400'>Contato</a>
            </div >
            <a href="#contact"><button className='bg-gradient-to-r from-red-800 to-red-400 text-white hidden 
            md:inline transform transition-transform duration-300 hover:scale-150 px-4 py-2 rounded-full hover:'>Contato</button></a>
        </div>
    </nav>
  )
}

export default Navbar