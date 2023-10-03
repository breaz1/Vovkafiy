import { useState } from 'react';

function usePopup(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, togglePopup];
}

export default usePopup;
