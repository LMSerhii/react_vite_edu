// import { useState, useEffect, useMemo, useRef } from 'react';

// import { DNA } from 'react-loader-spinner';

// import { Reader } from './Reader/Reader';
// import { LoginForm } from './LoginForm/LoginForm';
// import { Button } from './Button/Button';
// import { LangSwitcher } from './LangSwitcher/LangSwitcher';
// import { FeedBackForm } from './FeedBackForm/FeedBackForm';
// import { Articles } from './Articles/Articles';
// import { SearchForm } from './SearchForm/SearchForm';
// import { Player } from './Player/Player';
// import { CustomButton } from './CustomButton/CustomButton';

// import { getData } from '../js/api-service';
// import data from '../data/news.json';
// import './App.css';

const App = () => {
  // const [lang, setLang] = useState('uk');
  // const [content, setContent] = useState(null);
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
  // const [query, setQuery] = useState('');
  // const [clicks, setClicks] = useState(0);

  // const [value, setValue] = useState(0);

  // const btnRef = useRef();

  // useEffect(() => btnRef.current.focus(), []);

  // const valueRef = useRef(0);

  // console.log('App: ', btnRef.current);

  // useEffect(() => {
  //   console.log('useEffect: ', btnRef.current);
  // });

  // const handleClick = () => {
  //   valueRef.current += 1;
  // };

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

  // const handleSearch = async topic => {
  //   try {
  //     setArticles([]);
  //     setError(false);
  //     setLoading(true);
  //     const data = await getData(topic);
  //     setArticles(data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleClick = cont => {
  //   setContent(cont);
  // };

  // const handleLogin = userData => {
  //   console.log(userData);
  // };

  // const filteredPlanets = useMemo(
  //   () => planets.filter(planet => planet.includes(query)),
  //   [planets, query]
  // );

  return (
    <div className="app">
      {/* <div className="btns">
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
      </div> */}
      {/* <SearchForm onSearch={handleSearch} />
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
      {articles.length > 0 && <Articles items={articles} />} */}
      {/* <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <ul>
        {filteredPlanets.map(planet => (
          <li key={planet}>{planet}</li>
        ))}
      </ul> */}
      {/* <button onClick={handleClick}>Click to update ref value</button>;
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button> */}

      {/* <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" /> */}
      {/* <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton> */}
    </div>
  );
};

export { App };
