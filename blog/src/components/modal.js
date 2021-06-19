import React, { useState, forwardRef, useImperativeHandle } from "react"
import Portal from "./Portal"

const Modal = forwardRef((props, ref) => {

  const [display, setDisplay] = useState(false)

  useImperativeHandle(
    ref,
    () => {
      return {
        openModal: () => handleOpen(),
        closeModal: () => handleClose(),
      }
    }
  )

  const handleOpen = () => {
    setDisplay(true);
  }

  const handleClose = () => {
    setDisplay(false);
  }

  if (display) {
    return (
      <Portal>

          <div className="modal-container">
            <button onClick={handleClose}>❌</button>
            {props.children}
          </div>
          <div className="modal-backdrop"></div>
      </Portal>
    )
  }

  return null
})

export default Modal