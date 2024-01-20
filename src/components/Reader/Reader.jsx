import css from './Reader.module.css';
import { Header } from '../Header/Header';
import { ArticleView } from '../ArticleView/ArticleView';
import { useState, useEffect } from 'react';

const getClicks = () => {
  const localClicks = JSON.parse(window.localStorage.getItem('article-idx'));
  return localClicks ? localClicks : 0;
};

const Reader = ({ data }) => {
  const [clicks, setClicks] = useState(getClicks);
  useEffect(() => {
    window.localStorage.setItem('article-idx', clicks);
  }, [clicks]);

  const selectedArticle = data[clicks];
  const isNextDisabled = clicks === data.length - 1;
  const isPrevDisabled = clicks === 0;

  return (
    <div className={css.reader}>
      <Header
        data={data}
        clicks={clicks}
        setClicks={setClicks}
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
      />
      <ArticleView currentPost={selectedArticle} />
    </div>
  );
};

export { Reader };
