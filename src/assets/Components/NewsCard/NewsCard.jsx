import style from "./NewsCard.module.scss";

export const NewsCard = ({ imgSrc, title, text, handleModal }) => {
  return (
    <div className={style.newsCardStyle}>
      <img src={imgSrc}></img>
      <section>
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        <p onClick={() => handleModal()}>Læs mere</p>
      </section>
    </div>
  );
};
