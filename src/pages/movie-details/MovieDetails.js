import React,{useEffect, useState} from 'react';
import {useParams, useRouteMatch} from "react-router-dom";
import {moviesService} from "../../services";

export const MovieDetails = () => {
    const [filmDetails, setFilmDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    // const {params: {id}} = useRouteMatch();
    const {id, ...rest} = useParams();

    const getMovieDetails = async () => {
        // const data = await moviesService.getMovieDetailsById(id)
        try {
            setIsLoading(true)

            const data = await moviesService.getMovieDetailsById(id)
            setFilmDetails(data);
}catch (e){
    console.error(e)
} finally {
    setIsLoading(false)
}


}
    useEffect(() => {
        getMovieDetails();
    }, [])


    if(isLoading && !filmDetails || isLoading === null){
        return <div>Loading ... </div>
    }

return (
    <>
        <h1>{filmDetails.original_title}</h1>
        <h2>{filmDetails.genres.map(el => <span key={el.id}> - {el.name} - </span>)}</h2>
        <h3>{filmDetails.tagline}</h3>
        <p>{filmDetails.overview}</p>
    </>

    )
}