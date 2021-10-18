import MovieCard from "./MovieCard";
const Filter = ({title,rate,filmeListe}) =>{
    const filteredFilmeName = filmeListe.filter(movie => {
        return movie.titile.toLowerCase().indexOf(title.toLowerCase()) !== -1;
      });
    const filteredFilmeRate = filteredFilmeName.filter(movie => {
        return movie.rating.indexOf(rate) !== -1;
      });
      if(filteredFilmeRate.length !== 0)
      return(
        filteredFilmeRate.map((v,i)=><MovieCard imgUrl={v.posterURL}name={v.titile}rate={v.rating}description={v.description} key={i}/>)
      )
      else return (
          <div>No movie found</div>
      )
}
export default Filter;
Filter.defaultProps = {
    titile: "",
    rate:0,
    filmeListe:[]
};