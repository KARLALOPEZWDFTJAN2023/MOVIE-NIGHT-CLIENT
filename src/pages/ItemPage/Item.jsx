import React from 'react'
import { useLoaderData } from 'react-router-dom'
import moviesService from "../../services/example.service";

export const ItemsPageLoader=async({params})=>{
    const {data} =await moviesService.getItemsPageByID(params.id)
    return{
        items: data.movies,
    }
}

function ItemsPage() {
    const {items, movies }=useLoaderData()
    console.log(items,movies)

  return (
<div>
<Card style={{ width: '16px' }}>
      <Card.Body>
        <Card.Title>MOVIE</Card.Title>
        <Card.Text>
         DIRECTOR AND DESCRIPTION
        </Card.Text>
        <Button>SUBMIT</Button>
      </Card.Body>
    </Card>

</div> 
  )
}

export default ItemsPage