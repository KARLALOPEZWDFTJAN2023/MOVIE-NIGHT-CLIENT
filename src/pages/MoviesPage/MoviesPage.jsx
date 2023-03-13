import React, {useEffect, useState} from 'react'
import "./ProyectPage.css";
import moviesService from '../../services/example.service';
import MovieCard from '../../components/Cards/Cards';

function MoviesPage() {

  const [movies, setMovies]= useState ([]);

  const MoviesPageLoader=async()=>{
    const {data:movies} = await moviesService.getMovies()
    console.log(movies)
    setMovies(movies)
  }
    useEffect(()=>{
      MoviesPageLoader()
    },[])
  return (
    <div>
      <>
        {movies.map((movie)=>(
        <MovieCard key={movie._id}{...movie}/>   
        )) }
        </>
    </div>
  )
}

export default MoviesPage