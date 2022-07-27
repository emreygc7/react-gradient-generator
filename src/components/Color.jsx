import React, { useState } from 'react'
import Modal from './Modal'
import { ChromePicker } from 'react-color';
import { BsCodeSlash } from 'react-icons/bs'

const Color = () => {
    
    const [firstColor, setFirstColor] = useState("#8E0E00")
    const [secondColor, setSecondColor] = useState("#1F1C18")
    const [direction, setDirection] = useState("to right")
    const [showModal, setShowModal] = useState(false)

    const handleFirstColor = (updatedFirstColor) => {
        setFirstColor(updatedFirstColor.hex)
    }
    const handleSecondColor = (updatedSecondColor) => {
        setSecondColor(updatedSecondColor.hex)
    }
    
    const modalShow = () => {
        setShowModal(true)
    }

  return (
    <>
       
       <div className='h-64 flex justify-start items-start ' style={{background: `linear-gradient(${direction}, ${firstColor}, ${secondColor})`}}>
        <div className=' bg-black rounded mt-2 ml-2 p-1'>
        <BsCodeSlash cursor={"pointer"} color="white" size={25} onClick={modalShow}  />
        </div>
     
       {showModal === true && 
               <Modal 
               direction = {direction} 
               firstColor = {firstColor} 
               secondColor = {secondColor} 
               setShowModal = {setShowModal}
           />
       }

       
       </div>

        <div className=' flex flex-col justify-around items-center gap-4 p-4 mt-0 sm:flex-row sm:-mt-10 '>
            
            <ChromePicker color={firstColor} onChange={handleFirstColor} />
            
            <select onChange={(e) => setDirection(e.target.value)} name="" id="" className='form-select appearance-none block h-12 w-fit px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none'>
                <option value="" disabled>Choose direction</option>
                <option value="to right">left to right</option>
                <option value="to bottom">top to bottom</option>
                <option value="to bottom right">top left to bottom right</option>
                <option value="to left">right to left</option>

            </select>
            
            <ChromePicker color={secondColor} onChange={handleSecondColor} />
       
        </div>
    </>
 
  )
}

export default Color