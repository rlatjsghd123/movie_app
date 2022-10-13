import React from 'react'
import PropTypes from 'prop-types';
import './Movie.css'
import { Link } from 'react-router-dom';

    function Movie({img, genres, title, year, summary}) {
    return (
            <div className='movie'>
            <Link to={{
                pathname:'movie-detail',
                state: {img, genres, title, year, summary}
            }}>
                <img src={img} alt={title} title={title} />
                <div className='movie_data'>
                    <h3 className='movie_title'>{title}</h3>
                    <h4 className='movie_year'>{year}</h4>
                    <ul className='movie_genres'>
                    {genres.map((genre, index) =>{
                    return( 
                        <li className='movie_genre' key={index}>{genre}</li>
                    )
                    })}
                    </ul>
                    <p className='movie_summary'>{summary.slice(0,180)}...</p>
                </div>
            </Link>
            </div>
    )
    }
    Movie.propTypes = {
        img : PropTypes.string.isRequired,
        year : PropTypes.number.isRequired,
        title :PropTypes.string.isRequired,
        summary : PropTypes.string.isRequired,
        genres : PropTypes.arrayOf(PropTypes.string).isRequired,//arrayOf()은  문자열을 원소로 같는 배열
    }

export default Movie
