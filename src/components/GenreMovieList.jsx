import React from 'react'
import GenresList from '../constant/GenresList'
import MoviesList from './MoviesList'

const GenreMovieList = () => {
  return (
    <div>
        {
            GenresList.genere.map((item,index)=>(
                <div className="p-8 px-8  md:p-16">
                    <h2 className="text-white text-[20px] font-bold">{item.name}</h2>
                    <MoviesList index_={index} genreId={item.id}  />
                </div>
            ))
        }

    </div>
  )
}

export default GenreMovieList