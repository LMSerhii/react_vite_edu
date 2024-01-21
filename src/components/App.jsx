import { Reader } from './Reader/Reader';
import { LoginForm } from './LoginForm/LoginForm';
import { Button } from './Button/Button';
import { useState } from 'react';
import data from '../data/news.json';
import './App.css';

const App = () => {
  const [signIn, setSignIn] = useState(true);
  const [posts, setPosts] = useState(false);

  const handleSignIn = () => {
    setSignIn(true);
    setPosts(false);
  };

  const handlePosts = () => {
    setSignIn(false);
    setPosts(true);
  };

  // Колбек-функція для обробки сабміту форми
  const handleLogin = userData => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  return (
    <>
      <div className="btns">
        <Button onClick={handleSignIn}>Sign in</Button>
        <Button onClick={handlePosts}>Posts</Button>
      </div>

      {signIn && <LoginForm onSubmit={handleLogin} />}
      {posts && <Reader data={data} />}
    </>
  );
};

export { App };
