import React from 'react'
import ThemeDrop from './Dropdown'
import ColorWheel from './ColorPicker'
import UploadImage from './UploadImage'
import './UploadImage.css'
import './Dropdown.css'
import './ColorPicker.css'

const Modal = ({open,onClose}) => {
    if(!open) return null
    return(
        <div onClick={onClose} className='backblur'>
            <div onClick={(e) => {
                e.stopPropagation()
            }}className='modalContainer'>
                <div className="modalRight">
                    <p onClick={onClose} className="closeBtn">X</p>
                    <div className="content">
                        <ThemeDrop/>
                        <ColorWheel/>
                        
                    </div>
                    <div className="btnContainer">
                        <button className='btnPrimary'>
                            <span className='bold'>YES PLEASE</span> 
                        </button>
                        <button onClick={onClose} className='btnOutline'>
                            <span  className='bold'>NO THANKS</span> 
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Modal