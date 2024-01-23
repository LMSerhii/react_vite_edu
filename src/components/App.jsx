// import { Reader } from './Reader/Reader';
// import { LoginForm } from './LoginForm/LoginForm';
// import { Button } from './Button/Button';
// import { useState } from 'react';
// import data from '../data/news.json';
// import './App.css';
// import { LangSwitcher } from './LangSwitcher/LangSwitcher';

import { FeedBackForm } from './FeedBackForm/FeedBackForm';

// const App = () => {
//   const [signIn, setSignIn] = useState(true);
//   const [posts, setPosts] = useState(false);
//   const [searchBar, setSearchBar] = useState(false);
//   const [lang, setLang] = useState('uk');

//   const handleSignIn = () => {
//     setSignIn(true);
//     setPosts(false);
//     setSearchBar(false);
//   };

//   const handlePosts = () => {
//     setSignIn(false);
//     setSearchBar(false);
//     setPosts(true);
//   };

//   const handleLangSwitcher = () => {
//     setSignIn(false);
//     setSearchBar(true);
//     setPosts(false);
//   };

//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = userData => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   return (
//     <div className="app">
//       <div className="btns">
//         <Button onClick={handleSignIn}>Sign in</Button>
//         <Button onClick={handlePosts}>Posts</Button>
//         <Button onClick={handleLangSwitcher}>Lang Switcher</Button>
//       </div>

//       {signIn && <LoginForm onSubmit={handleLogin} />}
//       {posts && <Reader data={data} lang={lang} />}
//       {searchBar && <LangSwitcher lang={lang} onSelect={setLang} />}
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="app">
      <FeedBackForm></FeedBackForm>
    </div>
  );
};

export { App };
