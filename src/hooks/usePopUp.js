import { useState, useRef, useEffect } from 'react';

function usePopup(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      togglePopup();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', closePopup);
    } else {
      document.removeEventListener('mousedown', closePopup);
    }

    return () => {
      document.removeEventListener('mousedown', closePopup);
    };
  }, [isOpen]);
  
  return {isOpen, togglePopup, popupRef };
}
export default usePopup;