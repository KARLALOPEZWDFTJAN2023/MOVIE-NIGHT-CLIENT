import React, {useEffect, useState} from 'react'
import { Link} from "react-router-dom";
import moviesService from "../../services/example.service";

function CreatePage() {

    const [movies, setMovies] = useState("");
    const [director, setDirector] = useState("");
    const [category, setCategory] = useState("");
  
    const handleMovies = (e) => setMovies (e.target.value);
    const handleDirector = (e) => setDirector (e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const requestBody = { movies, director, category};
      console.log(requestBody)
    const newclear = await moviesService.createMovies(requestBody)
    console.log(newclear)
    }
  
  return(
<div>
<div>
<>
<div className='movie'>
CREATE MOVIE
</div>

<div className='button'>
<Link to="/profile">
        <div className="Close">
        <Button >CLOSE</Button>
        </div>
      </Link>
      </div>
</>

<div className='FormularioCrear'>
<Form onSubmit={handleSubmit}>
<Form.Group className="categoria" controlId="formCreate">
        <Form.Label>CATEGORY</Form.Label>
        <Form.Select onChange={handleCategory} aria-label="CATEGORY" >
    </Form.Select>
      </Form.Group>
      <Form.Group className="movies" controlId="formCreate">
        <Form.Label>MOVIES</Form.Label>
        <Form.Control onChange={handleMovies} name='movies' type="text" placeholder="movies" />
      </Form.Group>
      <Form.Group className="director" controlId="formCreate">
        <Form.Label>DIRECTOR</Form.Label>
        <Form.Control onChange={handleDirector} name='director' type="text" placeholder="director" />
      </Form.Group>
      <Button type="submit">
    CREATE  </Button>
    </Form>
    </div>
    </div>
</div>
)
}

export default CreatePage