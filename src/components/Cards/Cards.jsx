import React from 'react'
import moviesService from "../../services/example.service";
import "./Cards.css";

function MovieCard({movies, category, director}) {
 
  const clear= async(id)=>{
    const newclear = await moviesService.deleteMovies (id)
    console.log(newclear)
  }
 
  return (
  <>

    <div className='card'>
    <Card style={{ width: '16px' }}>
      <Card.Body>
        <Card.Title >{movies}</Card.Title>
        <Card>{category}</Card>
        <Card.Text>
        {director}
        </Card.Text>
        <div className='clear'>
        <Button onClick={() => clear(_id)}  variant="primary">DELETE</Button>
        </div>
        <Button
        onClick={()=>
         < Link to={`/movies/editar/${_id}`}/>}
         >UPDATE</Button>
        

      </Card.Body>
    </Card>
    </div>



    </>


  )
}

export default MovieCard