import { useState } from 'react';
import './App.css';
import data from '../data.json';
import { AvatarList } from './AvatarLIst/AvatarList';

export default function App() {
  // return (
  //   <div className="app">
  //     <AvatarList data={data} />
  //   </div>
  // );

  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>Current: {clicks}</button>
      <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  );
}
