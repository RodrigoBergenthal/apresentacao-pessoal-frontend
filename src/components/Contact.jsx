import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact" >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className=" text-4xl  font-bold text-center mb-12  bg-gradient-to-r from-red-800 to-red-300'">Entre Em Contato</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl  from-red-800 to-red-400 font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-red-800 to-red-400v mb-4'>Vamos Conversar</h3>
            <p>Estou em busca de uma chance como Desenvolvedor e aberto a parcerias e programas de voluntariado</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    Rodrigo_bergenthal@live.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>51-993402428</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Porto Alegre, Brasil</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Seu Nome</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Digite seu nome'/>
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Digite seu email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Mensagem</label>
                    <textarea type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Digite sua mensagem'/>
                </div>
                <button className='bg-gradient-to-r from-red-800 to-red-400 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact