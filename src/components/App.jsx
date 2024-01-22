import { Reader } from './Reader/Reader';
import { LoginForm } from './LoginForm/LoginForm';
import { Button } from './Button/Button';
import { SearchBar } from './SearchBar/SearchBar';
import { useState } from 'react';
import data from '../data/news.json';
import './App.css';

const App = () => {
  const [signIn, setSignIn] = useState(true);
  const [posts, setPosts] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const handleSignIn = () => {
    setSignIn(true);
    setPosts(false);
    setSearchBar(false);
  };

  const handlePosts = () => {
    setSignIn(false);
    setSearchBar(false);
    setPosts(true);
  };

  const handleSearchBar = () => {
    setSignIn(false);
    setSearchBar(true);
    setPosts(false);
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
        <Button onClick={handleSearchBar}>Search Bar</Button>
      </div>

      {signIn && <LoginForm onSubmit={handleLogin} />}
      {posts && <Reader data={data} />}
      {searchBar && <SearchBar />}
    </>
  );
};

export { App };
