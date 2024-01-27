import { Article } from '../Article/Article';

export const Articles = ({ items }) => {
  return (
    <ul>
      {items.map(({ story_id, url, title }) => {
        return <li key={story_id}>{<Article title={title} url={url} />}</li>;
      })}
    </ul>
  );
};
