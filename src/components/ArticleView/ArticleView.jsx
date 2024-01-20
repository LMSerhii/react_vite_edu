import css from './ArticleViews.module.css';

export const ArticleView = ({ currentPost: { title, text } }) => {
  return (
    <div className={css.article}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.text}>{text}</p>
    </div>
  );
};
