import Modal from 'react-modal';
import React, { useState } from "react";



const PopUp = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div>
      <div>
        {props.relise}
      </div>
      <button onClick={closeModal}>X</button>
    </div>
  );



  return (
    <div>
      <div onClick={openModal}>
        <img src={props.imagePath + props.image} alt='helo'/>
      </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} >
              {modalContent}
            </Modal>



    </div >
  );
}



export default PopUp;