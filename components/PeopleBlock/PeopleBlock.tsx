import { peopleType } from '@component/tipes'
import styles from './PeopleBlock.module.scss'

type filmsInfoProps = {
  people: peopleType
}
export const PeopleBlock = ({people}:filmsInfoProps)=>{

  return (
        <div className={styles.peopleBlock}>
          <img src={people.image?.medium} alt="img"/>
          <p className={styles.people__name}>{people.name}</p>
          <p>Birthday: <span>{people.birthday}</span></p>
          <p>Gender: <span>{people.gender}</span></p>
          <p>Country: <span>{people.country?.name}</span> </p>
          <button className={styles.people__button}><a href={people.url} target="_blank" >See more</a></button>
    </div>
  )
}