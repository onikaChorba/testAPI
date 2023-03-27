import styles from './FilmsBlock.module.scss';
import { filmsType } from "@component/tipes";
import { FC, useState } from 'react';


type filmsInfoProps = {
  film: filmsType
}

export const FilmsBlock:FC<filmsInfoProps> = ({film})=>{

  const [showInfo, setShowInfo] = useState(false);
    const handleChange = () => {
    setShowInfo((current) => !current);
  };
  return (
        <div style={showInfo? {display: 'flex'}: {display: 'block'}}>
          <div>
        <img src={film.show.image.original} alt={film.show.name} className={styles.filmBlock__img}/>
        <div className={styles.filmBlock__shotInfo}>
          <div><div className={styles.filmInfo__name}>{film.show.name}</div>
          <p> Premired: {film.show.premiered}</p></div>
          <button className={styles.showButton} onClick={handleChange}>{showInfo ? "less...": "more..."}</button>
        </div></div>
       {
        showInfo && (<div className={styles.filmBlock__info}>
          <div className={styles.filmInfo__name}>{film.show.name}</div>
          <p>Status : {film.show.status}</p>
          <p> Premired: {film.show.premiered}</p>
          <p> Ended: {film.show.ended}</p>
          <p> Show: time - {film.show.schedule.time}, days: {film.show.schedule.days}</p>
          <p> Language : {film.show.language}</p>
          <p> Country: {film.show.network?.country.name}</p>
          <p> Genders : {film.show.genres}</p>
          {film.show.summary}
          <div className={styles.filmInfo__buttons}>
            <button className={styles.filmInfo__button}><a href={film.show.officialSite} target="_blank" > Show more info</a></button>
            <button className={styles.filmInfo__button}><a href={film.show.url} target="_blank"> Open site</a></button>
          </div>
        </div>)
       }
    </div>
  )
}