import { Reader } from './Reader/Reader';
import { LoginForm } from './LoginForm/LoginForm';
import { Button } from './Button/Button';
import { useState } from 'react';
import data from '../data/news.json';
import './App.css';

const App = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <div className="btns">
        <Button onClick={handleClick}>Sign in</Button>
        <Button onClick={handleClick}>Posts</Button>
      </div>

      {state ? <Reader data={data} /> : <LoginForm />}
    </>
  );
};

export { App };
