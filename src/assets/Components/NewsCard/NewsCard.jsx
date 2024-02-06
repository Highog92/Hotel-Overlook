import style from "./NewsCard.module.scss";

export const NewsCard = ({ imgSrc, title, text}) => {
  return (
    <div className={style.newsCardStyle}>
      <img src={imgSrc}></img>
      <section>
        <p>Læs mere</p>
      </section>
    </div>
  );
};
