import React from 'react'
import Card from './Card'



const CardList = ({results}: any) => {
    let data = [];
    if (results) {
      data = results.Search || [];
    }
    // console.log(data);
  return (
    <div className='grid justify-center items-center mt-5 grid-cols-3'>
        {data.map((item: { imdbID: React.Key | null | undefined }) => (
        <Card key={item.imdbID} movie={item} />
      ))}
    </div>
  )
}

export default CardList