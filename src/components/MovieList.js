import { useState } from 'react';
import Candyman from '../movieCover/Candyman.jpg'
import Tralala from '../movieCover/Affiche_Tralala.jpg'
import './style.css'
import Filter from './Filter';

const MovieList = () =>{
    const  [movieList,setMovieList] = useState([
        {
          titile:'Eiffel',
          description:'Drame, Biopic, Comédie ',
          posterURL:'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2020-06/eiffel.jpg',
          rating:'3'
        },
         {
          titile:'Tralala',
          description:'Comédie musicale',
          posterURL:Tralala,
          rating:'2'
        },
        {
          titile:'Candyman',
          description:'Epouvante-horreur',
          posterURL:Candyman,
          rating:'1'
        }
    ])
    const [movieName , setMovieName] = useState('')
    const [movieDescr , setMovieDescr] = useState('')
    const [movieRate , setMovieRate] = useState('')
    const [movieUrl , setMovieUrl] = useState('')
    const [searchName , setSearchName] = useState('')
    const [searchRate , setSearchRate] = useState('')
    const addMove = (name,description,rate,url) => {
        const addMovie = {
            titile: name,
            description:description,
            posterURL:url,
            rating:rate
        }
        setMovieList(movieList =>[...movieList , addMovie])
        setMovieName('')
        setMovieDescr('')
        setMovieRate('')
        setMovieUrl('')
    }

    return (
        <div className="App">
          <div className='searchBlock'>
            <input type='text' onChange={e =>setSearchName(e.target.value)} placeholder="search by name" />
            <input type='text' onChange={e =>setSearchRate(e.target.value)} placeholder="search by rate" />
          </div>
          <div className='cardBlock'>
            <Filter title={searchName} rate={searchRate} filmeListe={movieList}/>
          </div> 
          <div className='addBlock'>
            <input type='text' value={movieName} onChange={e =>setMovieName(e.target.value)} className='' placeholder='Movie Name'/>
            <input type='text' value={movieUrl} onChange={e =>setMovieUrl(e.target.value)} className='' placeholder='Movie cover URL'/>
            <input type='text' value={movieDescr} onChange={e =>setMovieDescr(e.target.value)} className='' placeholder='Movie description'/>
            <input type='text' value={movieRate} onChange={e =>setMovieRate(e.target.value)} className='' placeholder='Movie rating'/>
          </div>
          <div>
            <button onClick={()=>addMove(movieName,movieDescr,movieRate,movieUrl)}>Add Movie</button>
          </div>
        </div>
      );
}
export default MovieList