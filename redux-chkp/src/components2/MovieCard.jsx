import React from 'react'
import { useDispatch } from 'react-redux';
import Rating from 'react-star-rating-lite';
import { removeMovie } from '../JS/Actions/MovieAction';


export default function MovieCard({movie}) {
    const dispatch = useDispatch()
  return (
    <div >
        <h3 className='cardTitle' >{movie.title}</h3>
        <img className='imageDescription' style={{width:"150px"} } src={movie.posterUrl}/>
        <p contentEditable="true" className='cardDescription'>{movie.description}</p>
        <Rating value={movie.rate} readonly />
        <button 
        onClick={()=>dispatch(removeMovie(movie.id))}
        >
            delete film
        </button>

    </div>
  )
}
