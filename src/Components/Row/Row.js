import React, { useState, useEffect } from 'react';
import axiosConfig from '../Axios/AxiosConfig';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({title , fetchUrl, isLargeRow}) => {
    // console.log(fetchUrl);

    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState('');

    // const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async() => {
            try {
                const res = await axiosConfig.get(fetchUrl);
                const data = res.data.results;
                setMovies(data)
                // setLoading(false);
                return res;
            } catch (error) {
                console.log(error);
            }

        }

        fetchData();
    }, [fetchUrl]);
    
    const opts = {
        height : '390',
        width : '100%',
        playerVar : {
            //https://developers.google.com/youtube/player_parameters
            autoPlay : 1,
        }
    };

    const hadleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParms = new URLSearchParams(URL(url).search);
                setTrailerUrl(urlParms.get('v'))
            }).catch(err => console.log(err))
        }
    }

    return (
 <div className="row">
                <h2> {title} </h2>
            <div className="row__posters">
                {
                    movies.map((movie) => (
                        <img onClick={() => hadleClick(movie)} className={`row__poster ${isLargeRow && "row_posterLarge"}`} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                    ))
                }
            </div>
            {trailerUrl && <YouTube vedioId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
