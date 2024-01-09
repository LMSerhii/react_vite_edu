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

  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
}
