import React from 'react'
import { Link, useParams} from "react-router-dom";
import moviesService from "../../services/example.service";
import { useState, useEffect } from 'react';

function EditMovie() {

    const {id}=useParams()
  const [moviesEditar, setmoviesEditar] = useState("");
  const [directorEditar, setdirectorEditar] = useState("");
  const [categoryEditar, setcategoryEditar] = useState("");

  const handlemoviesEditar = (e) => setmoviesEditar (e.target.value);
  const handledirectorEditar = (e) => setdirectorEditar (e.target.value);
  const handlecategoryEditar = (e) => setcategoryEditar(e.target.value);

  const MoviesPageLoader=async()=>{
    const {data:movies} = await moviesService.getOne(id)
    console.log(movies)
    setmoviesEditar(movies.movies)
    setdirectorEditar(movies.director)
    setcategoryEditar(movies.category)
  }

    useEffect(()=>{
      MoviesPageLoader()
    },[])

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const requestBody = { moviesEditar, directorEditar, categoryEditar};
    console.log(requestBody)
  const newclear = await moviesService.updateOne (id,requestBody)
  console.log(newclear)
  }


  return (
    <div>
        <Form onSubmit={handleUpdateSubmit}>
<Form.Group className="categoria" controlId="formEdit">
        <Form.Label>Category</Form.Label>
        <Form.Select onChange={handlecategoryEditar} aria-label="category" value={categoryEditar}>
    </Form.Select>
      </Form.Group>
      <Form.Group className="movies" controlId="formEdit">
        <Form.Label>Movies</Form.Label>
        <Form.Control onChange={handlemoviesEditar} name='movies' type="text" defaultValue={moviesEditar} />
      </Form.Group>
      <Form.Group className="director" controlId="formEdit">
        <Form.Label>Director</Form.Label>
        <Form.Control onChange={handledirectorEditar} name='director' type="text"  value={directorEditar}/>
      </Form.Group>
      <Button type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default EditMovie