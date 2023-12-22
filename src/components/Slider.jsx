import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const screenWidth=window.innerWidth;
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
const Slider = () => {
    const elementsRef=useRef();
    const [moviesList,setMoviesList]=useState([]);
    useEffect(()=>{
        getTrendingMovies()

    },[])

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110;

    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110;;

    }

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then((res)=>{
            console.log(res.data.results);
            setMoviesList(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div >
        <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer" onClick={()=>sliderLeft(elementsRef.current)}/>
        <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer" onClick={()=>sliderRight(elementsRef.current)}/>
        <div className="flex overflow-x-auto px-16 py-4 scrollbar-none scroll-smooth" ref={elementsRef}>
            {
                moviesList.map((item,index)=>(
                    <img src={`${IMAGE_BASE_URL}/${item.backdrop_path}`} className="min-w-full md:h-[315px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all ease-in-out " alt="" />
                    ))
                }

        </div>
    </div>

  )
}

export default Slider