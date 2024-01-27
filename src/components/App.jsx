import { DNA } from 'react-loader-spinner';

import { Reader } from './Reader/Reader';
import { LoginForm } from './LoginForm/LoginForm';
import { Button } from './Button/Button';
import { useState, useEffect } from 'react';
import { LangSwitcher } from './LangSwitcher/LangSwitcher';
import { FeedBackForm } from './FeedBackForm/FeedBackForm';
import { Articles } from './Articles/Articles';
import { SearchForm } from './SearchForm/SearchForm';

import { getData } from '../js/api-service';
import data from '../data/news.json';
import './App.css';

const App = () => {
  const [lang, setLang] = useState('uk');
  const [content, setContent] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setArticles([]);
  //       setError(false);
  //       setLoading(true);
  //       const data = await getData('react');
  //       setArticles(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleSearch = async topic => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await getData(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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
      <SearchForm onSearch={handleSearch} />
      {loading && (
        <DNA
          visible={true}
          height="150"
          width="150"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <Articles items={articles} />}
    </div>
  );
};

export { App };
