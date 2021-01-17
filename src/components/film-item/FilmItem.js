import React from 'react';
import styles from './FilmItem.module.css'

const imgBuilder = (posterPath, size= 200) => `https://image/tmbd.org/t/p/w${size}${posterPath }`;


export const FilmItem = (props) => {

    const{original_title, owerview, release_date, vote_average, vote_count, poster_path, movieGenresList} = props;
    return (
        <div className={styles.filmItem}>
            <div
                style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: '80%',
                backgroundPosition: 'top',
                heigth: 200,
                width: '100%',
                backgroundImage: `url(${imgBuilder(poster_path)}`}}
            >
                {/*<img src={`https://image/tmbd.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>*/}
            </div>
            <div>
                <h2>{original_title}</h2>
                <h3>
                    {movieGenresList.map(({name, id}, i)=> (
                    <span key={id}>{name} { i < movieGenresList.length -1 && '-' } </span>
                ) )}
                </h3>
                <span>Rating:(total vote: {vote_count}</span>
                <p>{owerview}</p>
                <span>Release date: {release_date}</span>
            </div>
        </div>
    )
}