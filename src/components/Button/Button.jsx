import { useState } from 'react';

const Button = ({ children }) => {
  const [clicks, setClicks] = useState(0);

  const handleCkick = () => {
    setClicks(clicks + 1);
  };

  return (
    <button type="button" onClick={handleCkick}>
      {children}: {clicks}
    </button>
  );
};

export { Button };
