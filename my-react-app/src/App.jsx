import BasicExample from './Dropdown';
import React, {useState} from 'react'
import Modal from './Modal'
import ColorWheel from './ColorPicker';
import UploadImage from './UploadImage';

function App() {
  const [openModal, setOpenModal] = useState(false)

  return(<>
          <div >
            <button className='modalBtn' onClick={() => setOpenModal(true)}>+</button>
            <Modal open={openModal}onClose={()=> setOpenModal(false)}/>
          </div>
          
  </>);
}

export default App
