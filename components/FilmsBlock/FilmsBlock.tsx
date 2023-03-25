
export const FilmsBlock = ({films}:any)=>{
  return (
    <div>{films.map((film:any )=> (
      <div key={film.score}>
        <div >{film.show.name}</div>
        <p>Status : {film.show.status}</p>
        <p> Premired: {film.show.premiered} Ended: {film.show.ended}</p>
        <p> Show: time - {film.show.schedule.time}, days: {film.show.schedule.days}</p>
        <div> Language : {film.show.language}</div>
        <p> Country: {film.show.network?.country.name}</p>
        <div> Genders : {film.show.genres}</div>
        <a href={film.show.officialSite}> link site:</a><span> {film.show.officialSite}</span>
        <a href={film.show.url}> Open site: <span>{film.show.url}</span></a>
        <img src={film.show.image.original} alt={film.show.name} width={200}/>
        {film.show.summary}
      </div>
    ))}</div>
  )
}