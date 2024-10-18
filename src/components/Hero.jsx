import React from 'react'
import HeroImage from '../assets/hero-image.png'


const Hero = () => {
    return (
      <nav className='bg-black text-white text-center py-16 '>
          <img src={HeroImage} alt="" 
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
          transition-transform duration-300 hover:scale-110 '/>
          <h1 className='text-4xl font-bold '>
              Eu Sou{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-300 '> Rodrigo Bergenthal</span>
              , Desenvolvedor Front-End
          </h1>
          <p className='mt-4 text-lg text-gray-300'>
          Desenvolvedor FrontEnd com habilidades de resolução de problemas e forte capacidade de adaptabilidade.<br></br>
          </p>
          <div className='mt-8 space-x-4 text-center'>
          <a href="#contact"><button
              className='bg-gradient-to-r from-red-800 to-red-400 text-white
              transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full hover:animate-wiggle-more animate-infinite animate-ease-linear'>Entre em Contato</button></a>
              
              <a href="#about"><button
              className='bg-gradient-to-r from-red-800 to-red-400 text-white
              transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full hover:animate-jump animate-infinite animate-ease-linear'>Resumo</button></a>
          </div>
  
      </nav>
    )
  }
  
  export default Hero