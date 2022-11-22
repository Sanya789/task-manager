import React from 'react'
import { useRef } from 'react'

const Modal = ({children, showModal, setShowModal}) => {
  const modalRef = useRef()
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false)
    }
  }
  return (
    showModal && 
    <div ref={modalRef} className='modal' onClick={closeModal}>
      <div className='modal_container'>
        {children}
        <button onClick={()=>setShowModal(false)}>Закрыть</button>
      </div>
    </div>
  )
}

export default Modal
