import { Reader } from './Reader/Reader';
import data from '../data/news.json';

const App = () => {
  return (
    <>
      <Reader data={data} />
    </>
  );
};

export { App };
