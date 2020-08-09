import React, { useState } from 'react'

const Modal = ({ selectedImage}) => {
    return (
        <div className="backdrop">
            <img src={selectedImage} alt="enlarge pic" />    
        </div>
    )
}

export default Modal;