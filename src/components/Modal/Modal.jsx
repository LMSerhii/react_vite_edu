import { useState } from 'react';

export const ModalWindow = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpenModal} />
    </>
  );
};
