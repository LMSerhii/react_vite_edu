import { Reader } from './Reader/Reader';
import { LoginForm } from './LoginForm/LoginForm';
import { Button } from './Button/Button';
import { useState } from 'react';
import data from '../data/news.json';
import './App.css';
import { LangSwitcher } from './LangSwitcher/LangSwitcher';
import { FeedBackForm } from './FeedBackForm/FeedBackForm';

const App = () => {
  const [lang, setLang] = useState('uk');
  const [content, setContent] = useState(null);

  const handleClick = cont => {
    setContent(cont);
  };

  const handleLogin = userData => {
    console.log(userData);
  };

  return (
    <div className="app">
      <div className="btns">
        <Button
          onClick={() => {
            handleClick(<LoginForm onSubmit={handleLogin} />);
          }}
        >
          Sign in
        </Button>
        <Button
          onClick={() => {
            handleClick(<Reader data={data} lang={lang} />);
          }}
        >
          Posts
        </Button>
        <Button
          onClick={() =>
            handleClick(<LangSwitcher lang={lang} onSelect={setLang} />)
          }
        >
          Lang Switcher
        </Button>
        <Button onClick={() => handleClick(<FeedBackForm />)}>
          FeedBackForm
        </Button>
      </div>
      {content ? content : <p>Empty</p>}
    </div>
  );
};

export { App };
